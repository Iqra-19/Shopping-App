import {Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
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

  const [cart, setCart] = useState([]);

  /* ============================  Cart  ============================  */
  const increaseQuantity = (id) => {
    setCart (
      cart.map( (item) => 
        item.id ===id 
          ? {
            ...item, 
            quantity : item.quantity +1
          }
          : item
      )
    )
  };

  const decreaseQuantity = (id) => {
    setCart (
      cart.map( (item) => 
        item.id ===id 
          ? {
            ...item, 
            quantity : 
              item.quantity > 1
                ? item.quantity - 1
                : 1
          }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(
      cart.filter ( (item) => item.id !== id )
    );
  };

  /* ============================  Wishlist  ============================  */
  const [wishlist, setWishlist] = useState([]);

  const handleWishlist = (product) => {
    
    setWishlist( (prevWishlist) => {
        
      const existingProduct = prevWishlist.find(
          (item) => item.id === product.id
        );

        if(existingProduct){
          return prevWishlist.filter(
            (item) => item.id !== product.id
          );
        }

        return[
          ...prevWishlist,
          product,
        ]
    } );
  };
  
  return (
    <>
    <Navbar cart={cart} wishlist={wishlist} setWishlist={setWishlist}/>

          <main className="app-content">
            <Routes>
              <Route path='/' element={ <Home products={products.slice(0,8)} handleWishlist={handleWishlist} wishlist={wishlist}/> } />
              <Route path='/product/:id' element={ <ProductDetails products={products} cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} handleWishlist={handleWishlist}/> }/>
              <Route path='/shop' element={ <Shop products={products} handleWishlist={handleWishlist} wishlist={wishlist}/> } />
              <Route path='/cart' element={ <Cart cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItem={removeItem}/> } />
              <Route path='/wishlist' element={ <Wishlist wishlist={wishlist} setWishlist={setWishlist} handleWishlist={handleWishlist}/> } />
              <Route path='/login' element={ <Login /> } />
            </Routes>
          </main>

          <Footer />
     
    </>
  )
}

export default App
