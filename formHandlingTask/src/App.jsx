import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'


const App = () => {
  return (
    <>

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}>
              
            </Route>
        </Routes>
    </BrowserRouter>

    </>
  )
}

export default App