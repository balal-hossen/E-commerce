import React, { useContext, useState } from "react";
import CartDrawer from "./CardDrawer";
import { useCart } from "../CardContext/CartContext";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Authcontext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { cartItems } = useCart();
  const { user, logOut } = useContext(AuthContext);

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Living",
    "Beauty",
    "Sports",
    "Books",
  ];

  // 🔹 Fix: Always show user displayName & photoURL
  const displayName = user?.displayName || "No Name";
  const photoURL = user?.photoURL || "https://i.ibb.co/2kR0YyW/user.png";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">

          {/* Logo */}
          <NavLink className="flex items-center" to="/">
            <div className="text-2xl font-bold text-yellow-500">BELAL KHAN</div>
            <div className="ml-2 text-2xl font-bold text-blue-500">BD</div>
          </NavLink>

          {/* Search */}
          <div className="hidden md:flex flex-grow mx-8 max-w-2xl">
            <input
              type="text"
              placeholder="Search in Daraz"
              className="flex-grow border border-gray-300 rounded-l-full px-4 py-2"
            />
            <button className="bg-yellow-500 px-6 py-2 rounded-r-full text-white">
              🔍
            </button>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-6 relative">

            {/* Wishlist */}
            <i className="fas fa-heart text-2xl text-red-700 hidden md:block"></i>

            {/* Cart */}
            <button onClick={() => setCartOpen(!cartOpen)}>🛒</button>
            {cartItems.length > 0 && (
              <span className="absolute -top-1 right-16 lg:right-12 bg-red-500 text-white text-xs px-2 rounded-full">
                {cartItems.reduce((sum, item) => sum + item.qty, 0)}
              </span>
            )}

            {/* Auth Section */}
            {user ? (
              <div className="relative">
                <img
                  onClick={() => setProfileOpen(!profileOpen)}
                  src={photoURL}
                  alt="profile"
                  className="w-9 h-9 rounded-full border cursor-pointer"
                />

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-64 bg-white border rounded-lg shadow-lg z-50">
                    <div className="p-4 border-b text-center">
                      <img
                        src={photoURL}
                        className="w-16 h-16 rounded-full mx-auto mb-2"
                        alt="user"
                      />
                      <h4 className="font-semibold">{displayName}</h4>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>

                    <div className="p-3">
                      <button
                        onClick={logOut}
                        className="w-full text-center text-red-500 hover:bg-gray-100 py-2 rounded-md"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink to="/login">
                <button className="text-xl hover:text-yellow-500">SignUp</button>
              </NavLink>
            )}

            {/* Mobile Menu */}
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

        {/* Cart Drawer */}
        {cartOpen && (
          <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        )}
      </div>
    </header>
  );
};

export default Navbar;
