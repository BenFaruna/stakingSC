import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = import.meta.env.VITE_projectId

// 2. Set chains
const localhost = {
    chainId: 31337,
    name: 'Localhost',
    currency: 'ETH',
    explorerUrl: '',
    rpcUrl: "http://127.0.0.1:8545"
}

const sepolia = {
    chainId: 11155111,
    name: 'Sepolia',
    currency: 'ETH',
    explorerUrl: 'http://sepolia.etherscan.com',
    rpcUrl: import.meta.env.VITE_rpc_url

}

// 3. Create modal
const metadata = {
    name: 'Staking SC',
    description: 'My Website description',
    url: 'https://mywebsite.c import.meta.env.VITE_rpc_urlom', // origin must match your domain & subdomain
    icons: ['https://avatars.mywebsite.com/']
}

export const configureWeb3Modal = () => {
    createWeb3Modal({
        ethersConfig: defaultConfig({ metadata }),
        chains: [localhost, sepolia],
        projectId,
        tokens: {
            31337: {
                address: "0xeB2FdE601F4448f528602a1D6c2F614E0015eE2f"
            }
        }
    })
}