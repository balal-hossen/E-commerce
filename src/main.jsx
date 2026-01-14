import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './React-Router/route.jsx'
import { CartProvider } from './CardContext/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<CartProvider>
      <RouterProvider router={router} />
</CartProvider>
  </StrictMode>
)
