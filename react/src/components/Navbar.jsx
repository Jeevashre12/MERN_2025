import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/home" className="Link">Home</Link>
      <Link to="/about" className="Link">About</Link>
      <Link to="/contact" className="Link">Contact</Link>
      <Link to="/skills" className="Link">Skills</Link>
         <Link to="/Hooks" className="Link">Hooks</Link>
        <Link to="/State" className="Link">State</Link>
        <Link to="/Login" className="Link">Login</Link>
    </div>
  )
}

export default Navbar