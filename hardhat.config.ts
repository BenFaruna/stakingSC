require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY= process.env.PRIVATE_KEY
const HARDHAT_PRIVATE_KEY = process.env.LOCAL_PRIVATE_KEY
const URL = process.env.SEPOLIA_URL

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    localhost: {
      url: "http://localhost:8545",
      accounts: [HARDHAT_PRIVATE_KEY],
    },
    sepolia: {
      url: URL,
      accounts: [PRIVATE_KEY],
    }
  },
  etherscan: { 
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
