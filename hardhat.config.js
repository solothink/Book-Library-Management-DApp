require("@nomicfoundation/hardhat-toolbox");

const SEPOLIA_PRIVATE_KEY = "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url:`https://sepolia.infura.io/`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
