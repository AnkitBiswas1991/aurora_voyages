import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = function() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/places">Places</Link>
    </nav>
  )
}

export default Navbar
