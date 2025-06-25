import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>

        <div className="left">



              <h1> Login Page</h1>

            <div className="inner">
                <form action="" >
                    
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='enter your email' />
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder='enter your password' />

                    <button>register</button>
                </form>

                <footer>

                <p>don't have an accout ?</p>

                <NavLink to="/"> signup</NavLink>
                </footer>
            </div>

        </div>

        <div className="right">

          
            <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="" />

        </div>

    </div>
  )
}

export default Login