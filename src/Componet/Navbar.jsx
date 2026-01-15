import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import CartDrawer from "./CardDrawer";
import { useCart } from "../CardContext/CartContext";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { cartItems } = useCart();
  const { user, isAdmin, logOut } = useContext(AuthContext);

  const categories = ["Electronics","Fashion","Home & Living","Beauty","Sports","Books"];
  const displayName = user?.displayName || "No Name";
  const photoURL = user?.photoURL || "https://i.ibb.co/2kR0YyW/user.png";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <NavLink className="flex items-center" to="/">
            <div className="text-2xl font-bold text-yellow-500">BELAL KHAN</div>
            <div className="ml-2 text-2xl font-bold text-blue-500">BD</div>
          </NavLink>

          <div className="hidden md:flex flex-grow mx-8 max-w-2xl">
            <input type="text" placeholder="Search" className="flex-grow border border-gray-300 rounded-l-full px-4 py-2"/>
            <button className="bg-yellow-500 px-6 py-2 rounded-r-full text-white">🔍</button>
          </div>

          <div className="flex items-center space-x-6 relative">
            <i className="fas fa-heart text-2xl text-red-700 hidden md:block"></i>
            <button onClick={() => setCartOpen(!cartOpen)}>🛒</button>
            {cartItems.length > 0 && (
              <span className="absolute -top-1 right-16 lg:right-12 bg-red-500 text-white text-xs px-2 rounded-full">
                {cartItems.reduce((sum, item) => sum + item.qty, 0)}
              </span>
            )}

            {user ? (
              <div className="relative">
                <img onClick={() => setProfileOpen(!profileOpen)} src={photoURL} alt="profile" className="w-9 h-9 rounded-full border cursor-pointer" />
                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-64 bg-white border rounded-lg shadow-lg z-50">
                    <div className="p-4 border-b text-center">
                      <img src={photoURL} className="w-16 h-16 rounded-full mx-auto mb-2" alt="user"/>
                      <h4 className="font-semibold">{displayName}</h4>
                      <p className="text-sm text-gray-500">{user.email}</p>
                      <NavLink to='/admin' >
                        {isAdmin && <p className="text-xl font-bold text-green-500 border rounded-2xl p-2">Admin Dashboard</p>}
                      </NavLink>
                    </div>
                    <div className="p-3">
                      <button onClick={logOut} className="w-full text-center text-red-500 hover:bg-gray-100 py-2 rounded-md">Logout</button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink to="/login">
                <button className="text-xl hover:text-yellow-500">SignUp</button>
              </NavLink>
            )}

            <button className="md:hidden text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</button>
          </div>
        </div>

        <nav className="hidden md:flex border-t border-gray-200 py-3">
          {categories.map(item => (
            <a key={item} href="#" className="px-4 py-2 text-gray-700 hover:text-yellow-500">{item}</a>
          ))}
        </nav>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-2 bg-white border rounded-lg shadow-lg">
            {categories.map(item => (
              <a key={item} href="#" className="block px-4 py-2 text-gray-700 hover:text-yellow-500 border-b last:border-b-0">{item}</a>
            ))}
          </nav>
        )}

        {cartOpen && <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />}
      </div>
    </header>
  );
};

export default Navbar;
