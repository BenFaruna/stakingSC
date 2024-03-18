import { ethers } from "ethers";
import StakingAbi from "./stakingAbi.json";
import TokenAbi from "./tokenAbi.json";

export const getStakingContract = (providerOrSigner: ethers.ContractRunner) => {
    return new ethers.Contract(
        import.meta.env.VITE_staking_contract,
        StakingAbi,
        providerOrSigner
    )
}

export const getTokenContract = (providerOrSigner: ethers.ContractRunner) => {
    return new ethers.Contract(
        import.meta.env.VITE_token_contract,
        TokenAbi,
        providerOrSigner
    )
}