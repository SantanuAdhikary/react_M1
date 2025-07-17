import React from 'react'
import Home from './Home'
import Navbar from './Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import UseMemoExample from './UseMemoExample'

const App = () => {
  return (
    <>

     <BrowserRouter>
       <Navbar/>

        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/usememo' element={<UseMemoExample/>}></Route>
        </Routes>

        
     </BrowserRouter>
    </>
  )
}

export default App