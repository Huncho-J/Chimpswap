const ChimpToken = artifacts.require("ChimpToken.sol");
const LiquidityMigrator = artifacts.require("LiquidityMigrator.sol");

module.exports = async function (deployer) {
  await deployer.deploy(ChimpToken);
  const chimpToken = await ChimpToken.deployed();

  const routerAddress = '';
  const pairAddress = '';
  const routerForkAddress = '';
  const pairForkaddress  ='';
  
  await deployer.deploy(LiquidityMigrator,routerAddress,pairAddress, routerForkAddress, pairForkaddress, chimpToken.address );

  const liquidityMigrator = await LiquidityMigrator.deployed();
  await chimpToken.setLiquidator(liquidityMigrator.address);
};
