
import React from 'react'

const App = () => {

  let myName = "santanu"
  let myAge = 12

  let skills = ['html','css','js','react','node','express','mongodb']

  let players = [
      {
        id:1,
        pname:"virat",
        age:18
      },
      {
        id:2,
        pname : "rohit",
        age:16
      },
      {
        id:3,
        pname : "rahul",
        age:15 
      },
      {
        id:4,
        pname:"iyer",
        age:17
      },
      {
        id:5,
        pname:"bumrah",
        age:20

      }

  ]

  return (
    <>

      <h1> this is App component</h1>

      <h2> my name is : {myName}</h2>
      <h2> my age is : {myAge}</h2>

      <h3> my skills are : </h3>
          {
            skills.map((ele,index)=>{
                return(
                  <li key={index}> {ele} </li>
                )
            }) 
          }


      <div className="container">

         
         {

           players.map((ele , index)=>{
              return(
                <div className='card' key={ele.id}>
                   <h2> Player name : {ele.pname}</h2>
                   <h3> Player age : {ele.age}</h3>
                </div>
              )
           })
         }
      </div>
      

    
    </>
  )
}

export default App