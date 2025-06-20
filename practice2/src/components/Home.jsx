import React from 'react'
import Navbar from './Navbar'
import ProfileCard from './profileCard'
import List from './List'
import UsestateExample from './UsestateExample'

const Home = () => {

    let subjects = ["html","css","javascript","react","nodejs","express","mongodb"]
  return (
    <>

        <Navbar logoName = {"MyLogo"}/>

        <div className="main">

            <ProfileCard  userName= {"virat"} age={20}/>
            <ProfileCard userName ={"rohit"} age={21}/>
            <ProfileCard userName={"rahul"} age={19}/>
        </div>

        <div className="section">

            <List subjects={subjects} />

            <UsestateExample/>
        </div>
    </>
  )
}

export default Home