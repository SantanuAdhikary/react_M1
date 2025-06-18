
import React from 'react'

const App = () => {


  let display =(e)=>{
    console.log(e )
    alert("this is event example....")
  }


  let wish=(userName)=>{
      alert(`good evening , ${userName}`)
  }

  return (
    <>

       <h1> I am App component</h1>

       <button onClick={display}> click </button>


       <button onClick={()=>display()}> click me </button>

       <button onClick={()=>wish("virat")}> wish button</button>

    </>
  )
}

export default App