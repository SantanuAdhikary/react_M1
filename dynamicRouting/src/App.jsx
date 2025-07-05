import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
import Navbar from './components/Navbar'
import PlayerDetails from './components/PlayerDetails'


const App = () => {
  return (
    <>

      <BrowserRouter>
         
         <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path="/users" element={<Users/>}></Route>
              <Route path="/users/:playerId" element={<PlayerDetails/>}></Route>
              
          </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App