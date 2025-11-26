import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const handleclick = () => navigate("/newsdetect")

  return (
    <div className="relative w-full overflow-hidden h-[350px] md:h-[550px]">

      <img
        className="w-full h-full object-cover"
        src="copy2.png"
        alt="header"
      />

     
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center gap-4">

        <h1 className="font-serif font-bold text-3xl md:text-5xl">
          The Truth Matters
        </h1>

        <p className="text-sm md:text-lg font-light max-w-[600px]">
          Check It Before You Believe It — Just One Click. Real or Fake? Let AI Decide.
        </p>

       
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4">

          <button
            onClick={handleclick}
            className="font-serif text-lg w-56 p-3 rounded-md text-white bg-red-600 hover:bg-red-700"
          >
            Detect Fake News Now
          </button>

         
        </div>
      </div>

    </div>
  )
}

export default Header
