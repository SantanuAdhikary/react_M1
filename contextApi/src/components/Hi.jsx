import React from 'react'
import { useCustom } from '../context/Usercontext'

const Hi = () => {

  let {stuName , increase}   = useCustom()
  return (
    <div>

        <h1> student name : {stuName}</h1>


        <button onClick={increase}> increment from hi</button>

    </div>
  )
}

export default Hi