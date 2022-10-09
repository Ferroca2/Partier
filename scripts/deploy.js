// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  let txHash, txReceipt
  const Partier = await hre.ethers.getContractFactory("Partier");
  const partier = await Partier.deploy();
  await partier.deployed();

  txHash = partier.deployTransaction.hash;
  txReceipt = await hre.ethers.provider.waitForTransaction(txHash);
  let partierAddress = txReceipt.contractAddress

  console.log("partier deployed to:", partierAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
