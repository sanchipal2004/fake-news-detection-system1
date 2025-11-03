import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import './newsdetect.css'
import axios from 'axios'
import Result from './Result'


const Newsdetect = () => {
const [newstext,setnewstext]= useState('');
const [loading,setloading] = useState(false);
const[score,setscore]= useState(null)

const analyzenews= async()=>{
  setloading(true);
  setscore(null)

try{
  const response = await axios.post("http://localhost:3000/api/analyze",{
    newstext,
  });
  setscore(response.data)
} catch(error){
  setscore({
    label:"error",
    confidence:0,
    explaination: "backend not work"  });
}
finally{
  setloading(false);
}
}
  return (
    <div>
      <Navbar/>
      <div className="detectpage p-20  flex flex-col gap-10 w-full bg-red-800">
      <div className="container flex flex-col w-full  text-center ml-40 text-white gap-5 ">
        <h1 className='text-5xl  font-serif font-bold'>Detect Fake News</h1>
        <p >Paste or type news text below to analyze its authenticity. Our tool uses advanced algorithms to identify potential misinformation.</p>
      </div>
      <div className="anaysis flex flex-col gap-5 items-center">
        <textarea  typeof='text'className=" text  w-1/2  h-40 rounded px-4 pt-4 text-start align-top border border-10 resize-none text-white"  placeholder="Paste or type the news text here..." value={newstext} maxLength={5000} onChange={(e)=>setnewstext(e.target.value)}/>
        <span className='text-white'>Character Count:{newstext.length/5000}</span>
        <button onClick={analyzenews} disabled={loading||!newstext}className='btn w-60 h-16 cursor-pointer rounded-md hover:bg-white hover:text-black bg-red-600 text-white'> {loading ? "Analyzing..." : "Generate Result"}</button>
        </div>
   

  { /*progress */ }     
  {loading&&(
   <div className="result flex flex-col ml-52 gap-5">
        <span className='text-white' >Analyzing... </span>
       <div className="div w-1/2 bg-white rounded-full h-4 overflow-hidden">
       <div className=" progress h-4 rounded-full transition-all duration-300 ease-in-out "
        style={{width:'70%'}}>
       </div>
       </div>
        <span className='text-white'>Please Wait...</span>
        </div>    )}




{/*result*/}
{ score&& <Result score={score}/>}
    </div>
    </div>
  )
}

export default Newsdetect
