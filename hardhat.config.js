require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545", // Replace with the Ganache URL
      

    },
    goerli: {
      url: "https://goerli.infura.io/v3/INFURA API KEY",
      chainId: 5,
      accounts: ['PRIVATE KEY']
    }
  }


};
