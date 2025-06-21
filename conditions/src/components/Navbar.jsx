import React from 'react'

const Navbar = (props) => {

    let {isLogin, setIsLogin} = props
     
  return (
    <>
    
     <nav>
        <h1> conditionalRendering</h1>

        <ul>
          <li> home</li>
          <li> about</li>
          <li> contact</li>
        </ul>

     <button onClick={()=> setIsLogin(pre=> !pre)}> 

         {
           isLogin ? "go to signup" : "go to login"
         }
     </button>

    </nav>
    
    </>
  )
}

export default Navbar