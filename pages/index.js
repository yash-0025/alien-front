import Head from "next/head"
import HomePage from "../components/HomePage"

export default function Home() {
  return (
    <div>
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
