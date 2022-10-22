
import React from 'react'
import Image from 'next/image'


const CollectionCard = (props) => {
  return (
    <div className='w-auto h-auto border-2 rounded-md m-1 '>
      <Image
        src={props.img}
        alt="Some images from collection"
        className='rounded-md '
        height={300}
        width={300}
        priority
      ></Image>
      </div>
  )
}

export default CollectionCard