import { useEffect, useState } from "react"
import Card from "./components/Card"
import Profile from "./components/Profile"


export let Hi =()=>{
  return(
    <h1> I am hi component</h1>
  )
}

let App =()=>{

       let [state , setState]      = useState(30)

       let increase =()=>{

          setState(state+1)
       }

   let subjectName = "react"

   let isDisplay = true

   let a = 10 , b= 20 


   let courses = ["java","python","mern","machine learning"]

   useEffect(()=>{
    console.log('hi')
   },[state])
   

  return(
    <div>
        <h1 className=""> app component</h1>

        <img src="slj" alt="image for nature" />

        <br />

         <hr />

         <label htmlFor=""></label>
        <div>
            <h2> subject name is : {subjectName.toUpperCase()}  </h2>

            <h3> the addition of {a}  and {b}  is {a+b}</h3>

            
        </div>

        <main>
           
          <Card cardNo={1} productName={"mobile"}/>
          <Card cardNo={2} productName={"laptop"}/>
         

        </main>

     <ol>

        {
          courses.map((ele,index)=>{
            return(
              <li key={index}>{ele} </li>
            )
          })
        }

        {
          isDisplay ? <Profile/> : <h1> not displaying</h1>
        }

        <button> {isDisplay? "hide" :"show"} </button>

        <h2> state value is : {state}</h2>

        <button onClick={increase}> click</button>
     </ol>
    </div>

  
  )
}

export default App

