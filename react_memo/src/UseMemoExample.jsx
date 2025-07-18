import React, { useMemo, useState } from 'react'
import Navbar from './Navbar'

const UseMemoExample = () => {

   let [count ,setCount] = useState(0)
   let [num , setNum] = useState(0)


   let double = (a)=>{

    console.log("clicked")
    for(let i=0;i<1000000000;i++){}
           return a * 2
   }


//  let  res = double(num)

   let res =  useMemo(()=>{
          return  double(num)
   },[num]) 
  return (

    <>
  
    <div className='memoContainer'>

      <div className="inner">

        <h2> usememo example</h2>

        <h2> count is : {count}</h2>
         <button onClick={()=> setCount(pre=>pre+1)}> increase </button>

         <input type="text" placeholder='enter one number' value={num} onChange={(e)=> setNum(e.target.value)} />

         <h2> {res} </h2>
      </div>
        

    </div>
    </>
  )
}

export default UseMemoExample