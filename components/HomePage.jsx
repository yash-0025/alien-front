import Collection from "./Collection"
import ConnectSocial from "./ConnectSocial"
import Accordion from "./faqData"
// import Faq from "./Faq"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Roadmap from "./RoadMap"
import Story from "./Story"
import Team from "./Team"
import Youtube from "./Youtube"

// import MintPage from './MintPage'

const HomePage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Youtube />
      <Story />
      <Roadmap />
      <Accordion />
      <Collection />
      <Team />
      <ConnectSocial />
      <Footer />
    </div>
  )
}

export default HomePage
