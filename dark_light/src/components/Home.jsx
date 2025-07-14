import React from 'react'
import { useCustom } from '../context/ThemeContext'

const Home = () => {

 let {changeTheme, isDark} =  useCustom()
  return (
    <div className={isDark?"dark" : "light"}>
        <h1> dark and light theme </h1>

        <button onClick={changeTheme}> click</button>

    </div>
  )
}

export default Home