


// !  first step 

import { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";


  export let userContext =  createContext()

  let {Provider} = userContext


//   !  second step 

  let UserProvider =({children})=>{


     let [count , setCount]  = useState(0)

     let increment =()=>{
        setCount(count + 1)
     }
     let decrement =()=>{
        setCount(count - 1)
     }

    return(
        <Provider  value={{userName:"virat", userAge:18,userPh : 9898989898 , increment, decrement, count}}>

            {children}
        
        </Provider>
    )
  }


//   !  custom hook 


   export let useCustom =()=>{
      return   useContext(userContext)
   }

  export default UserProvider;