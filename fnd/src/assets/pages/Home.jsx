import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Imageslider from '../components/Imageslider'
const Home = () => {
  return (
    <div>
       <Navbar/>
    <Header/>
 
    <Hero/>

    <Imageslider/>
    <Footer/>
    </div>
  )
}

export default Home
