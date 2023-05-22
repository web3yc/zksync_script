import { Wallet, utils } from "zksync-web3js";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";


const keys = [] //  Keys

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
    for (let index = 0; index < keys.length; index++) {
        try {
            const element = keys[index];
            console.log(`Running deploy script for the Greeter contract`);  // Initialize the wallet.
            const wallet = new Wallet(element);  // Create deployer object and load the artifact of the contract you want to deploy.
            const deployer = new Deployer(hre, wallet);
            const artifact = await deployer.loadArtifact("Greeter");  // Estimate contract deployment fee
            const greeting = "Hi there!";
            const deploymentFee = await deployer.estimateDeployFee(artifact, [greeting]);
            // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
            // `greeting` is an argument for contract constructor.
            const parsedFee = ethers.utils.formatEther(deploymentFee.toString());
            console.log(`The deployment is estimated to cost ${parsedFee} ETH`); const greeterContract = await deployer.deploy(artifact, [greeting]);  //obtain the Constructor Arguments
            console.log("constructor args:" + greeterContract.interface.encodeDeploy([greeting]));  // Show the contract info.
            const contractAddress = greeterContract.address;
            console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
        } catch (error) {
            console.log("Error: deploy");

        }
    }
}