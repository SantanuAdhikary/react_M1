import React from 'react'

const ProfileCard = (props) => {

    console.log(props)
  return (
    <>

    <div className="profileCard">

            <h3> user name is : {props.userName} </h3>
            <h4> age is : {props.age}</h4>
    </div>
    
    </>
  )
}

export default ProfileCard