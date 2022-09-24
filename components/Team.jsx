import React from "react"
import TeamCard from "./TeamCard"

const Team = () => {
    return (
        <div className="text-white flex-row  space-y-4 mb-10" id="team">
            <h1 className="p-4 text-center font-semibold text-3xl md:text-6xl underline">Meet the Team</h1>
      <div className="sec1 md:flex">
        <TeamCard name="GB" post="C.E.O"  img="3.png"  />
        <TeamCard name="GB" post="Manager" img="8047.png" />
        <TeamCard name="GB" post="Artist" img="5005.png" />
      </div>
      <div className="sec2 md:flex ">
        <TeamCard name="GB" post="Community & Business" img="8072.png" />
        <TeamCard name="GB" post="Website Developer" img="5019.png" />
      </div>
    </div>
  )
}

export default Team
