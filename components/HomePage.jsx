import React from "react"
import Collection from "./Collection"
import ConnectSocial from "./ConnectSocial"
import Footer from "./Footer"
import Story from "./Story"
import Team from "./Team"
import Youtube from "./Youtube"

// import MintPage from './MintPage'

const HomePage = () => {
  return (
    <>
      {<Youtube />}
      {<Story />}
      {<Collection />}
      {<Team />}
      {<ConnectSocial />}
      {<Footer />}
    </>
  )
}

export default HomePage
