import React from "react"

const ConnectSocial = () => {
  return (
    <div className="w-11/12 mt-4 bg-[#353535] container p-9 mx-auto text-white rounded-xl h-2/5 ">
      <h1 className="text-3xl text-center bg-[#353535] underline ">
        Connect With Us
      </h1>
      <div className="main bg-[#353535]  md:mt-10   ">
        <div className="webContent    bg-[#353535]">
          <p className="mt-5 md:text-3xl bg-[#353535] text-center">Join AliensOnEarth NFT club.</p>
          <p className="mt-5 md:text-xl bg-[#353535] text-center">Don’t miss out chance to get your Aliens NFT.</p>
        </div>
        <div className="mobileContent bg-[#353535]  ">
          <button className="discord cursor-pointer hover:scale-x-110 hover:text-xl bg-[#353535] flex justify-center mx-auto mt-6 px-3 py-2 border-solid rounded-lg border-4 border-[#FFB800] text-base font-medium w-3/4 md:text-2xl "> Discord <img src="discord.png" alt="discord-logo" className="h-6 mx-2 bg-[#353535] " /> </button>
          <button className="discord cursor-pointer hover:scale-x-110 hover:text-xl bg-[#353535] flex justify-center mx-auto mt-6 px-3 py-2 border-solid rounded-lg border-4 border-[#7D68FF] text-base font-medium w-3/4  md:text-2xl"> Twitter <img src="tweeter.png" alt="twitter-logo" className="h-6 mx-2 bg-[#353535]" /> </button>
         
        </div>
      </div>
    </div>
  )
}

export default ConnectSocial
