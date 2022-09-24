import React from 'react'
import Navbar from './Navbar'
import {createContext,useState} from 'react';
export const stateContext = createContext();
import {abi,address} from "../constansts/index"
import { ethers } from 'ethers';
const Layout = ({children}) => {

    const [connected, setConnected] = useState(false);
    const [provider,setProvider] = useState(null);
    const [contract,setContract] = useState(null);
    const [mintPage,setMintPage] = useState(false);

    const setMintPageHandler = () => {
        setMintPage(true);
    }
    const networks = {
        mumbai: {
          chainId: `0x${Number(80001).toString(16)}`,
          chainName: "Mumbai Testnet",
          nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18
          },
          rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
          blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
        }
    }

    const connectWallet = async () => {
        try{
            const provider = new ethers.providers.Web3Provider(window.ethereum,"any");           
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            if(await signer.getChainId() != 80001){
                await window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            ...networks["mumbai"]
                        }
                    ]
                })
            }
            setProvider(signer);
            const contract = new ethers.Contract(address,abi,signer);
            setConnected(true);
            setContract(contract);
        }
        catch(err){
            alert(err.message);
        }
    }
    const mint = async () => {
        try{
          const transaction = await contract.mint();
          await transaction.wait();
          alert("Success")
        }
        catch(err){
          alert(err)
        }
      }

    return (
        <stateContext.Provider value={{
            connected,
            mint,
            setMintPageHandler,
            mintPage,
            connectWallet,
        }}>
            <Navbar />
            {children}
        </stateContext.Provider>
  )
}

export default Layout