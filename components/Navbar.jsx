import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
    <div>
      <Link href="/">
        <h1>AliensOnEarth</h1>
      </Link>
      <ul>
        <li>
          {" "}
          <Link href="/">Team</Link>
        </li>
        <li>
          {" "}
          <Link href="/">OurStory</Link>
        </li>
        <li>
          {" "}
          <Link href="/">FAQ's</Link>
        </li>
        <li>
          {" "}
          <Link href="/">RoadMap</Link>
        </li>
      </ul>
      <Image src="" alt="twitter-logo" width={100} height={100}></Image>
      <Image src="" alt="instagram logo" width={100} height={100}></Image>
      <button className="bg-[#FFB800] rounded-lg h-[35px] w-[85px]">
        Mint Now
      </button>
    </div>
  </div>
  )
}

export default Navbar