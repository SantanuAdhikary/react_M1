import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      
      
       <BrowserRouter>

          <Routes>
              <Route path='/' element={<Signup/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
          </Routes>
       </BrowserRouter>

     
    </div>
  )
}

export default App