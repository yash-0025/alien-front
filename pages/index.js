import Head from "next/head"
import HomePage from "../components/HomePage"

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>Aliens On Earth</title>
      </Head>
      {/*  <Navbar /> */}
      {<HomePage />}
      {/*  */}
      {/*  */}
    </div>
  )
}
