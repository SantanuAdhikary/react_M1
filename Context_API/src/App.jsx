import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import UserProvider from './context/UserContext'
const App = () => {
  
  return (
    <>

      <UserProvider>

         <BrowserRouter>

            <Navbar/>
              <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
              </Routes>
         </BrowserRouter>
      </UserProvider>

    </>
  )
}

export default App