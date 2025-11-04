import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './assets/pages/Home'
import Newsdetect from './assets/pages/Newsdetect'
import About from './assets/pages/About'
import Termsofpriv from './assets/pages/Termsofpriv'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
   
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/newsdetect' element={<Newsdetect/>}/>
 <Route path='/about' element={<About/>}/>
 <Route path='/termofservice' element={<Termsofpriv/>}/>
</Routes>
</BrowserRouter>


  
      </div>
    </>
  )
}

export default App
