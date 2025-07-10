import React from 'react'

const Card = (props) => {

    console.log(props)

    let {cardNo, productName} = props
  return (
    <div>

        <h1> card {props.cardNo}</h1>
        <p> I am card {props.cardNo}</p>
        <h2> product name : {productName}</h2>
    </div>
  )
}

export default Card