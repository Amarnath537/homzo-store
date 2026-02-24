import { useState } from "react";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: 1,
      name: "Minimal Wall Shelf",
      price: 1299,
      original: 1799,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1582582494700-c84b38c45b5b?w=500",
    },
    {
      id: 2,
      name: "Modern Table Lamp",
      price: 899,
      original: 1299,
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
    },
    {
      id: 3,
      name: "Storage Organizer",
      price: 499,
      original: 799,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500",
    },
    {
      id: 4,
      name: "Wooden Coffee Table",
      price: 3499,
      original: 4999,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* NAVBAR */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-black text-white px-3 py-1 rounded font-bold">
              H
            </div>
            <h1 className="text-xl font-bold">Homzo</h1>
          </div>

          <input
            type="text"
            placeholder="Search for products..."
            className="border px-4 py-2 rounded w-1/3 hidden md:block"
          />

          <div className="font-medium">
            Cart ({cartCount})
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Modern Furniture Collection
        </h2>
        <p className="text-gray-500">
          Premium quality furniture at best prices
        </p>
      </section>

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">

        {products.map((product) => {
          const discount = Math.round(
            ((product.original - product.price) /
              product.original) *
              100
          );

          return (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {discount}% OFF
                </span>
              </div>

              <h3 className="mt-3 font-semibold text-sm">
                {product.name}
              </h3>

              <div className="text-yellow-500 text-sm">
                ⭐ {product.rating}
              </div>

              <div className="mt-2 flex items-center gap-2">
                <span className="font-bold">
                  ₹{product.price}
                </span>
                <span className="line-through text-gray-400 text-sm">
                  ₹{product.original}
                </span>
              </div>

              <button
                onClick={() =>
                  setCartCount(cartCount + 1)
                }
                className="mt-3 w-full bg-black text-white py-2 rounded text-sm hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      {/* FOOTER */}
      <footer className="bg-white mt-10 py-8 border-t">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-sm text-gray-600">
          <div>
            <h4 className="font-bold mb-2">About</h4>
            <p>Homzo is your destination for modern home decor.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Customer Service</h4>
            <p>Returns</p>
            <p>Shipping</p>
            <p>Support</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Contact</h4>
            <p>Email: support@homzo.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
