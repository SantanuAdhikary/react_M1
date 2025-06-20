import React, { useEffect, useState } from 'react'

const UsestateExample = () => {


   let [count , setCount]  = useState(0)

   let [num,setNum] = useState(20)


   let [players , setPlayers] = useState(['a','b','c','d','e'])

   let [index , setIndex] = useState(0)


   



   useEffect(()=>{

    console.log("first")

    
   },[count])

 



   let increment =()=>{

        // setCount(count+1)

        // setCount((pre)=>{
        //         console.log(pre)
        //         return pre + 1;
        // })


        setCount(pre => pre+ 10)

      
   }


   let display =()=>{
    
    if(index<players.length-1)
    {

        setIndex(index+1)
    }
    else{
        index = 0
    }
   }
  return (
    <>


    <h2> count is : {count}</h2>


    <button onClick={increment}> click</button>


    <button onClick={()=> setCount(count-1)}> decrement</button>
    <button onClick={()=> setCount(pre=> pre-1)}> decrease</button>



    <h2> {num}</h2>

    <button onClick={()=> setNum(pre=>pre+1)}>increase</button>


      <h1>{players[index]} </h1>

     <button onClick={display}> click </button>
  
    
    
    </>
  )
}

export default UsestateExample