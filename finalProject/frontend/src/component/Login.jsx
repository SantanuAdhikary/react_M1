import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    let [loginemail , setLoginemail] = useState("")
    let [loginPass, setLoginPass] = useState("")

    let navigate = useNavigate()


    let handleLogin =async(e)=>{
        e.preventDefault()

        let res = await axios.get("http://localhost:3000/users")
        let users = res.data
        console.log(users)

        let user = users.find((ele)=> ele.userPass ==loginPass && ele.userEmail == loginemail)
        console.log(user)

        if(user)
        {
            alert("login done ")
            navigate("/products")
        }
        else{
            alert("wrong credentials")
        }
    }

  return (
      <div className='login'>

        <h1> Login page</h1>

       <div className="inner">
             <form action="" onSubmit={handleLogin}>
             
                <label htmlFor="">email</label>
                <input type="text" placeholder='enter your email' value={loginemail} onChange={(e)=> setLoginemail(e.target.value)} />
                <label htmlFor="">Password</label>
                <input type="text" placeholder='enter your password' value={loginPass} onChange={(e)=> setLoginPass(e.target.value)} />
                <button>Login</button>
             </form>
             <footer>
                 <p>don't have an Account ?</p>
             <Link to="/">signup</Link>
             </footer>
       </div>

    </div>
  )
}

export default Login