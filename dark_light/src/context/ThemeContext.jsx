import { createContext, useContext, useState } from "react";


// !  first step 

let themeContext =  createContext()

// let {Provider} = themeContext


// ! 2nd step 

let ThemeProvider =({children})=>{

 let [isDark, setIsDark] =   useState(true)

 let changeTheme =()=>{
    setIsDark(pre=> !pre)

    console.log(isDark)
 }
    return(

        <themeContext.Provider value={{changeTheme, isDark}}>

            {children}
        
        </themeContext.Provider>
    )
}

// ! 3rd step

export let useCustom =()=>{

    return  useContext(themeContext)
}

export default ThemeProvider