import React from "react";

const Banner = () => {
  return (
    <div>
      {/* Scrolling Banner */}
      <div className="overflow-hidden bg-yellow-100 py-2 mt-2">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="mx-6 text-sm font-medium">
            🔥 Flash Sale! Up to 70% OFF | Ends in 05:32:10
          </span>

          <span className="mx-6 text-sm font-medium">
            🚀 Free Delivery on orders above ৳999
          </span>

          <span className="mx-6 text-sm font-medium">
            💳 Daraz Wallet - Get 5% Cashback
          </span>

          <span className="mx-6 text-sm font-medium">
            🎁 Win an iPhone 15 - Shop Now
          </span>

          {/* duplicate content for smooth loop */}
          <span className="mx-6 text-sm font-medium">
            🔥 Flash Sale! Up to 70% OFF | Ends in 05:32:10
          </span>

          <span className="mx-6 text-sm font-medium">
            🚀 Free Delivery on orders above ৳999
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Main Banner */}
          <div className="md:col-span-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg overflow-hidden relative">
            <div className="p-6 sm:p-8 text-white max-w-md">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Mega Ramadan Sale
              </h2>
              <p className="text-sm sm:text-lg mb-4">
                Up to 70% OFF on thousands of products
              </p>
              <button className="bg-white text-yellow-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                Shop Now
              </button>
            </div>

            <img
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1zY8Yl7Y2gK0jSZFgXXc5OFXa.jpg"
              alt="Mega Sale Banner"
              className="absolute right-0 bottom-0 h-32 sm:h-48 opacity-90"
            />
          </div>

          {/* Side Banners */}
          <div className="grid grid-rows-2 gap-4">
            {/* Electronics */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg overflow-hidden relative">
              <div className="p-4 text-white max-w-xs">
                <h3 className="font-bold text-lg">Electronics Sale</h3>
                <p className="text-sm mb-2">Up to 50% OFF</p>
                <button className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm hover:bg-gray-100 transition">
                  Shop Now
                </button>
              </div>

              <img
                src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1zY8Yl7Y2gK0jSZFgXXc5OFXa.jpg"
                alt="Electronics Sale"
                className="absolute right-0 bottom-0 h-20 sm:h-24 opacity-90"
              />
            </div>

            {/* Fashion */}
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg overflow-hidden relative">
              <div className="p-4 text-white max-w-xs">
                <h3 className="font-bold text-lg">Fashion Deals</h3>
                <p className="text-sm mb-2">Starting at ৳199</p>
                <button className="bg-white text-pink-600 px-4 py-1 rounded-full text-sm hover:bg-gray-100 transition">
                  Explore
                </button>
              </div>

              <img
                src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1zY8Yl7Y2gK0jSZFgXXc5OFXa.jpg"
                alt="Fashion Deals"
                className="absolute right-0 bottom-0 h-20 sm:h-24 opacity-90"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
