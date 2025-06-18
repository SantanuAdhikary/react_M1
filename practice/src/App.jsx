import React from 'react'
import Hello from './components/Hello'


const App = () => {

  let display =()=>{
    alert("I am app component")
  }
  return (
    <>

          <h1> I am app component</h1>

          <button onClick={display}> click me</button>
          
          <Hello userName={"santanu"}  age={10} skills={["html","css","js"]}/>
          <Hello userName={"virat"} age={10} skills={["java","react","node"]}/>
          <Hello userName={"rohit"} age={10} skills={["python","django","mechine learing"]}/>

    </>
  )
}

export default App