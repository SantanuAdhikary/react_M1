import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>

      
             <NavLink to="/"> home</NavLink>
             <NavLink to="/about"> about</NavLink>
             <NavLink to="/contact"> contact</NavLink>
             <NavLink to="/login"> login</NavLink>
        
    </nav>
  )
}

export default Navbar