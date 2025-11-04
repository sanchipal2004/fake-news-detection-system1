import React from 'react'
import Navbar from '../components/Navbar'
import './About.css'
import Footer from '../components/Footer'
const About = () => {
  return (
    <div>
        <Navbar/>
      
       <div className= " aboutcontainer bg-red-950 px-40 flex flex-1 justify-center py-7">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4"><p class="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">About Me</p></div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">🌐 Overview</h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              In today’s digital era, misinformation spreads faster than ever before. TruthCheck was born out of my deep-seated conviction to provide a reliable source for verifying news. My journey began
              with a growing concern about the insidious impact of fake news on our society. I envisioned a platform that could empower individuals to discern fact from fiction,
              fostering a more informed and responsible digital community.The Fake News Detection System is designed to analyze, evaluate, and classify news content as real or fake using Artificial Intelligence (AI) and Natural Language Processing (NLP) techniques.
            </p>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">💡 Our Mission</h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
             Our goal is to create a safe and informed online environment by combat the spread of misinformation by offering a user-friendly and effective tool for news verification. I strive to enhance media literacy and
              critical thinking skills among my users, enabling them to make informed decisions based on accurate information. I am committed to transparency, accuracy, and
              continuous improvement in my detection methods.
            </p>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">🧩 How It Works</h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              TruthCheck employs a multi-faceted approach to identify fake news. My system combines advanced algorithms with rigorous human oversight to analyze content for
              credibility. I assess various factors, including source reliability, factual consistency, and linguistic patterns indicative of misinformation. My process is designed
              to be both efficient and thorough, ensuring that users receive timely and accurate assessments.
            </p>

            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">🌱 Why Choose Us</h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">As I provide an numerous featues and benifit some are 
             AI-powered accuracy ,Fast and interactive analysis,Secure and privacy-focused,Transparent and interpretable result which made you to find easily which news is fake or real.
            </p>
          </div>
          
        </div>
        <Footer/>
      
    </div>
  )
}

export default About


