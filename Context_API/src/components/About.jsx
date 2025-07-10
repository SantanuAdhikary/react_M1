import React, { useContext } from 'react'
import { userContext } from '../context/UserContext'

const About = () => {

   let {userName, userAge , count, decrement}   =  useContext(userContext)
  return (
    <div>
        <h2> about component</h2>

        <h2> user name is : {userName}</h2>
        <h3> user age is : {userAge}</h3>

        <h2> count is : {count}</h2>

        <button onClick={decrement}>click</button>

    </div>
  )
}

export default About