import React, { useRef } from 'react'

const Task = () => {

    let vdoref = useRef()
    
    let play =()=>{
        vdoref.current.play()
    }
    let pause =()=>{
        vdoref.current.pause()

    }
  return (
    <>

       <div className="inner">
        <video src="https://www.w3schools.com/html/mov_bbb.mp4" ref={vdoref}></video>

         <div className="buttons">

        <button onClick={play}>play</button>
        <button onClick={pause}>pause</button>
         </div>

       </div>

    </>
  )
}

export default Task


