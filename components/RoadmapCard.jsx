

const RoadmapCard = (props) => {
  return (
      <div className=" w-10/12 md:w-1/2 h-[150px] md:h-[200px] border-4 text-white text-center font-bold text-3xl p-2 border-white mt-5  rounded-xl mx-auto md:mx-3">
          <p className="py-7 md:py-16 "> {props.content} </p> 
      </div>
  )
}

export default RoadmapCard