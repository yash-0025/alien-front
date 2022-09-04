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
        <iframe src="https://www.youtube.com/watch?v=Qbex3SmZbUg" width="640" height="315" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}

      <Footer />
    </div>
  )
}
