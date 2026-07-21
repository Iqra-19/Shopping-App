import {Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Login from './pages/Login'

import './App.css'

function App() {
  
  const [products, setProducts] = useState([]);

  useEffect( ()=> {
    fetch("https://dummyjson.com/products?limit=194")
    .then((response) => response.json() )
    .then( (data) => {
      //console.log(data)
      //console.log(data.products)

      setProducts(data.products)
    } )
  }, [] );

  console.log("products:",products);
  console.log("Lenght:",products.length);
  
  return (
    <>
    <Navbar />

          <main className="app-content">
            <Routes>
              <Route path='/' element={ <Home products={products.slice(0,8)}/> } />
              <Route path='/shop' element={ <Shop products={products}/> } />
              <Route path='/cart' element={ <Cart /> } />
              <Route path='/wishlist' element={ <Wishlist /> } />
              <Route path='/login' element={ <Login /> } />
            </Routes>
          </main>

          <Footer />
     
    </>
  )
}

export default App
