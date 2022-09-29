import React from "react";
import { HiArrowCircleDown, HiX } from "react-icons/hi";

const Faq = ({ title, children, Id, Index, setIndex }) => {
  const handleSetIndex = (Id) => Index !== Id && setIndex(Id);

  return (
    <>
      <div
        onClick={() => handleSetIndex(Id)}
        className="flex group cursor-pointer w-3/4 mx-auto md:h-16 justify-between  items-center  mt-7 md:mt-14 rounded-md md:rounded-2xl border-2 md:border-4 hover:border-yellow-500 hover:shadow-lg  "
      >
        <div className="flex group cursor-pointer">
          <div className="text-white font-semibold p-1 group-hover:text-yellow-500">
            {title}
          </div>
        </div>
        <div className="flex items-center justify-center pr-10">
          {Index !== Id ? (
            <HiArrowCircleDown className="w-6 h-6 group-hover:text-yellow-500 text-white" />
          ) : (
             <HiX className="w-6 h-6 group-hover:text-yellow-500 text-white" /> 
          )}
        </div>
      </div>

      {Index === Id && (
        <div className="bg-pink-100 pl-10  font-semibold text-pink-500 w-3/4 h-auto  rounded-md p-4 border-l-2 border-blue-300 mb-2 ">
          {children}
        </div>
      )}
    </>
  );
};

export default Faq