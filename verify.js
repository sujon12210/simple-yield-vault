const hre = require("hardhat");

async function main() {
  const contractAddress = "YOUR_DEPLOYED_ADDRESS_HERE";

  console.log("Verifying contract...");
  await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: [],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
