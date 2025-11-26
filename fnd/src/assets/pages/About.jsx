import React from 'react'
import Navbar from '../components/Navbar'
import './About.css'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="aboutcontainer bg-red-950 px-6 md:px-20 lg:px-40 flex justify-center py-7">
        <div className="layout-content-container flex flex-col max-w-[960px] w-full">

          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-white tracking-tight text-[32px] font-bold leading-tight min-w-72">
              About Me
            </p>
          </div>

          <h2 className="text-white text-[22px] font-bold tracking-tight px-4 pb-3 pt-5">
            🌐 Overview
          </h2>
          <p className="text-white text-base leading-normal pb-3 pt-1 px-4">
            In today’s digital era, misinformation spreads faster than ever before...
          </p>

          <h2 className="text-white text-[22px] font-bold tracking-tight px-4 pb-3 pt-5">
            💡 Our Mission
          </h2>
          <p className="text-white text-base leading-normal pb-3 pt-1 px-4">
            Our goal is to create a safe and informed online environment...
          </p>

          <h2 className="text-white text-[22px] font-bold tracking-tight px-4 pb-3 pt-5">
            🧩 How It Works
          </h2>
          <p className="text-white text-base leading-normal pb-3 pt-1 px-4">
            TruthCheck employs a multi-faceted approach to identify fake news...
          </p>

          <h2 className="text-white text-[22px] font-bold tracking-tight px-4 pb-3 pt-5">
            🌱 Why Choose Us
          </h2>
          <p className="text-white text-base leading-normal pb-3 pt-1 px-4">
            We provide numerous features and benefits such as AI-powered accuracy...
          </p>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
