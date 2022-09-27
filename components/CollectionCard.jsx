import React from 'react'

const CollectionCard = (props) => {
  return (
      <div className='w-60 h-4/6 border-2 rounded-md m-1 '>
      <img src={props.img } alt="" className=' rounded-md '  />
      </div>
  )
}

export default CollectionCard