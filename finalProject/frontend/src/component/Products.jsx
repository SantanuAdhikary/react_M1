import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Products = () => {

  let [products , setProducts] = useState([])


  let getData = async()=>{
      
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json()
    setProducts(data)
  }

  useEffect(()=>{
      getData()
  },[])

  return (
    <div>

          <Navbar/>

          <div className="productsContainer">
             {
              products.map((ele)=>{
                return(
                  <div className='card' key={ele.id}>
                      <img src={ele.image} alt="" />
                      <h2> Title : {ele.title.slice(0,12)}</h2>
                       <h3> Price : {ele.price} $</h3>

                       <button> <Link to={ `${ele.id}`}>More Info</Link> </button>

                  </div>
                )
              })
             }
          </div>
    </div>
  )
}

export default Products