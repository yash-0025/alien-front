import React from 'react'
import Navbar from './Navbar'
import {createContext,useState} from 'react';
export const stateContext = createContext();
import {abi,address} from "../constansts/index"
import { ethers } from 'ethers';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const Layout = ({children}) => {

    const [connected, setConnected] = useState(false);
    const [provider,setProvider] = useState(null);
    const [contract,setContract] = useState(null);
    const [mintPage,setMintPage] = useState(false);
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider, // required
            theme: "dark",
            options: {
                rpc : {
                    80001 : "https://rpc-mumbai.maticvigil.com/"
                },
                infuraId: "6c4742187dec43689ccae31a3039363d" // required
            }
          }
    };
      
    

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
            // const provider = new WalletConnectProvider({
            //     rpc : {
            //         80001 : "https://rpc-mumbai.maticvigil.com/"
            //     },
            //     infuraId: "6c4742187dec43689ccae31a3039363d",
            //   });

            // await provider.enable();
            // const web3Provider = new ethers.providers.Web3Provider(provider);



            const web3Modal = new Web3Modal({
                theme: "dark",
                network: "mumbai", // optional
                cacheProvider: false, // optional
                providerOptions // required
            });
            const instance = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(instance,"any");           
            const signer =provider.getSigner();
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