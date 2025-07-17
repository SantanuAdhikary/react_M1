import React, { useState } from 'react'
import Count from './Count'
import Navbar from './Navbar'

const Home = () => {

   let [num,setNum] = useState(0)
  return (

    <>
     
    <div className='outer'>


        <div className="inner">
          <h1> {num}</h1>
         <button onClick={()=> setNum(num+1)}> increase</button>
         <button onClick={()=> setNum(num-1)}> decrease</button>

        </div>

        <Count/>
    </div>
    </>
  )
}

export default Home