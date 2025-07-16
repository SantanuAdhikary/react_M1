import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <h2> EcommerceApp</h2>

         <div className="list">
             <Link to="/products">Products</Link>
             <Link to="/cart">Cart</Link>
         </div>
    </nav>
  )
}

export default Navbar