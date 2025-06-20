import React from 'react'

const List = (props) => {

    let {subjects} = props
  return (
    <>

    {
    subjects.map((ele , index)=>{
        return(
            <li key={index}>{ele}</li>
        )
    })
    
    
    }
    
    </>
  )
}

export default List