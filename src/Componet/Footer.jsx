import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-20 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Daraz</h3>
            <p className="text-gray-400 text-sm">
              Daraz is the leading online shopping platform in Bangladesh,
              offering a wide range of products with the best deals and discounts.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Track Your Order</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Return Policy</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Daraz Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Daraz Stories</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get special offers and updates
            </p>

            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none text-gray-800 flex-grow mb-2 sm:mb-0"
              />
              <button className="bg-yellow-500 px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none text-black font-medium hover:bg-yellow-400">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          © 2026 Daraz Bangladesh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
