import {Routes, Route, useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import ProtectedRoute from './components/ProtectedRoute'

import Register from './pages/Register'
import Login from './pages/Login'

import './App.css'

function App() {
  
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

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
      {!isAuthPage && <Navbar />}

      <main className={isAuthPage ? "app-content auth-full-layout" : "app-content"}>
        <Routes>              
          <Route path='/register' element={<Register />}/>

              <Route path='/' element={ <Home products={products.slice(0,8)} /> } />
              <Route path='/product/:id' element={ <ProductDetails products={products} /> }/>
              <Route path='/shop' element={ <Shop products={products} /> } />
              <Route 
                  path='/cart' 
                  element={ 
                    <ProtectedRoute>
                      <Cart/>
                    </ProtectedRoute>
                  } 
              />
              <Route 
                  path='/wishlist' 
                  element={ 
                    <ProtectedRoute>
                      <Wishlist/>
                    </ProtectedRoute>
                  } 
              />
              <Route path='/login' element={ <Login /> } />
            </Routes>
          </main>

      {!isAuthPage && <Footer />}
    </>
  )
}

export default App
