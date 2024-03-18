import { Button, Container, Flex } from "@radix-ui/themes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from "./components/NavBar";
import StakingCard from "./components/StakingCard";

import { configureWeb3Modal } from "./connections";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import TotalRewards from "./components/TotalRewards";

configureWeb3Modal()

function App() {

  const { isConnected } = useWeb3ModalAccount();

  return (
    <Container>
      <NavBar />
      <ToastContainer theme="dark" />
      <TotalRewards />
      <Flex justify={"center"}>
        {isConnected ? <StakingCard /> : <w3m-connect-button />}
      </Flex>
    </Container>
  )
}

export default App
