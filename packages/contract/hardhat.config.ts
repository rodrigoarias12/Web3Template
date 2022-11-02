/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("dotenv").config();
 require("@nomiclabs/hardhat-ethers");
 require("@nomiclabs/hardhat-etherscan");
 require("@nomicfoundation/hardhat-toolbox");


 module.exports = {
   solidity: "0.8.17",
   defaultNetwork: "mumbai",
   networks: {
     hardhat: {},
     mumbai: {
       //ankr's free public rpc
       url: "https://rpc.ankr.com/polygon_mumbai",
       accounts: [`0x${process.env.PRIVATE_KEY}`],
     },
   },
   etherscan: {
     apiKey: {
       polygon: process.env.POLYGONSCAN_API_KEY || "",
       polygonMumbai: process.env.POLYGONSCAN_API_KEY || "",
     },
   },
  typechain: {
    outDir: "../dapp/typechain-types",
    target: "ethers-v5",
  },
 };