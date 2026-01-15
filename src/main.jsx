import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './React-Router/route.jsx'
import { CartProvider } from './CardContext/CartContext.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
  <CartProvider>
      <RouterProvider router={router} />
</CartProvider>
</AuthProvider>
  </StrictMode>
)
