import {Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Login from './pages/Login'

import './App.css'

function App() {
  return (
    <>
    <Navbar />

          <main className="app-content">
            <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/shop' element={ <Shop /> } />
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
