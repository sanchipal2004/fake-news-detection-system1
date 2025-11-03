import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './assets/pages/Home'
import Newsdetect from './assets/pages/Newsdetect'
import Login from './assets/pages/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
   
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/newsdetect' element={<Newsdetect/>}/>
  <Route path='/login' element={<Login/>}/> 
</Routes>
</BrowserRouter>


  
      </div>
    </>
  )
}

export default App
