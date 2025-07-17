import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>

        <h2> MemoExample</h2>

        <ul>
            <NavLink to="/"> react memo</NavLink>
            <NavLink to='/usememo'> use memo</NavLink>
        </ul>
    </nav>
  )
}

export default Navbar