import React from "react"
import {address} from "../constansts/index"
import { ethers } from "ethers";
import {useContext,useEffect} from "react"
import { stateContext } from "../components/Layout";

const Mint = () => {
  const {connectWallet, connected,mintPage,setMintPageHandler,mint} = useContext(stateContext);
  useEffect(() => {
    setMintPageHandler();
  },[])

  return (
    <div className="MintPage min-w-[360px] 2xl:text-[40px] bg-black">
    <div className="maincon md:flex md:justify-evenly md:my-auto md:mt-20 bg-black">
      <div className="forImg p-2 flex justify-center mt-20 md:py-auto  md:px-[10%] bg-black">
        <img
          src="A L I E N.gif"
          alt="revealing Image"
          width={400}
          className="rounded-2xl border border-[#FFB800] border-4"
        />
        </div>
        <div className="forContent  mx-5  mt-5 space-y-3 text-center md:text-left my-28 md:mt-40 md:mr-52 md:p-2">
          <div className="nftContent text-white text-center">
            <div className="info flex justify-center md:justify-start">
              <p className="my-3">NFT ID :- </p>
              <p className="my-3 ml-5"> 1 </p>
            </div>
          </div>
          <div className="nftContent text-white">
            <div className="info flex justify-center md:justify-start">
              <p className="my-3">NFT Price :- </p>
              <p className="my-3 ml-5"> 50.00 $ </p>
            </div>
          </div>
          <div className="btn  ">
            {
              connected ? 
              <button className=" bg-gradient-to-r from-[#FD7900] to-[#FFE600] w-56 h-10 rounded text-2xl font-semibold hover:text-white" onClick={mint}>
                Mint Now
              </button>
              :
              <button className=" bg-gradient-to-r from-[#FD7900] to-[#FFE600] w-56 h-10 rounded text-2xl font-semibold hover:text-white" onClick={connectWallet}>
                Connect Wallet
              </button>
            }
        </div>
        </div>
      </div>
      <div className="bg-[#242424] ">
        <div className="bg-[#242424] text-white marker:container w-full  mx-auto px-6 pt-10 pb-6 static md:bottom-0 md:fixed md:max-w-full text-center" >
          
          Contract Address = `{address} `
</div>
  </div>
    </div>
  )
}

export default Mint
