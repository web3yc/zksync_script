import { privates } from '../libs/getPrivates.js';
import * as zksync from "zksync";
import * as ethers from "ethers";
import * as zksyncWeb from "zksync-web3js";

const mainnet = 'mainnet';
const zkSyncProviderUrl = 'https://mainnet.era.zksync.io';

const getProviders = async () => {
    const syncProvider = await zksync.getDefaultProvider(mainnet);
    const ethersProvider = await ethers.getDefaultProvider(mainnet);
    const zkSyncProvider = new zksyncWeb.Provider(zkSyncProviderUrl);
    const ethProvider = ethers.getDefaultProvider(mainnet);
    
    return { syncProvider, ethersProvider, zkSyncProvider, ethProvider };
};

const getNonce = async (privateKeys) => {
    const { ethersProvider, syncProvider, zkSyncProvider, ethProvider } = await getProviders();
    const lists = [];
    
    for (const privateKey of privateKeys) {
        const signer = new ethers.Wallet(privateKey, ethersProvider);
        const syncWallet = await zksync.Wallet.fromEthSigner(signer, syncProvider);
        const address = syncWallet.address();
        
        const zkSyncWallet = new zksyncWeb.Wallet(privateKey, zkSyncProvider, ethProvider);
        console.log(`Querying Address:${address}...`);
        const [lite, era] = await Promise.all([syncWallet.getNonce(), zkSyncWallet.getNonce()]);
        
        console.table([{
            address,
            zksync_lite_nonce: lite,
            zksync_era_nonce: era,
        }]);
        
        lists.push({
            account: address,
            zksync_lite_nonce: lite,
            zksync_era_nonce: era,
        });
    }
    
    console.table(lists);
};

getNonce(privates);
