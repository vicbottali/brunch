//const Context = artifacts.require("Context");
//const EIP712= artifacts.require("EIP712");
const Brunch = artifacts.require("Brunch");

module.exports = function (deployer) {
    //await deployer.deploy(Context);
    deployer.deploy(Brunch);
};