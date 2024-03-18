const ethers = require("ethers");
// const { abi } = require("./tokenAbi");

const CONTRACT_ABI = `[
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "initialSupply",
            "type": "uint256"
        }
    ],
        "stateMutability": "nonpayable",
            "type": "constructor"
},
{
    "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
            "name": "Approval",
                "type": "event"
}]`

const main = async () => {
    var rpc_url = "https://eth-mainnet.g.alchemy.com/v2/5pXFwYUfXcx48EJ8j-UU0PiI-caoPVmq";
    let provider = new ethers.JsonRpcProvider(rpc_url);

    var contractAddress = "0xeB2FdE601F4448f528602a1D6c2F614E0015eE2f";

    // let contract = new ethers.Contract(contractAddress, CONTRACT_ABI, provider);
    const filter = {
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        topics: [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
        ]
    }

    provider.on("block", event => {
        console.log(' ... something happened ...', event);
    });

}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});