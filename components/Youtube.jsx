import React from "react"

const Youtube = () => {
  return (
    <div className="p-2 mb-3">
      <div className="rounded-md md:mt-20  border-2    ">
        <iframe
          className="w-full h-[430px] md:h-[550px]"
          src="https://www.youtube.com/embed/gnulCeCkxoM"
   
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </div>
  )
}

export default Youtube
