import React from 'react'

const TeamCard = (props) => {
    return (

        <div className='team-card w-[230px] mx-auto border-[4px] rounded-xl mt-10 p-1'>
            <div className="img p-1 ">
              <img src={props.img} alt="" className='rounded-full border border-8 border-[#00FFD1] '/>
            </div>
                <div className="details text-center mt-3 space-y-2 mb-2">
          <p >{ props.name}</p>
          <p >{ props.post}</p>
                </div>
        </div>

  )
}

export default TeamCard