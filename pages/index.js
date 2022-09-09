import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
 
        <title>Aliens On Earth</title>
      </Head>
      <Navbar />
      <div className="m-10 rounded-sm aspect-w-16 aspect-h-9">
        <iframe src="https://www.youtube.com/embed/Qbex3SmZbUg" width="640" height="315" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div>
        <div className='flex flex-col items-center'>
          Our Story
        </div>
        <div>
          <h1>
            The Aliens On Earth is a collection based on Aliens with different avatars with different backgrounds with different roles with different attributes.
          </h1>
          <div className='flex'>
            <div>
              10,000 NFT'S
            </div>
            <div>
              9,700 NFT'S for mint
            </div>
            <div>
              2000 Whitelisted users
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <Footer />
    </div>
  )
}
