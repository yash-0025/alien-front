import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
  TimelineSeparator
} from '@mui/lab'

const RoadmapCard = () => {
  return (
    <Timeline position="alternate">
      
      <TimelineItem >
        <TimelineSeparator>
          <TimelineDot color='success' />
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent
          className="  md:h-[150px]  border-4 text-white text-center font-bold md:text-3xl border-white mt-5  rounded-xl  ">
          <p className="md:text-xl text-green-500 underline">Phase 1</p>
          <p className="p-5">Creating NFT Collection</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem >
        <TimelineSeparator>
          <TimelineDot   />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="  md:h-[150px]  border-4 text-white text-center font-bold md:text-3xl  border-white mt-5  rounded-xl  ">
          <p className="md:text-xl text-yellow-500 underline text-center">Phase 2</p>
          <p className="p-5 text-center">Start Giveaways of NFT</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem >
        <TimelineSeparator>
          <TimelineDot  />
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent
          className="  md:h-[150px]  border-4 text-white text-center font-bold md:text-3xl border-white mt-5  rounded-xl  ">
          <p className="md:text-xl text-red-600 underline">Phase 3</p>
          <p className="p-5">Giving away funds for charity</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem >
        <TimelineSeparator>
          <TimelineDot  />
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent
          className="  md:h-[150px]  border-4 text-white text-center font-bold md:text-3xl border-white mt-5  rounded-xl  ">
          <p className="md:text-xl text-blue-500 underline text-center">Phase 4</p>
          <p className="p-5 text-center">Air Drops for community</p>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem >
        <TimelineSeparator>
          <TimelineDot   />
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent
          className="  md:h-[150px]  border-4 text-white text-center font-bold md:text-3xl border-white mt-5  rounded-xl  ">
          <p className="md:text-xl text-orange-500 underline">Phase 5</p>
          <p className="p-5">Start Exploring other world's</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem >
        <TimelineSeparator>
          <TimelineDot   />
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent
          className="  md:h-[150px]  border-4 text-white text-center font-bold md:text-3xl border-white mt-5  rounded-xl  ">
          <p className="md:text-xl text-lime-500 underline text-center">Phase 6</p>
          <p className="p-5 text-center">Our Next Project</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem >
        <TimelineSeparator>
          <TimelineDot   />
          <TimelineConnector/>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent
          className="  md:h-[150px]  border-4 text-white text-center font-bold md:text-3xl border-white mt-5  rounded-xl  ">
          <p className="md:text-xl text-rose-500 underline">Phase 7</p>
          <p className="p-5">Stepping up into Gaming World.</p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default RoadmapCard