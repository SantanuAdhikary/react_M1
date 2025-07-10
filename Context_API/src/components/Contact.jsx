import React from 'react'
import { useCustom } from '../context/UserContext'

const Contact = () => {

  let {userName, userAge,userPh}=useCustom()
  return (
    <div>

        <h1> contact component</h1>

        <h2> user name : {userName}</h2>

    </div>
  )
}

export default Contact