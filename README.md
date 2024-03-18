# Staking Smart Contract & UI
A DApp that allow users to stake an ERC20 token and earn rewards in the same token.

## Getting started
- Clone the repository
```
$ git clone https://github.com/BenFaruna/stakingSC.git
```
The repository contains a directory to the frontend and the smart contract.

## Deploying smart contract
- Change directory to sc using the command
```
$ cd sc
```

- Create the `.env` file and copy the contents of `.env.example` into `.env` and supply the values.
```
LOCAL_PRIVATE_KEY= # local deployment accout private key
PRIVATE_KEY= # private key to developer account used for deployment
SEPOLIA_URL= # rpc url to sepolia testnet
ETHERSCAN_API_KEY= # used for verification of deployed smart contract
```

- Install the dependencies
```
$ npm install
```

- On a new terminal deploy the contract on sepolia testnet
```
$ pnpm hardhat run scripts/deploy.ts --network sepolia
```

The contract address for the token contract and the staking contract will be shown on your terminal, you will be needing these values to connect your DApp to your contract instances.


## Connecting UI to contract
- Open the frontend directory and create `.env` using the contents in `.env.example`
```
VITE_projectId= # project ID from walletconnect
VITE_rpc_url= # rpc url to live network (mainnet or testnet)
VITE_wss_url= # websocket rpc url to live network (mainnet or testnet)
VITE_token_contract= # contract address of deployed token contract
VITE_staking_contract= # contract address of deployed staking contract
```

- Install dependencies
```
$ npm install
```

- Start up the development server of the application
```
$ npm run dev
```