import React, { useEffect, useState } from 'react'

const App = () => {

     let [number , setNumber]  =   useState(0)


     let [count,setCount] = useState(100)



     useEffect(()=>{
        console.log("I am first useEffect")
        console.log("I will execute everytime whenever compnent will be rerendered..")
        console.log("----------------------------------------------")
     })


     useEffect(()=>{
       console.log("I am second useeffect ,I will execute only one time")
       console.log('-----------------------------------')
     },[])


     useEffect(()=>{
      console.log("I am third useeffect, i will execute when my state will be changed")
     },[count])
  return (
    <>



    <h1> {number}</h1>

    <button onClick={()=>setNumber(number+1)}> click</button>
    

    <h1> count is : {count}</h1>
    <button onClick={()=>setCount(count-1)}> decrement</button>
    
    </>
  )
}

export default App