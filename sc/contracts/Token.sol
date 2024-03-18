// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    // Initial constructor to set the total supply (modify here)
    constructor(uint256 initialSupply) ERC20("BFA Token", "BFA") {
        _mint(msg.sender, initialSupply);
    }
}
