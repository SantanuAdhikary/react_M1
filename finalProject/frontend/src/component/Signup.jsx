import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

    let [userName, setUserName] = useState("")
    let [userPass, setUserPass] = useState("")
    let [email , setEmail] = useState("")

     let navigate =   useNavigate()


    let handleSubmit = async (e)=>{
            e.preventDefault()

            let payload = {
                userName : userName,
                userPass : userPass,
                userEmail : email
            }

        await axios.post("http://localhost:3000/users",payload)

            alert("signup done")

            setEmail("")
            setUserName("")
            setUserPass("")

            navigate("/login")


    }
  return (
    <div className='signup'>

        <h1> Signup page</h1>

       <div className="inner">
             <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='enter your name' value={userName} onChange={(e)=> setUserName(e.target.value)}/>
                <label htmlFor="">email</label>
                <input type="text" placeholder='enter your email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <label htmlFor="">Password</label>
                <input type="text" placeholder='enter your password' value={userPass} onChange={(e)=> setUserPass(e.target.value)}/>
                <button>Register</button>
             </form>
             <footer>
                 <p>Already have an Account ?</p>
             <Link to="/login">Login</Link>
             </footer>
       </div>

    </div>
  )
}

export default Signup