import React, { useState } from 'react'
import { useCustom } from '../context/Usercontext'

const Hello = () => {


    

   let {stuAge, increase, number} = useCustom()
  return (
    <div>

            <h1> age is : {stuAge}</h1>

            <h2> {number}</h2>

            <button onClick={increase} > increment from hello</button>
    </div>
  )
}

export default Hello