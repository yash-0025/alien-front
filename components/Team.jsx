import React from "react"
import TeamCard from "./TeamCard"

const Team = () => {
    return (
        <div className="text-white flex-row  space-y-4 mb-10">
            <h1 className="p-4 text-center font-semibold text-3xl md:text-6xl underline">Meet the Team</h1>
      <div className="sec1 md:flex">
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
      <div className="sec2 md:flex ">
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  )
}

export default Team
