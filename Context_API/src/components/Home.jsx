import React, { useContext, useState } from 'react'
import { userContext } from '../context/UserContext'

const Home = () => {

   let {userName , count, increment} =      useContext(   userContext)

      

   
  return (
    <>

    <h1> home component</h1>

    <h2> user name is : {userName}</h2>

    <h3> count is : {count}</h3>

    <button onClick={increment}> click</button>
    </>
  )
}

export default Home