import { useState } from "react";

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [revenue, setRevenue] = useState(0);

  const products = [
    {
      id: 1,
      name: "Minimal Wall Shelf",
      description: "Premium wooden floating shelf",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1582582494700-c84b38c45b5b",
    },
    {
      id: 2,
      name: "Modern Table Lamp",
      description: "Warm light aesthetic lamp",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    },
    {
      id: 3,
      name: "Storage Organizer Box",
      description: "Minimal fabric storage solution",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      id: 4,
      name: "Wooden Coffee Table",
      description: "Scandinavian style living room table",
      price: 3499,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    },
  ];

  const addToCart = (price) => {
    setCartCount(cartCount + 1);
    setRevenue(revenue + price);
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* NAVBAR */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Homzo Store
          </h1>

          <input
            type="text"
            placeholder="Search products..."
            className="border rounded-lg px-4 py-2 w-1/3 hidden md:block"
          />

          <div className="flex gap-6 text-gray-700 font-medium">
            <span className="cursor-pointer hover:text-black">
              Cart ({cartCount})
            </span>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Upgrade Your Home Aesthetics
        </h2>
        <p className="text-gray-600 mb-6">
          Discover modern furniture & decor curated for stylish living.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          Shop Now
        </button>
      </section>

      {/* ANALYTICS BAR */}
      <div className="max-w-7xl mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-gray-500">Items in Cart</h3>
          <p className="text-3xl font-bold">{cartCount}</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-gray-500">Total Revenue</h3>
          <p className="text-3xl font-bold">₹{revenue}</p>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-5"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />

            <h2 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h2>

            <p className="text-gray-500 mb-2">
              {product.description}
            </p>

            <p className="text-xl font-bold text-black mb-3">
              ₹{product.price}
            </p>

            <button
              onClick={() => addToCart(product.price)}
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t mt-10 py-6 text-center text-gray-500">
        © 2026 Homzo Store. All rights reserved.
      </footer>
    </div>
  );
}
