import React from 'react'
import './hero.css'
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div className="features bg-red-950 text-white py-6 px-4">
      
      <div className="text-center flex flex-col gap-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold font-serif">Key Features</h1>
        <span className="text-xl font-sans">
          Empowering You with the Tools to Discern Truth
        </span>
        <span className="text-base">
          NewsGuard AI offers a suite of features designed to help you identify misinformation and stay informed.
        </span>
      </div>

      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6
          px-4
          mt-10
        "
      >
        <motion.div
          className="bg-white/10 text-white p-5 rounded-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <h1 className="text-xl font-bold mb-2">News Article Analysis</h1>
          <span>
            Instantly analyze news articles or social media text and classify them as Real or Fake with AI-powered accuracy.
          </span>
        </motion.div>

       
        <motion.div
          className="bg-white/10 text-white p-5 rounded-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <h1 className="text-xl font-bold mb-2">Confidence Score</h1>
          <span>
            See how confident the system is in its prediction with clear percentage values.
          </span>
        </motion.div>

       
        <motion.div
          className="bg-white/10 text-white p-5 rounded-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <h1 className="text-xl font-bold mb-2">Analyze News URLs</h1>
          <span>
            Paste full news content or just a link — both work perfectly for analyzing the news.
          </span>
        </motion.div>

        
        <motion.div
          className="bg-white/10 text-white p-5 rounded-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <h1 className="text-xl font-bold mb-2">Analyze News URLs</h1>
          <span>
            Same feature — but can replace with something unique later.
          </span>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
