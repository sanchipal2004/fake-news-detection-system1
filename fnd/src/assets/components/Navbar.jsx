import React from 'react'
import './navbar.css'

import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate()
  const handlehome=()=>{
    navigate('/')
  }
  const handlelogin=()=>{
    navigate('/login')
  }
  return (
    <div>
      <div className="nav flex justify-between p-5    bg-red-950">
        <span className=' text-white text-2xl translate-x-48 font-medium  '>News24</span>
        <ul className='flex text-white gap-9  -translate-x-48  text-2xl font-medium cursor-pointer'>
            <li className='' onClick={handlehome} >Home</li>
            <li >About</li>
            
            
        </ul>
        
       
      </div>
    </div>
  )
}

export default Navbar
