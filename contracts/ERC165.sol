// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;
import "./IERC165.sol";

contract ERC165 is IERC165 {
  function supportsInterface(
    bytes4 interfaceId
  ) public view virtual override returns(bool) {
    return interfaceId == type(IERC165).interfaceId;
  }
}

// http://127.0.0.1:8545
//0x5fbdb2315678afecb367f032d93f642f64180aa3