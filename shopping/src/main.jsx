import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import WishlistProvider from './context/WishlistContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <WishlistProvider>
        <App />
      </WishlistProvider>
  </BrowserRouter>,
)
