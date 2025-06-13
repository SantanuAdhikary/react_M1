import React from 'react'
import Navbar from './Navbar'
import Card from './Card'

const Home = () => {
  return (
    <>
    
       <Navbar/>

       <div className="homeContainer">
         <h1>This is Home page</h1>
         <p> here we are learing about Component</p>
         <button>Get started</button>
       </div>

       <div className="homeCards">

           <Card/>
           <Card/>
           <Card/>
       </div>
    
    </>
  )
}

export default Home