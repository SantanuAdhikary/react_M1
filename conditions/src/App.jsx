
import React, { useState } from 'react'
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';


const App = () => {

  // let isLogin = true;

  let [isLogin , setIsLogin] = useState(true)
        
  return (
    <>

    
     <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
    
    {
      isLogin? <Login/> : <Signup/>
    }


    {/* {
      isLogin && <Login/>
    } */}

   
         
    </>
  )


  
}

export default App