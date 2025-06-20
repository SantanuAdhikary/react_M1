import React from 'react'

const Navbar = (props) => {

    let {logoName} = props
  return (
    <>
        
        <nav>
            <h2> {logoName} </h2>

            <ul>
                <li>Home</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar