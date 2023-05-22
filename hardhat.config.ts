import { HardhatUserConfig } from "hardhat/config";

import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";

import { ProxyAgent, setGlobalDispatcher } from "undici"

const proxyUrl = ''; // Your Proxy URL 
const proxyAgent = new ProxyAgent(proxyUrl);

setGlobalDispatcher(proxyAgent)



const obj: HardhatUserConfig = {
  zksolc: {
    version: "1.3.5",
    compilerSource: "binary",
    settings: {
    },

  },
  defaultNetwork: "zkMainnet",
  networks: {
    zkSyncTestnet: {
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli",
      zksync: true,
    },
    zkMainnet: {
      url: "https://zksync2-mainnet.zksync.io",
      ethNetwork: "mainnet",
      zksync: true,
    }
  },
  solidity: {
    version: "0.8.17",
  },
}

module.exports = obj;