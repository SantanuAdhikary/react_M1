import React from 'react'

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './component/Signup'
import Login from './component/Login'
import Products from './component/Products'
import Cart from './component/Cart'
import Product from './component/Product'

const App = () => {
  return (
    <>

     <BrowserRouter>
        <Routes>
              <Route path='/' element={<Signup/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/products' element={<Products/>}></Route>
              <Route path='/products/:pid' element={<Product/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>

        </Routes>
     </BrowserRouter>

    </>
  )
}

export default App