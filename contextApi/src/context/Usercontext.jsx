



// ! step 1 :   we have to create the context 

import { createContext, useContext, useState } from "react";


     let userContext =  createContext()

    

//  !  step 2: we have to create one provider and provide the properties

let UserProvider =({children})=>{

    let [number, setNumber] = useState(0)

    let increase =()=>{
        setNumber(number+1)
    }
    return(
        <userContext.Provider  value={{stuName:"virat" , stuAge:20 , increase , number}}>
                {children}

        </userContext.Provider>
    )
}


// ! 4th step : create custom hook 

 export const useCustom =()=>{

    let p =  useContext(userContext)
    return p
  }

export default UserProvider