import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate =useNavigate()
  const handleclick=()=>{
    navigate("/newsdetect")
  }
  return (
    <div>
      <div
        className="relative w-full overflow-hidden h-[300px] md:h-[553px]"
      >
        <img className="w-full h-full object-fill" src="copy2.png" alt="" />

        <div className="absolute top-24 text-center left-1/2 transform -translate-x-1/2 flex flex-col gap-5 text-white z-10">
          <h1 className="font-serif font-bold text-5xl">The Truth Matters</h1>
          <span className="text-xl font-thin">
            Check It Before You Believe It, Just One Click, Real or Fake? Let AI Decide.
          </span>
        </div>

        <div className="flex justify-between z-10">
          <button className="top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute font-serif text-lg w-52 p-3 rounded-md text-white bg-red-600 " onClick={handleclick}>
            Detect Fake News Now
          </button>
          <input
            className="absolute top-64 right-1/4 w-52 text-white bg-transparent p-3 transform -translate-x-1/2 -translate-y-1/2"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
