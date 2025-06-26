import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Signup.css'

const Signup = () => {

    let [name, setName] = useState("")
    let [pass,setPass] = useState("")
    let [email,setEmail] = useState("")


    let navigate = useNavigate()

    let handleSubmit =(e)=>{
        e.preventDefault()
        // console.log({name,pass,email})

        let user = {name,pass,email}

        console.log(user)

        localStorage.setItem("loginUser", JSON.stringify(user))

        setEmail("")
        setName("")
        setPass("")

        navigate("/login")

    }
  return (
    <div className='signup'>

             <div className="signupLeft">

                   <div className="leftInner">
                    <h1> Signup To myApp</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, optio.</p>

                   </div>
             </div>

             <div className="signupRight">

                    <div className="inner">
                        <form action=""  onSubmit={handleSubmit}>
                            <label htmlFor="">name</label>
                            <input type="text" placeholder='enter name' value={name} onChange={(e)=> setName(e.target.value)}/>
                            <label htmlFor="">email</label>
                            <input type="text" placeholder='enter email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                            <label htmlFor="">password</label>
                            <input type="text" placeholder='enter password' value={pass} onChange={(e)=> setPass(e.target.value)} />
                            <button>Register</button>

                            <div className="footer">
                                <p>Already have an accout ?</p>

                                <NavLink to="/login">
                                    Login
                                </NavLink>
                            </div>
                        </form>


                    </div>
             </div>
    </div>
  )
}

export default Signup