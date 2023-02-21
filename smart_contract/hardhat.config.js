require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/KusCLwNS019oh3dTkcy4r61rc4j4mA8F',
      accounts: [ 'd372e66a4189fbd2956e65676f0bd223ab34d3a8d44bb858d75c39720f00adb7' ]
    }
  }
};
