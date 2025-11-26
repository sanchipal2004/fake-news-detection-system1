import React from 'react'
import Navbar from '../components/Navbar'
import './About.css'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Navbar />

      {/* Container */}
      <div className="aboutcontainer bg-red-950 px-4 sm:px-6 md:px-10 lg:px-40 flex justify-center py-6">
        <div className="layout-content-container flex flex-col max-w-[960px] w-full">

          {/* Heading */}
          <div className="flex flex-wrap justify-between gap-3 p-2 sm:p-4">
            <p className="text-white tracking-tight text-2xl sm:text-[32px] font-bold leading-tight">
              About Me
            </p>
          </div>

          {/* Section: Overview */}
          <h2 className="text-white text-xl sm:text-[22px] font-bold tracking-tight px-2 sm:px-4 pb-2 pt-4">
            🌐 Overview
          </h2>
          <p className="text-white text-sm sm:text-base leading-normal pb-3 pt-1 px-2 sm:px-4">
            In today’s digital era, misinformation spreads faster than ever before. TruthCheck was born out of my deep-seated conviction to provide a reliable source for verifying news. My journey began
            with a growing concern about the insidious impact of fake news on our society. I envisioned a platform that could empower individuals to discern fact from fiction,
            fostering a more informed and responsible digital community. The Fake News Detection System is designed to analyze, evaluate, and classify news content as real or fake using Artificial Intelligence (AI) and Natural Language Processing (NLP) techniques.
          </p>

          {/* Mission */}
          <h2 className="text-white text-xl sm:text-[22px] font-bold tracking-tight px-2 sm:px-4 pb-2 pt-4">
            💡 Our Mission
          </h2>
          <p className="text-white text-sm sm:text-base leading-normal pb-3 pt-1 px-2 sm:px-4">
            Our goal is to create a safe and informed online environment by combating the spread of misinformation by offering a user-friendly and effective tool for news verification. I strive to enhance media literacy and
            critical thinking skills among my users, enabling them to make informed decisions based on accurate information. I am committed to transparency, accuracy, and
            continuous improvement in my detection methods.
          </p>

          {/* How It Works */}
          <h2 className="text-white text-xl sm:text-[22px] font-bold tracking-tight px-2 sm:px-4 pb-2 pt-4">
            🧩 How It Works
          </h2>
          <p className="text-white text-sm sm:text-base leading-normal pb-3 pt-1 px-2 sm:px-4">
            TruthCheck employs a multi-faceted approach to identify fake news. My system combines advanced algorithms with rigorous human oversight to analyze content for
            credibility. I assess various factors, including source reliability, factual consistency, and linguistic patterns indicative of misinformation. My process is designed
            to be both efficient and thorough, ensuring that users receive timely and accurate assessments.
          </p>

          {/* Why Choose Us */}
          <h2 className="text-white text-xl sm:text-[22px] font-bold tracking-tight px-2 sm:px-4 pb-2 pt-4">
            🌱 Why Choose Us
          </h2>
          <p className="text-white text-sm sm:text-base leading-normal pb-3 pt-1 px-2 sm:px-4">
            As I provide numerous features and benefits, some are AI-powered accuracy, fast and interactive analysis, secure and privacy-focused processes, and transparent, interpretable results that help you easily determine whether a news piece is fake or real.
          </p>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
