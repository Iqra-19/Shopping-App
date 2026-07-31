import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import WishlistProvider from './context/WishlistContext.jsx'
import CartProvider from './context/CartContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <WishlistProvider>
        <CartProvider>
            <App />
        </CartProvider>
      </WishlistProvider>
  </BrowserRouter>,
)
