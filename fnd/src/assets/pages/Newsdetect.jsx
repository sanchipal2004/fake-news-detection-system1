import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import './newsdetect.css'
import axios from 'axios'
import Result from './Result'

const Newsdetect = () => {
  const [newstext, setnewstext] = useState('');
  const [loading, setloading] = useState(false);
  const [score, setscore] = useState(null);

  const analyzenews = async () => {
    setloading(true);
    setscore(null);

    try {
      const response = await axios.post("http://localhost:3000/api/analyze", {
        newstext,
      });
      setscore(response.data);
    } catch (error) {
      setscore({
        label: "error",
        confidence: 0,
        explaination: "backend not work",
      });
    }
    finally {
      setloading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="detectpage bg-red-800 text-white px-5 py-10 md:py-16 flex flex-col items-center">

        {/* Heading */}
        <div className="container max-w-3xl text-center flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold">
            Detect Fake News
          </h1>
          <p className="text-sm md:text-base">
            Paste or type news text below to analyze its authenticity. Our tool uses advanced algorithms to identify potential misinformation.
          </p>
        </div>

        {/* Input Section */}
        <div className="analysis flex flex-col gap-4 items-center w-full mt-8">

          <textarea
            className="w-full md:w-2/3 lg:w-1/2 h-40 rounded px-4 pt-4 border border-white resize-none bg-red-900 text-white text-sm"
            placeholder="Paste or type the news text here..."
            value={newstext}
            maxLength={5000}
            onChange={(e) => setnewstext(e.target.value)}
          />

          <span className="text-white text-sm">
            Character Count: {newstext.length}/5000
          </span>

          <button
            onClick={analyzenews}
            disabled={loading || !newstext}
            className="btn w-48 md:w-60 h-14 cursor-pointer rounded-md hover:bg-white hover:text-black bg-red-600 text-white"
          >
            {loading ? "Analyzing..." : "Generate Result"}
          </button>

        </div>

        {/* Loading State */}
        {loading && (
          <div className="result flex flex-col items-center gap-4 mt-6 w-full">

            <span className="text-white text-sm">Analyzing...</span>

            <div className="w-full md:w-2/3 lg:w-1/2 bg-white rounded-full h-4 overflow-hidden">
              <div
                className="progress h-4 rounded-full transition-all duration-300 ease-in-out bg-red-600"
                style={{ width: '70%' }}
              ></div>
            </div>

            <span className="text-white text-sm">Please Wait...</span>

          </div>
        )}

        {/* Result Component */}
        {score && <Result score={score} />}
      </div>
    </div>
  );
};

export default Newsdetect;

