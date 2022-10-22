import Image from "next/image"
import React from "react"

const TeamCard = (props) => {
  return (
    <div className="team-card w-[230px] mx-auto border-[4px] rounded-xl mt-10 p-1 hover:border-amber-400 hover:scale-110 transition duration-300">
      <div className="img p-1 ">
        <Image
          src={props.img}
          alt="image of the team members"
          className="rounded-full  border-8 border-[#00FFD1]"
          width={200}
          height={200}
          priority
        >
        </Image>
      </div>
      <div className="details text-center mt-3 space-y-2 mb-2">
        <p>{props.name}</p>
        <p>{props.post}</p>
      </div>
    </div>
  )
}

export default TeamCard
