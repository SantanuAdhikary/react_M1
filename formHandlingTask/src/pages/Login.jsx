import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Login.css'

import { NavLink } from 'react-router-dom'

const Login = () => {

    let [loginPass, setLoginPass] = useState("")
    let [loginEmail, setLoginEmail] = useState("")

    let navigate = useNavigate()


    let handleSubmit =(e)=>{
            e.preventDefault()

            console.log({loginEmail,loginPass})

            let user = JSON.parse( localStorage.getItem("loginUser"))

            console.log(user)

            if(loginEmail == user.email && loginPass==user.pass)
            {
                alert("login done successfully")
                navigate("/dashboard")

            }

            else{
                alert("wrong credentials ")
            }
    }
  return (
    <div className='login'>

             <div className="loginLeft">

                <div className="inner">
                        <form action="" onSubmit={handleSubmit}>
                        
                            <label htmlFor="">email</label>
                            <input type="text" placeholder='enter email' value={loginEmail} onChange={(e)=>setLoginEmail(e.target.value)}/>
                            <label htmlFor="">password</label>
                            <input type="text" placeholder='enter password' value={loginPass} onChange={(e)=>setLoginPass(e.target.value)}/>
                            <button>Login</button>

                            <div className="footer">
                                <p>don't have an accout ?</p>

                                <NavLink to="/">
                                    Signup
                                </NavLink>
                            </div>
                        </form>


                    </div>
             </div>

             <div className="loginRight">

                   <div className="rightInner">
                    <h1> Login To myApp</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, optio.</p>

                   </div>

                    
             </div>
    </div>
  )
}

export default Login