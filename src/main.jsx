import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ThemeContextProvider from './context/ThemeContext.jsx'
import CartProvider from './context/CartContext.jsx'
import './theme.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeContextProvider>
  </StrictMode>,
)
