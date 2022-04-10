require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints accounts", async (_, { web3 }) => {
    console.log(await web3.eth.getAccounts());
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    defaultNetwork: "ganache",
    networks: {
        ganache: {
            url: "http://192.168.1.19:7545",
            accounts: ['a2a0f7afed25a1b6e7efbffc5b9eba9d717f8d97c6a45333a0f093a9923a8c30']
        }
    },
  solidity: "0.8.4",
};
