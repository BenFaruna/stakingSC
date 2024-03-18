require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY
const HARDHAT_PRIVATE_KEY = process.env.LOCAL_PRIVATE_KEY
const url = process.env.SEPOLIA_URL

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url,
      accounts: [PRIVATE_KEY],
    },
    mainnet: {
      url: "https://eth-mainnet.g.alchemy.com/v2/5pXFwYUfXcx48EJ8j-UU0PiI-caoPVmq",
      accounts: [PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
