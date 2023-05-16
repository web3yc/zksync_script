# ZkSync [Era, Lite] Network Batch Airdrop Script

## The strongest zkSync interaction strategy on the entire network (with wool pulling tools and wool pulling scripts attached) let's do it! 

<p align="left">
<a href="./README.en.md">English</a>
</p>

## Script Capabilities

- [√] Batch account creation
- [√] Batch deployment of contracts
- [√] Batch transfer to on-chain wallet using OKX exchange
- [√] Batch transfer on zksync lite network
- [√] Batch mint NFT on zksync lite network
- [√] Batch cross-chain transfer; eth network => zksync lite network
- [√] Batch query network interaction times on zksync lite network
- [√] Batch transfer on zksync era network
- [√] Batch mint NFT on zksync era network
- [√] Batch cross-chain transfer; eth network => zksync era network
- [√] Batch query network interaction times on zksync era network

## Running Steps

1. Download and install Node according to your system, search for tutorials to install (https://nodejs.cn/download/)
2. Download/pull the code and unzip it<img src="./pull_code.jpg"></img>
3. Open the terminal (command line) window, if you don't know how, check the tutorial
4. Install the required dependencies for the script by entering `npm i` in the terminal (command line) window
5. Open the `index.js` file in the `config` folder of the zksync_srcipt folder to configure the relevant parameters
6. Open the `accounts` folder in the zksync_srcipt folder and configure the imported account information according to the file example. If there is no file, run the script command create-wallet to create wallet accounts in batches
7. In the terminal (command line) window, run the script
   - zksync era network batch transfer to oneself to increase interaction times, run command: `npm run zksync-era-transfer`
   - zksync era network batch cross-chain transfer (eth network => zksync era network), run command: `npm run zksync-era-bridge`
   - zksync era network batch mint nft, run command: `npm run zksync-era-mint-nft`
   - zksync lite network batch transfer to oneself to increase interaction times, run command: `npm run zksync-era-transfer`
   - zksync lite network batch cross-chain transfer (eth network => zksync lite network), run command: `npm run zksync-lite-bridge`
   - zksync lite network batch mint nft, run command: `npm run zksync-lite-mint-nft`
   - zksync lite and era network, view the interaction times (nonce) of each wallet, run command: `npm run zksync-era-lite-nonce`


## The strongest zkSync interaction strategy on the entire network (with wool pulling tools and wool pulling scripts attached)
let's do it! As a senior practitioner, I have participated in P2P high-interest investments, stock IPOs, and other activities. Compared with Bitcoin and other digital currencies, these investments have lower returns or higher thresholds. Three years ago, I joined the Defi field and obtained good investment returns through participation in airdrops and other methods. This made me more determined to support early projects in the digital currency field and become a "wool puller".


Review of Arbitrum. It is well known that zkSync is very popular and has extremely high airdrop expectations. However, I will not blindly interact with it every day without thinking, waiting for the airdrop to arrive. Before deciding whether to interact with zkSync, I like to use quantitative data to assist in making decisions. Therefore, before formulating the zkSync interaction plan, we will first review Arbitrum's airdrop strategy. From the figure below, we can see that Arbitrum's airdrop refers to the following six indicators:
 - Cross-chain bridge
 - On-chain interaction cycle
 - On-chain interaction tx or contract number
 - On-chain transaction volume
 - Amount of cross-chain to Arbitrum one
 - Active interaction number on Arbitrum


Determine the target strategy. Combining the airdrop indicators and fund reserves, I have given my own target interaction strategy:
 - ZkSync lite cross-chain bridge
 - ZkSync era cross-chain bridge
 - Batch mint nft to generate tx: 100 transactions (distributed to 10 months, 2-3 times a week, cost $100)
 - Transfer to yourself to generate tx: 40 transactions (distributed to 10 months, once a week, cost $40)
At the same time, prepare 50,000 dollars in two batches to charge 10 large accounts.

How to operate. 
In addition to on-chain interaction, I also need to solve two problems:
- Generate a batch of new accounts, isolate the accounts from each other to avoid being detected.
- Distribute interaction fees in batches from the exchange, and use the daily large flow of the exchange account to avoid being detected by the witch.
All of the above operations can be automated through research and scripts. https://github.com/zksync-web3/zksync_script

At this point, some students may have questions:
- How to isolate IP and prevent being judged as batch operation when using scripts for batch operations? From a technical point of view, on-chain data will not collect IP and other information, so there is no need to consider it. At the same time, we can use combined operations to make our multiple accounts completely realize different interaction behaviors. For example, at 10:50 today, 50 accounts mint a batch of nft and package them to blocks of different heights. Tomorrow, at 3:50 pm, 50 accounts transfer to themselves and package them to blocks of different heights. Then the behavior of the script is consistent with your manual interaction path.
- Why not increase interaction diversity, such as interacting with syncSwap and other on-chain dex? First of all, we must understand that what we want to do is to interact with the public chain, win the airdrop, and since the launch, many projects on zkSync have run away due to lack of conscience or technical incompetence. We are here to pull wool with high certainty, not to gamble, so let's return to the most essential on-chain behaviors, transfer and mintNft. At the same time, the gas consumption of other on-chain interactions is much higher than these two, so let's save where we can.
- Should we charge some Dogecoin? During the airdrop, Dogecoin will refer to the cross-chain bridge and the number of on-chain interaction tx. If we interact according to the strategy, we already have the conditions for receiving the Dogecoin airdrop, so there is no need to charge Dogecoin. It is better to be stable and happy than to jump up and down after charging Dogecoin.


Risk prevention.
- Our project script is hosted on the world's largest gayhub, open, transparent, and secure, and refuses any private chat scripts.
- The distribution of handling fees from the exchange in the script involves the exchange's apiKey, which must not be exposed to others.
- Private key accounts are very important! The script only runs on your own computer, and refuses any proxy interaction.
