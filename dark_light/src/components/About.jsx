import React from 'react'
import { useCustom } from '../context/ThemeContext'

const About = () => {

   let {isDark, changeTheme} =  useCustom()
  return (
    <div className={isDark ? "dark" : "light"}>

                <h1> about page</h1>

                <button onClick={changeTheme}> click</button>

    </div>
  )
}

export default About