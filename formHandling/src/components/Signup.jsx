import React, { useState } from 'react'

import {NavLink} from 'react-router-dom'

import './Signup.css'

const Signup = () => {

       let [name, setName] =  useState("")

       let [email,setEmail] = useState("")

       let [pass, setPass] = useState("")




       let handleName =(e)=>{
         setName(e.target.value)
       }

       let handleEmail =(e)=>{
        setEmail(e.target.value)
       }

       let handlePass=(e)=>{
         
        setPass(e.target.value)
       }

       let handleSubmit =(e)=>{

        e.preventDefault()

        console.log({name,email,pass})

        setName("")
        setEmail("")
        setPass("")
       }

  return (
    <div className='signup'>

        <div className="left">

            <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?semt=ais_hybrid&w=740" alt="" />

        </div>

        <div className="right">

            <h1> Signup Page</h1>

            <div className="inner">
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='enter your name' value={name} onChange={handleName}/>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='enter your email' value={email}  onChange={handleEmail}/>
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder='enter your password' value={pass} onChange={handlePass}/>

                    <button>register</button>
                </form>

                <footer>

                <p>Already have an accout ?</p>

                <NavLink to="/login"> Login</NavLink>
                </footer>
            </div>

        </div>

    </div>
  )
}

export default Signup