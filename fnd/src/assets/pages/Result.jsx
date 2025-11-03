import React from 'react'

const Result = ({score}) => {

  if(!score){
    return(
      <div className="mt-6 text-center text-gray-400 text-lg ">
        No analysis yet. Please enter text and generate result.
      </div>
    );
  }

  
    const getcolor=()=>{
        if(score.confidence>75) return "bg-green-500";
        if(score.confidence>50) return "bg-yellow-400";
        if(score.confidence>25) return "bg-orange-400";
        return "bg-red-500";
    }
  return (
    <div>
      <div className="resultcard translate-x-1/2 p-6 bg-red-200 shadow-lg rounded-lg  w-1/2">
 <h2 className="text-xl font-bold text-slate-900">Analysis Result</h2>
      <p className="mt-2">
        <strong>Status: </strong>{""}
        <span className={score.label === "Fake"? "text-red-600":"text-green-600"}>
        {score.label}</span>
      </p>
      <p className='mt-2'><strong>Confidence: </strong>{score.confidence || 0}%</p>
      <div className="div w-1/2 bg-white rounded-full h-4 overflow-hidden">
       <div className={` progress h-4 rounded-full transition-all duration-300 ease-in-out ${getcolor()}`}
        style={{width: `${score?.confidence||0}`}}>
       </div>
       </div>
       
      </div>
    </div>
  )
}

export default Result
