// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./IERC20.sol";

error ADDRESS_ZERO_CALL_ERROR();
error ZERO_STAKE_ERROR();
error ZERO_UNSTAKE_ERROR();
error UNSTAKE_AMOUNT_EXCEEDS_STAKED_AMOUNT_ERROR();
error UNSTAKE_TIME_NOT_ELAPSED_ERROR();

contract Staking {
    uint constant minUnlockTime = 1 minutes;
    uint constant stakingRewardPerMinUnlockTime = 10; // this represents 1% per minute

    mapping(address => uint) public stakedAmount;
    mapping(address => uint) public stakingTime;

    address public owner;

    IERC20 tokenContract;

    event Unstake(address indexed stakes, uint amount, uint when);
    event Stake(address indexed staker, uint amount, uint when);

    constructor(address tokenContractAddress) payable {
        if (tokenContractAddress == address(0)) {
            revert ADDRESS_ZERO_CALL_ERROR();
        }
        owner = msg.sender;
        tokenContract = IERC20(tokenContractAddress);
    }

    function stake(uint amount) external {
        if (msg.sender == address(0)) {
            revert ADDRESS_ZERO_CALL_ERROR();
        }
        if (amount == 0) {
            revert ZERO_STAKE_ERROR();
        }

        if (stakedAmount[msg.sender] > 0) {
            uint reward = _calculateAccrual(msg.sender);
            stakedAmount[msg.sender] = stakedAmount[msg.sender] + reward;
            stakingTime[msg.sender] = block.timestamp;
        }

        require(
            tokenContract.transferFrom(msg.sender, address(this), amount),
            "Transfer failed"
        );

        stakedAmount[msg.sender] = stakedAmount[msg.sender] + amount;
        stakingTime[msg.sender] = block.timestamp;
        emit Stake(msg.sender, amount, block.timestamp);
    }

    function unstake(uint amount) external {
        if (amount <= 0) {
            revert ZERO_UNSTAKE_ERROR();
        }

        if ((block.timestamp - stakingTime[msg.sender]) < minUnlockTime) {
            revert UNSTAKE_TIME_NOT_ELAPSED_ERROR();
        }

        uint reward = _calculateAccrual(msg.sender);
        uint totalAmount = stakedAmount[msg.sender] + reward;
        if (amount > totalAmount) {
            revert UNSTAKE_AMOUNT_EXCEEDS_STAKED_AMOUNT_ERROR();
        }

        uint remainingAmount = totalAmount - amount;
        stakedAmount[msg.sender] = remainingAmount;
        stakingTime[msg.sender] = block.timestamp;
        require(tokenContract.transfer(msg.sender, amount), "Transfer failed");
        emit Unstake(msg.sender, amount, block.timestamp);
    }

    function _calculateAccrual(address staker) internal view returns (uint) {
        uint timeElapsed = block.timestamp - stakingTime[staker];
        uint reward = (stakedAmount[staker] *
            (stakingRewardPerMinUnlockTime *
                uint(timeElapsed / minUnlockTime))) / 100;
        return reward;
    }

    function getTotalRewards(address staker) external view returns (uint) {
        uint reward = _calculateAccrual(staker);
        return stakedAmount[staker] + reward;
    }

    fallback() external {}
}
