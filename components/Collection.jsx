import React from "react"
import CollectionCard from "./CollectionCard"

const Collection = () => {
  return (
    <div className="md:my-10 mb-20">
      <h1 className="text-white text-center text-4xl md:text-6xl underline ">
        Collection
      </h1>
      <div className="flex flex-wrap justify-center md:mt-24 mt-8 md:justify-evenly">
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </div>
      <div className="space-y-5 mt-5 flex flex-col items-center">
        <p className="text-white text-3xl text-center mt-5">
          Get your Alien NFt's now !!
        </p>
        <button className="text-white text-center bg-gradient-to-r from-[#BD00FF] to-[#FFB905] w-2/4 md:w-1/4 h-12 rounded-xl font-bold text-2xl md:text-2xl md:font-semibold my-5 ">
          Mint Now
        </button>
      </div>
    </div>
  )
}

export default Collection
