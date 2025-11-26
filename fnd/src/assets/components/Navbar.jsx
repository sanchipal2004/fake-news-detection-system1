import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="nav flex items-center justify-between px-4 py-4 md:px-10 bg-red-950">

        {/* Logo */}
        <span className="text-white text-xl md:text-2xl font-medium">
          NewsGuard AI
        </span>

        {/* Menu */}
        <ul className="flex gap-5 md:gap-9 text-white text-base md:text-lg font-medium cursor-pointer">
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/about')}>About</li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar
