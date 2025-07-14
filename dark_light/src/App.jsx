import React from 'react'
import ThemeProvider from './context/ThemeContext'
import Home from './components/Home'

const App = () => {

  return (
    < >

     <ThemeProvider>
         <Home/>   
     </ThemeProvider>
    </>
  )
}

export default App