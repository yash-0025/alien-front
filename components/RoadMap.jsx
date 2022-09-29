import RoadmapCard from "./roadmapCard"

const Roadmap = () => {
  return (
    <div id="roadmap" className="mt-16 md:space-y-3">
      <h1 className="text-white text-center text-4xl md:text-6xl underline mb-10">
        RoadMap
      </h1>
      <div className="flex justify-start">
        <RoadmapCard content="Creating NFT Collection" />
      </div>
      <div className="flex justify-end">
        <RoadmapCard content="Start Giveaways of NFT" />
      </div>
      <div className="flex justify-start">
        <RoadmapCard content="Giving away funds for charity" />
      </div>
      <div className="flex justify-end">
        <RoadmapCard content="Air Drops for community" />
      </div>
      <div className="flex justify-start">
        <RoadmapCard content="Start Exploring other world's" />
      </div>
      <div className="flex justify-end">
        <RoadmapCard content="Our Next Project" />
      </div>
      <div className="flex justify-start">
        <RoadmapCard content="Stepping up into Gaming World." />
      </div>
    </div>
  )
}

export default Roadmap
