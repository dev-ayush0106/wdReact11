import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex"}}>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="nav">
        <ul style={{display:"flex"}}>
            {/* <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/service">Services</a></li>
            <li><a href="/contact">Contact</a></li> */}

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
