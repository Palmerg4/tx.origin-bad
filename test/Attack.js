const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers, waffle } = require("hardhat");

describe("Attack Prey.sol", () => {
    it("Should allow Attack.sol to change the owner of Prey.sol", async () => {
        const [_, addr1] = await ethers.getSigners();

        const Prey = await ethers.getContractFactory("Prey");
        const prey = await Prey.connect(addr1).deploy();
        await prey.deployed();

        const Attack = await ethers.getContractFactory("Attack");
        const attack = await Attack.deploy(prey.address);
        await attack.deployed();

        let tx = await attack.connect(addr1).attack();
        await tx.wait();

        expect(await prey.owner()).to.equal(attack.address);
    });
});