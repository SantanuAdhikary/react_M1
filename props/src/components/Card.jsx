import React from 'react'

const Card = ( props ) => {

    console.log(props )

    let {productName , price, imageSrc} = props
  return (
    

        <div className="card">

            {/* <h2> product name is : {props.productName} </h2>
            <h3> price : {props.price}</h3> */}

           <img src={imageSrc} alt="" />

            <h2> product name is : {productName} </h2>
            <h3> price : {price}</h3>
        </div>


  )
}

export default Card