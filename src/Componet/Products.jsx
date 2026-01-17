import React from "react";
import { useCart } from "../CardContext/CartContext";
import ProductList from "./ProductList";


const Products = () => {
  const { addToCart } = useCart();

  const flashSaleProducts = [1, 2, 3, 4, 5, 6];
  const recommendedProducts = [1, 2, 3, 4, 5];
  const categories = [
    "Electronics",
    "Men",
    "Women",
    "Home",
    "Beauty",
    "Sports",
    "Baby",
    "Groceries",
  ];

  return (
    <div className="bg-gray-50">
      {/* Flash Sale */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-red-100 rounded-lg p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-red-600">Flash Sale</h2>
            <div className="flex space-x-4">
              {["05 Hours", "32 Mins", "10 Secs"].map((t) => (
                <div key={t} className="text-center">
                  <div className="text-xl font-bold text-red-600">
                    {t.split(" ")[0]}
                  </div>
                  <div className="text-xs text-gray-600">{t.split(" ")[1]}</div>
                </div>
              ))}
            </div>
            <button className="bg-white text-red-500 px-4 py-1 rounded-full text-sm hover:bg-gray-100">
              View All
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {flashSaleProducts.map((i) => {
              const product = {
                name: `Sample Product ${i}`,
                price: 899,
                image:"./image/1678548222284.jpg",
              };
              return (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow hover:shadow-md transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  <div className="p-3">
                    <h3 className="text-sm font-medium truncate">{product.name}</h3>
                    <div className="text-xs text-gray-500 mb-1">★ 4.{i} (120)</div>
                    <div className="flex items-center">
                      <span className="font-bold text-red-500">৳{product.price}</span>
                      <span className="text-xs line-through text-gray-400 ml-2">
                        ৳1,499
                      </span>
                    </div>
                    <button
                      className="w-full bg-yellow-500 text-white py-1 rounded mt-2 text-sm hover:bg-yellow-600"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {categories.map((cat) => (
            <div
              key={cat}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition text-center p-4"
            >
              <img
                src="./image/1678548222284.jpg"
                alt={cat}
                className="w-14 h-14 mx-auto mb-2"
              />
              <p className="text-sm font-medium">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Products */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Recommended For You</h2>
          <button className="text-yellow-600 text-sm">View All</button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {recommendedProducts.map((i) => {
            const product = {
              name: `Recommended Product ${i}`,
              price: 2999 + i * 100,
              image:
                "./image/1678548222284.jpg",
            };
            return (
              <div
                key={i}
                className="bg-white rounded-lg shadow hover:shadow-md transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-3">
                  <h3 className="text-sm font-medium truncate">{product.name}</h3>
                  <div className="text-xs text-gray-500">★ 4.8 (200)</div>
                  <span className="font-bold text-red-500">৳{product.price}</span>
                  <button
                    className="w-full bg-yellow-500 text-white py-1 rounded mt-2 text-sm hover:bg-yellow-600"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Daraz Mall */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg overflow-hidden relative">
            <div className="p-6 text-white">
              <h3 className="font-bold text-xl mb-2">Daraz Mall</h3>
              <p className="mb-4">100% Authentic Products</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-gray-100 transition">
                Shop Now
              </button>
            </div>
            <img
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1zY8Yl7Y2gK0jSZFgXXc5OFXa.jpg"
              alt="Daraz Mall"
              className="absolute right-0 bottom-0 h-32 opacity-90"
            />
          </div>

          {/* Daraz Global */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg overflow-hidden relative">
            <div className="p-6 text-white">
              <h3 className="font-bold text-xl mb-2">Daraz Global</h3>
              <p className="mb-4">International Brands</p>
              <button className="bg-white text-green-600 px-4 py-2 rounded-full hover:bg-gray-100 transition">
                Explore
              </button>
            </div>
            <img
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1zY8Yl7Y2gK0jSZFgXXc5OFXa.jpg"
              alt="Daraz Global"
              className="absolute right-0 bottom-0 h-32 opacity-90"
            />
          </div>

          {/* Daraz Mart */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg overflow-hidden relative">
            <div className="p-6 text-white">
              <h3 className="font-bold text-xl mb-2">Daraz Mart</h3>
              <p className="mb-4">Daily Essentials</p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-gray-100 transition">
                Shop Now
              </button>
            </div>
            <img
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1zY8Yl7Y2gK0jSZFgXXc5OFXa.jpg"
              alt="Daraz Mart"
              className="absolute right-0 bottom-0 h-32 opacity-90"
            />
          </div>
        </div>
      </section>
      <ProductList/>
    </div>
  );
};

export default Products;
