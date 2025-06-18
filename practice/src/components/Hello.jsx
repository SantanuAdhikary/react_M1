import React from 'react'

const Hello = (props) => {
    console.log(props)

    let {age, skills} = props

    let display =(username)=>{
        alert(`hello , i am ${username}`)
    }
  return (
    <>
        <h2> hlllo</h2>
        <h3> name : {props.userName} </h3>
        <h3> age : {age} </h3>

        <button  onClick={()=> display(props.userName)}> click me</button>

        <h4> skills</h4>

        {
            skills.map((ele,index)=>{
                return(
                    <li key={index}> {ele} </li>
                )
            })
        }

        <hr />
    </>
  )
}

export default Hello