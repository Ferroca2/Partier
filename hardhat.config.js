require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path: '.env'});


/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL
const MUMBAY_PRIVATE_KEY = process.env.MUMBAY_PRIVATE_KEY

module.exports = {
  solidity: "0.8.17",
  hardhat: {
    chainId: 1337
  },
  mumbai: {
    url: ALCHEMY_API_URL,
    accounts: [`0x${MUMBAY_PRIVATE_KEY}`]
  },
};
