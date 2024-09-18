require("@nomicfoundation/hardhat-toolbox");

const SEPOLIA_PRIVATE_KEY = "7d79175469e64af70e26184c572223d48063c3cf56ffcb6ce60fc47038693dc3";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url:`https://sepolia.infura.io/v3/151f7e9741b742089dc3b0b5bf21fc8d`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
