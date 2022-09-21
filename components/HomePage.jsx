import React from 'react'
import ConnectSocial from './ConnectSocial'
import Footer from './Footer'
import Team from './Team'

// import MintPage from './MintPage'

const HomePage = () => {
  return (
    <>
      {<Team />}
      {<ConnectSocial />}
      {<Footer />}
      </>
  )
}

export default HomePage