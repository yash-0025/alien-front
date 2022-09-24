import React from "react"

const Story = () => {
  return (
    <div className="mt-9" id="ourstory">
      <h1 className="text-white text-center text-3xl underline md:text-6xl">Our Story</h1>
      <div className="md:flex justify-between ">
        <div className="left text-white font-semibold text-xl text-center md:text-left md:w-1/2  mt-5 md:mt-5 p-5 leading-10 tracking-widest">
          <p className="mt-4 md:text-3xl md:font-normal leading-loose md:pt-5 ">
            One Night few friend's were sitting together in the Garden and
            talking about the Aliens , And we were imagining if Alien's gonna
            visit to Earth and start wearing clothes like us. Then how smart
            they will look . Let's together explore the Alien's World! .
                  </p>
                  <div className="num flex  justify-evenly mt-5 md:mt-10 space-x-1 ">
                      <div className="1 border-4 border-[#FFB800] w-28 md:w-44 md:text-center rounded-md">
                          <p className="mt-5 ">10,000</p>
                          <p>NFT's </p>
                      </div>
                      <div className="2 border-4 w-28 md:w-44 rounded-md md:text-center border-[#00E0FF]">
                      <p>9,700</p>
                      <p className="text-">NFT's for mint</p>
                      </div>
                      <div className="3 border-4 w-28 md:w-44 md:text-center rounded-md border-[#FF7A00]">
                      <p>2,000</p>
                      <p>Whitelist</p>
                      <p>Users</p>
                      </div>
                  </div>
        </div>
        <div className="right p-4 md:mt-5  ">
          <img src="Story.png" alt="image" />
        </div>
      </div>
    </div>
  )
}

export default Story
