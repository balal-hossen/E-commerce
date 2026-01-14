import React from "react";
import { CartProvider } from "./CardContext/CartContext";
import Products from "./Componet/Products";
import Navbar from "./Componet/Navbar";


const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Products/>
    </CartProvider>
  );
};

export default App;
