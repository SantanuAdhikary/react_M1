import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>

        <h2> RoutingLogo</h2>

        <ul>
           <NavLink to="/"> Home</NavLink>
           <NavLink to="/about"> about</NavLink>
           <NavLink to="/contact"> contact</NavLink>
        </ul>
    </nav>
  )
}

export default Navbar