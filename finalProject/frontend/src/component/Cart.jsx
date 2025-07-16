import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Cart = () => {


  let [items , setItems] = useState([])


   let getData = async()=>{

      let res = await axios.get("http://localhost:3000/items")
      // console.log(res)
      setItems(res.data)

   }

   useEffect(()=>{
      getData()
   },[])


   let removeItem =async (id)=>{
     
    await axios.delete(`http://localhost:3000/items/${id}`)
    getData()

   }
  return (
    <>
      <Navbar/>

      <div className="cartContainer">

        {
          items.map((ele)=>{
            return(
              <div className="itemCard">

                <div className="left">

                  <img src={ele.image} alt="" />
                </div>

                  <div className='right'>
                  <h2>Title : {ele.title}</h2>
                  <h2> Price : {ele.price} $</h2>
                  <h2> Rating : {ele.rating?.rate}</h2>
                  <button onClick={()=>removeItem(ele.id)}> Remove</button>

                  </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Cart