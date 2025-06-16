import React from 'react'
import User from './User'

const About = () => {
  return (
    <>
    
       <h1> I am about component</h1>

       <User userName={"rohit"} age={10} phNo ={123456789}/>

       <User  userName={"rahul"} age={12} phNo={77676765665} />
      
    
    </>
  )
}

export default About