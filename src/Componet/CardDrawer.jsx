// src/components/CartDrawer.jsx
import React, { useState } from "react";
import { useCart } from "../CardContext/CartContext";
import CheckoutModal from "./CheckoutModel";



const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQty, clearCart } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[60] overflow-hidden">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75" onClick={onClose}></div>
        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <div className="w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700 bg-white shadow-xl flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
              <button className="text-gray-400 hover:text-gray-500" onClick={onClose}>
                <i className="fa-solid fa-xmark text-2xl"></i>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-lg text-center mt-20">Your cart is empty.</p>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.id} className="py-6 flex">
                      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-4 flex-1 flex flex-col">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3 className="line-clamp-1 mr-2">{item.title}</h3>
                          <p>${item.price * item.qty}</p>
                        </div>
                        <div className="flex items-center border border-gray-300 rounded-md mt-2">
                          <button
                            className="px-2 py-1 hover:bg-gray-100"
                            onClick={() => updateQty(item.id, -1)}
                            disabled={item.qty <= 1}
                          >
                            -
                          </button>
                          <span className="px-2 py-1">{item.qty}</span>
                          <button
                            className="px-2 py-1 hover:bg-gray-100"
                            onClick={() => updateQty(item.id, 1)}
                          >
                            +
                          </button>
                        </div>
                        <button className="text-red-500 mt-2" onClick={() => removeFromCart(item.id)}>Remove</button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6 bg-gray-50">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                  <p>Subtotal</p>
                  <p>${total.toFixed(2)}</p>
                </div>
                <button
                  className="w-full bg-yellow-500 text-white py-2 rounded-full"
                  onClick={() => setCheckoutOpen(true)}
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {checkoutOpen && (
        <CheckoutModal
          isOpen={checkoutOpen}
          onClose={() => setCheckoutOpen(false)}
          total={total}
          clearCart={clearCart}
        />
      )}
    </>
  );
};

export default CartDrawer;
