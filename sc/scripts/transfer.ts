import { ethers } from "hardhat";

async function main() {

    const [owner, other] = await ethers.getSigners();

    const tokenAddress = "0xeB2FdE601F4448f528602a1D6c2F614E0015eE2f";

    const token = await ethers.getContractAt("Token", tokenAddress);


    const tx = await token.transfer(other.address, ethers.parseEther("40000"));
    await tx.wait();


    const balance = await token.balanceOf(other.address);
    console.log("Balance: ", balance.toString());

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
