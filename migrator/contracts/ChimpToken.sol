pragma solidity 0.8.0;
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
contract ChimpToken is ERC20 {
    address admin;
    address public liquidator;
    constructor() ERC20('Chimp Token', 'CTK') public{
      admin =msg.sender;
    }

    function setLiquidator(address _liquidator) external {
      require(msg.sender == admin, 'only admin');
      liquidator = msg.sender;
    }

    function mint(address to, uint amount) external {
      require(msg.sender == liquidator, 'only liquidator');
      _mint(to, amount);
    }
}
