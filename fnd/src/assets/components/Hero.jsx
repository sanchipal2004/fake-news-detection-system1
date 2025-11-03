import React from 'react'
import './hero.css'
import { motion } from "motion/react"
const Hero = () => {
  return (
    <div>
      <div className="features">
        <div className= " feature bg-red-950 text-white flex flex-col gap-5 text-center py-3">
            <h1 className='text-3xl  text-bold font-serif '> Key Features</h1>
            <span className=' text-4xl font-sans text-bold'>Empowering You with the Tools to Discern Truth</span>
            <span className='text-lg font-xs'>TruthGuard offers a suite of features designed to help you identify misinformation and stay informed.</span>
       
        <div className="card flex justify-center gap-10">
           <motion.div className="card1 w-72  rounded-md p-5  border border-10 " initial={{x:-100 ,opacity:0 ,scale:0.8}}
           animate={{x:0, opacity:1, scale:1}} transition={{duration: 1.5 ,delay:0.5 , ease:"easeOut"}}  whileHover={{ scale: 1.05, rotate: 2 }}
  whileTap={{ scale: 0.97 }}>
              
             <h1 className='text-2xl font-bold'>News Article Analysis</h1>
             <span>Instantly analyze news articles or social media text and classify them as Real or Fake with AI-powered accuracy.</span>
 
</motion.div>
<motion.div className="card2 w-72  rounded-md p-5  border border-10 " initial={{x:-100 ,opacity:0 ,scale:0.8}}
           animate={{x:0, opacity:1, scale:1}} transition={{duration: 1.5 ,delay:0.5 , ease:"easeOut"}}  whileHover={{ scale: 1.05, rotate: 2 }}
  whileTap={{ scale: 0.97 }}>
               
             <h1 className=' text-2xl font-bold'>Confidence Score</h1>
             <span>See how confident the system is in its prediction, with clear percentage values.(e.g., 91% Fake).</span>

</motion.div>
<motion.div className="card3 w-72  rounded-lg  border border-10 p-5 "initial={{x:-100 ,opacity:0 ,scale:0.8}}
           animate={{x:0, opacity:1, scale:1}} transition={{duration: 1.5 ,delay:0.5 , ease:"easeOut"}}  whileHover={{ scale: 1.05, rotate: 2 }}
  whileTap={{ scale: 0.97 }}>
               
             <h1 className='text-2xl font-bold '>Analyze News URLs</h1>
             <span> Paste full news content or just a link both work perfectly for analyze the news or the text.</span>

</motion.div>
<motion.div className="card3 w-72  rounded-lg  border border-10 p-5 "initial={{x:-100 ,opacity:0 ,scale:0.8}}
           animate={{x:0, opacity:1, scale:1}} transition={{duration: 1.5 ,delay:0.5 , ease:"easeOut"}}  whileHover={{ scale: 1.05, rotate: 2 }}
  whileTap={{ scale: 0.97 }}>
               
             <h1 className='text-2xl font-bold '>Analyze News URLs</h1>
             <span> Paste full news content or just a link both work perfectly for analyze the news or the text.</span>

</motion.div>



            </div>
            <h1 className='headline font-sans text-3xl font-bold text-white text-left ml-44  '> Headlines </h1>
        </div>
       
      </div>
    </div>
  )
}

export default Hero