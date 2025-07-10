import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

   <nav>
    <h1> context api</h1>

      <div className='list-item'>
          
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/about"> About</NavLink>
          <NavLink to="/contact"> Contact</NavLink>
      </div>

   </nav>
    </>
  )
}

export default Navbar