import React from 'react'
import { useCustom } from '../context/Usercontext'

const Bye = () => {

 let {stuName, increase}  =  useCustom()
  return (
    <div>

<h1> bye component</h1>

        <h2> {stuName}</h2>

        <button onClick={increase}> increase from bye</button>
    </div>
  )
}

export default Bye