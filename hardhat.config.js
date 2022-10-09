require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path: '.env'});


/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL
const MUMBAY_PRIVATE_KEY = process.env.MUMBAY_PRIVATE_KEY

module.exports = {
  solidity: "0.8.17",
<<<<<<< HEAD
  networks: {
      hardhat: {
        chainId: 1337
      },
      mumbai: {
        url: ALCHEMY_API_URL,
        accounts: [MUMBAY_PRIVATE_KEY]
      },
  }
=======
  hardhat: {
    chainId: 1337
  },
  networks: {
    polygon_mumbai: {
      url: ALCHEMY_API_URL,
      accounts: [MUMBAY_PRIVATE_KEY]
    },
  },
>>>>>>> 3b3defa5abc59ae9642abbe721954b3e272eedde
};
