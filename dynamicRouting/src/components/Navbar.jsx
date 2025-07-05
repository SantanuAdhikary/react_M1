import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

    <nav>
        <h2>DynamicRouting</h2>
        
        <ul>
            <NavLink to="/">home</NavLink>
            <NavLink to="/users">users</NavLink>
        </ul>
    </nav>
    
    </>
  )
}

export default Navbar