import React, { useEffect, useState } from 'react'
import './Dashboard.css'
const Dashboard = () => {


      let [product , setProduct] = useState([])




    let getData = async ()=>{

      let res = await fetch("https://fakestoreapi.com/products")
      let data = await res.json()
      setProduct(data)
     
    }

    useEffect(()=>{
      getData()
    },[])

    console.log(product)

  return (
    <div className='dashboard'>

        <div className="dashboardLeft">

            <div className="profile">

            </div>

            <div className="items">
                <p>display users</p>
                <p> display products</p>
            </div>

        </div>

        <div className="dashboardRight">


          {
            product.map((ele)=>{
              return(
                <div className='profileCard' key={ele.id}>

                     <img src={ele.image} alt="" />
                  
                     <h3>title : {ele.title.slice(0,9)}...</h3>
                     <h3> price : {ele.price} Rs</h3>
                     <h3> rating : {ele.rating.rate}</h3>
                   </div>
              )
            })
          }



        </div>
    </div>
  )
}

export default Dashboard