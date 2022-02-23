const hre = require("hardhat");

module.exports = async ({ contract }) => {
  const Attacker = await hre.ethers.getContractFactory(contract);
  const attacker = await Attacker.deploy();
  await attacker.deployed();

  console.log(`${contract} deployed to:`, attacker.address);
}

