import React from 'react'
import { Link } from 'react-router-dom'
import navStyle from './Navbar.module.css'

const Navbar = function({navClass, navLinkClass}) {
  
  return (
    <div className={navStyle.navigation}>
    <nav className={`${navClass}`}>
      <Link to="/" className={`${navLinkClass} text-white hover:text-cyan-500 transition-all duration-300 ease-in-out`}>Home</Link>
      <Link to="/places" className={`${navLinkClass} text-white hover:text-cyan-500 transition-all duration-300 ease-in-out`}>Places</Link>
    </nav>
    </div>
  )
}

export default Navbar
