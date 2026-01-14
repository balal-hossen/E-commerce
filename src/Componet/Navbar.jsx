// src/components/Navbar.jsx
import React, { useState } from "react";

import CartDrawer from "./CardDrawer";
import { useCart } from "../CardContext/CartContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems } = useCart();

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Living",
    "Beauty",
    "Sports",
    "Books",
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <div className="text-3xl font-bold text-yellow-500">BELAL KHAN</div>
            <div className="ml-2 text-3xl font-bold text-blue-500">BD</div>
          </div>

          <div className="hidden md:flex flex-grow mx-8 max-w-2xl">
            <input
              type="text"
              placeholder="Search in Daraz"
              className="flex-grow border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none"
            />
            <button className="bg-yellow-500 px-6 py-2 rounded-r-full text-white">
              🔍
            </button>
          </div>

          <div className="flex items-center space-x-5">
            <div className="relative space-x-1.5">

                {/* icon hard and logo */}
              <i className="fas fa-user-circle text-2xl text-blue-700 hidden md:block"></i>
              <i className="fas fa-heart text-2xl text-red-700 hidden md:block"></i>

              <button className="" onClick={() => setCartOpen(!cartOpen)}>🛒</button>

              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                  {cartItems.reduce((sum, item) => sum + item.qty, 0)}
                </span>
              )}
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block border-t border-gray-200">
          <ul className="flex py-3">
            {categories.map((item) => (
              <li key={item} className="px-4 py-2">
                <a href="#" className="text-gray-700 hover:text-yellow-500">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {cartOpen && (
          <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        )}
      </div>
    </header>
  );
};

export default Navbar;
