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
    const [id,setId] = useState(1);
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider, // required
            options: {
                rpc : {
                    4 : "https://rinkeby.infura.io/v3/6c4742187dec43689ccae31a3039363d"
                },
                infuraId: "6c4742187dec43689ccae31a3039363d", // required
                qrcodeModalOptions: {
                    desktopLinks: [
                      'ledger',
                      'tokenary',
                      'wallet',
                      'wallet 3',
                      'secuX',
                      'ambire',
                      'wallet3',
                      'apolloX',
                      'zerion',
                      'sequence',
                      'punkWallet',
                      'kryptoGO',
                      'nft',
                      'riceWallet',
                      'vision',
                      'keyring'
                    ],
                    mobileLinks: [
                      "rainbow",
                      "metamask",
                      "argent",
                      "trust",
                      "imtoken",
                      "pillar",
                    ],
                  },
            }
          }
    };
      
    
    

    const connectWallet = async () => {
        try{
             

            const web3Modal = new Web3Modal({
                theme: "dark",
                network: "rinkeby", // optional
                cacheProvider: false, // optional
                providerOptions // required
            });
            const instance = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(instance,"any");
            const signer =provider.getSigner();
            console.log(await signer.getChainId());
            if(await signer.getChainId() != 4){
              await  window.ethereum.request({
                  method: "wallet_switchEthereumChain",
                  params: [
                      {
                          chainId : `0x${Number(4).toString(16)}`
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
            console.log(err);
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

    const getId = async () => {
        try{
            const id = await contract.tokenIds();
            setId(id+1);
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <stateContext.Provider value={{
            connected,
            mint,
            connectWallet,
            getId,
            id
        }}>
            {children}
        </stateContext.Provider>
  )
}

export default Layout