import React from 'react'

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './component/Signup'
import Login from './component/Login'
import Products from './component/Products'

const App = () => {
  return (
    <>

     <BrowserRouter>
        <Routes>
              <Route path='/' element={<Signup/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/products' element={<Products/>}></Route>

        </Routes>
     </BrowserRouter>

    </>
  )
}

export default App