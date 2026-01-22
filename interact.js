const hre = require("hardhat");

const CONTRACT_ADDRESS = "YOUR_DEPLOYED_ADDRESS_HERE";

async function main() {
  const vault = await hre.ethers.getContractAt("YieldVault", CONTRACT_ADDRESS);
  
  // Example: Check Balance
  const total = await vault.totalStaked();
  console.log(`Total ETH Staked: ${hre.ethers.formatEther(total)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
