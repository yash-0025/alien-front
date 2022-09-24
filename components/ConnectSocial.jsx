import React from "react"

const ConnectSocial = () => {
  return (
    <div id="social" className="w-11/12 mt-4 bg-[#353535] container p-9 mx-auto text-white rounded-xl h-2/5 ">
      <h1 className="text-3xl text-center bg-[#353535] underline ">
        Connect With Us
      </h1>
      <div className="main bg-[#353535]    md:flex  ">
        <div className="webContent    bg-[#353535] md:w-1/2 md:space-y-8 md:mt-10">
          <p className="mt-5 md:text-5xl bg-[#353535] text-center md:leading-loose">Join Alien's On Earth NFT club.</p>
          <p className="mt-5 md:text-xl bg-[#353535] text-center">Don’t miss out chance to get your Aliens NFT.</p>
        </div>
        <div className="mobileContent bg-[#353535] md:w-1/2 md:mt-20  ">
        <a href="https://www.instagram.com/aliensonearth.io/" target="_blank"  rel="noopener noreferrer">
        <button className="Instagram cursor-pointer hover:scale-x-110 duration-300 bg-[#353535] flex justify-center mx-auto mt-6 px-3 py-2 border-solid rounded-lg border-4 border-[#E1425E] text-base font-medium w-3/4   md:text-2xl "> Instagram <img src="insta.png" alt="discord-logo" className="h-6 mx-2 bg-[#353535] mt-1 ]" /> </button>
          </a>
          <a href="https://twitter.com/Aliensonearth12?t=crtb4sgAAWD9ppNxlfl8VQ&s=08" target="_blank" rel="noopener noreferrer">
          <button className="Twitter cursor-pointer hover:scale-x-110 duration-300 bg-[#353535] flex justify-center mx-auto mt-6 px-3 py-2 border-solid rounded-lg border-4 border-[#7D68FF] text-base font-medium w-3/4  md:text-2xl"> Twitter <img src="tweeter.png" alt="twitter-logo" className="h-6 mx-2 bg-[#353535] mt-1" /> </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ConnectSocial
