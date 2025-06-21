

import React, { useEffect, useState } from 'react'

const App = () => {

 let [userdata , setUserdata] = useState([])


  let getData = async ()=>{

    try{
      
            let res = await  fetch("https://fakestoreapi.com/users")
            let data = await res.json()
            setUserdata(data)
          

    }
    catch(err)
    {
        console.log(err)
    }
  }

  useEffect(()=>{

    getData()
    console.log("data fetched....")
  },[])



  return (
    <>

    <nav>
          <h2> all the users</h2>

    </nav>

    <main>

     {
      userdata.map((ele)=>{

        return(
          <div className='card' key={ele.id}> 

            <h3> name : {ele.name.firstname + " "+ ele.name.lastname}</h3>
            <h3> email : {ele.email}</h3>
            <h3> phone number: {ele.phone}</h3>
          
          </div>
        )
      })
     }
    </main>



    

   
    
    </>
  )
}

export default App