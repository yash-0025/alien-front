import React from 'react'

const TeamCard = () => {
    return (

        <div className='team-card w-[230px] mx-auto border-[4px] rounded-xl mt-10 p-1'>
            <div className="img p-1 ">
              <img src="3.png" alt="" className='rounded-full border border-8 border-[#00FFD1]'/>
            </div>
                <div className="details text-center mt-3 space-y-2 mb-2">
                <p >Name</p>
                <p >CEO</p>
                </div>
        </div>

  )
}

export default TeamCard