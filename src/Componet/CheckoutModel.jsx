// src/components/CheckoutModal.jsx
import React, { useState, useEffect } from "react";

const CheckoutModal = ({ isOpen, onClose, total, clearCart }) => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (isOpen) setStep(1);
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
    setTimeout(() => {
      setStep(3);
      clearCart();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto flex items-center justify-center bg-gray-900 bg-opacity-70">
      <div className="bg-white rounded-lg w-full max-w-lg p-6">
        {step === 1 && (
          <form onSubmit={handleSubmit}>
            <h3 className="text-xl font-bold mb-4">Secure Checkout</h3>
            <input required type="text" placeholder="Full Name" className="w-full mb-2 border px-3 py-2 rounded" />
            <input required type="email" placeholder="Email" className="w-full mb-2 border px-3 py-2 rounded" />
            <input required type="text" placeholder="Card Number" className="w-full mb-2 border px-3 py-2 rounded" />
            <div className="flex gap-2">
              <input required type="text" placeholder="MM/YY" className="w-1/2 border px-3 py-2 rounded" />
              <input required type="text" placeholder="CVC" className="w-1/2 border px-3 py-2 rounded" />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="font-bold">Total: ${total.toFixed(2)}</span>
              <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-full">Pay Now</button>
            </div>
          </form>
        )}

        {step === 2 && (
          <div className="text-center py-10">
            <p className="text-gray-700">Processing Payment...</p>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-10">
            <p className="text-green-600 text-2xl mb-4">✅ Payment Successful!</p>
            <button onClick={onClose} className="bg-yellow-500 text-white px-4 py-2 rounded-full">Continue Shopping</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
