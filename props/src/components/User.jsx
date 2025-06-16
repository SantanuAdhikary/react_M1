
import React from 'react'

const User = (props) => {
    console.log(props)

    let {userName, age , phNo}  = props
  return (
    <>

      <h1> user name : {userName} </h1>
      <h2> user age : {age} </h2>
      <h3> user ph : {phNo} </h3>
    
    </>
  )
}

export default User