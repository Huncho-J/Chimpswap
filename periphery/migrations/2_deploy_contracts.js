const Router = artifacts.require("ChimpswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer) {
  let weth;
  const FACTORY_ADDRESS = '0xeea7cFca2bbCdC536Fb3F2ec8549Acd1Da5e7166';

  await deployer.deploy(WETH);
  weth = await WETH.deployed();

  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
