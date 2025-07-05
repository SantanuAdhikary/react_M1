import React from 'react'
import Hi from './components/Hi'
import Hello from './components/Hello'
import Bye from './components/Bye'
import UserProvider from './context/Usercontext'

const App = () => {
  return (
    <>

           <UserProvider>
               <Hi/>
               <Hello/>
           <Bye/>
           </UserProvider>


    </>
  )
}

export default App