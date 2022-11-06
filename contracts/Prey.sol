// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract Prey {
    error UnauthorizedOwnerChange();

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function setOwner(address newOwner) public {
        if(tx.origin != owner) revert UnauthorizedOwnerChange();
        owner = newOwner;
    }
}

