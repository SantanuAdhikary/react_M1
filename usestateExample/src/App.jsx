import React, { useState } from 'react'

const App = () => {


      let [number , setNumber]     = useState(20)

      let [myName , setMyName] = useState("virat")


      let increment =()=>{
        setNumber(number+1)
      }


      let decrement =()=>{
        setNumber(number-1)
      }

      let changeName =()=>{
        setMyName("kohli")
      }
  let myNum = 20 

  let increase =()=>{
    myNum = myNum + 1 ;
    console.log(myNum)
  }

  let increment3 =()=>{

    setNumber(pre => pre+1)
  }
  return (
    <>


      <h1> {myNum}</h1>

      <button onClick={increase}> click</button>

      <h1> my number is : {number}</h1>

      <h2> increment and decrement by using function creation</h2>

      <button onClick={increment}> increment</button>
      <button onClick={decrement}> decrement</button>

      <h2> increment and decrement directly by calling setNumber() function</h2>

      <button onClick={()=>setNumber(number+1)}> increment2</button>
      <button onClick={()=>setNumber(number-1)}> decrement2</button>


      <h2> by using callback function in setNumber() </h2>
      <button onClick={increment3}> increment3</button>
      <button onClick={()=> setNumber(pre=> pre-1)}> decrement3</button>


      <h1> my name is : {myName}</h1>
      <button onClick={changeName}> change name</button>
    
    
    
    </>
  )
}

export default App