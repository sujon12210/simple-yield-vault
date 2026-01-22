const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("YieldVault", function () {
  it("Should accept deposits and allow withdrawals", async function () {
    const [owner] = await ethers.getSigners();
    const Vault = await ethers.getContractFactory("YieldVault");
    const vault = await Vault.deploy();

    // Test Deposit
    await vault.stake({ value: ethers.parseEther("1.0") });
    expect(await vault.balances(owner.address)).to.equal(ethers.parseEther("1.0"));

    // Test Withdraw
    await vault.withdraw(ethers.parseEther("0.5"));
    expect(await vault.balances(owner.address)).to.equal(ethers.parseEther("0.5"));
  });
});
