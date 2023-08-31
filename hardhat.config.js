require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545", // Replace with the Ganache URL
      

    },
    goerli: {
      url: "https://goerli.infura.io/v3/a2e1a29db46d41858894d5863bfae282",
      chainId: 5,
      accounts: ['95880070012f74d246f19b151c4648295c5f6c7f000860846fdd4f68e6f003fe']
    }
  }


};
