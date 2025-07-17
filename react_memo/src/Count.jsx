
import React, { useRef } from 'react'

const Count = () => {

    let count = useRef(0)
  return (
    <div className='count'>
        <h2> count value {count.current++}</h2>
    </div>
  )
}

// export default  Count
export default React.memo( Count)