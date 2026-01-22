const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const vault = await hre.ethers.deployContract("YieldVault");
  await vault.waitForDeployment();

  console.log("YieldVault deployed to:", vault.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
