import { useState } from "react";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { id: 1, name: "Plastic Storage Box", price: 299, original: 499, image: "https://images.unsplash.com/photo-1588854337118-1c8c0b3b0f4d?w=400" },
    { id: 2, name: "Kitchen Steel Containers (Set)", price: 599, original: 899, image: "https://images.unsplash.com/photo-1604908176997-431a1c85a5a6?w=400" },
    { id: 3, name: "LED Emergency Light", price: 799, original: 1199, image: "https://images.unsplash.com/photo-1606813909358-2c7f6c1a9c3a?w=400" },
    { id: 4, name: "Foldable Laundry Basket", price: 249, original: 399, image: "https://images.unsplash.com/photo-1616627980799-8cfcddc0a2a8?w=400" },
    { id: 5, name: "Wall Mounted Cloth Hanger", price: 199, original: 349, image: "https://images.unsplash.com/photo-1598300051809-79f2e5b0d9b4?w=400" },
    { id: 6, name: "Bathroom Organizer Rack", price: 349, original: 599, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400" },
    { id: 7, name: "Non-Stick Tawa", price: 499, original: 799, image: "https://images.unsplash.com/photo-1590080875795-8a9b0a9e9a9c?w=400" },
    { id: 8, name: "Multipurpose Cleaning Mop", price: 399, original: 699, image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* TOP OFFER BAR */}
      <div className="bg-green-600 text-white text-sm text-center py-2">
        Free Delivery on Orders Above ₹499 | Extra 10% Off on First Order
      </div>

      {/* NAVBAR */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">Homzo Mart</h1>

          <input
            type="text"
            placeholder="Search for household items..."
            className="border px-4 py-2 rounded w-1/3 hidden md:block"
          />

          <div className="font-medium">
            Cart ({cartCount})
          </div>
        </div>
      </header>

      {/* CATEGORY BAR */}
      <div className="bg-white border-t border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-6 text-sm font-medium overflow-x-auto">
          <span className="cursor-pointer hover:text-green-600">Kitchen</span>
          <span className="cursor-pointer hover:text-green-600">Bathroom</span>
          <span className="cursor-pointer hover:text-green-600">Storage</span>
          <span className="cursor-pointer hover:text-green-600">Cleaning</span>
          <span className="cursor-pointer hover:text-green-600">Lighting</span>
        </div>
      </div>

      {/* SMALL BANNER */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div className="bg-white rounded-lg p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Best Deals on Home Essentials</h2>
            <p className="text-gray-500 text-sm mt-1">
              Save more on everyday products
            </p>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded text-sm">
            Shop Now
          </button>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => {
          const discount = Math.round(
            ((product.original - product.price) / product.original) * 100
          );

          return (
            <div key={product.id} className="bg-white p-4 rounded shadow hover:shadow-lg transition">

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover rounded"
              />

              <h3 className="mt-3 text-sm font-semibold">
                {product.name}
              </h3>

              <div className="mt-1 flex items-center gap-2 text-sm">
                <span className="font-bold text-black">
                  ₹{product.price}
                </span>
                <span className="line-through text-gray-400">
                  ₹{product.original}
                </span>
                <span className="text-green-600 font-medium">
                  {discount}% off
                </span>
              </div>

              <button
                onClick={() => setCartCount(cartCount + 1)}
                className="mt-3 w-full bg-green-600 text-white py-2 rounded text-sm hover:bg-green-700"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t mt-8 py-6 text-center text-sm text-gray-500">
        © 2026 Homzo Mart | Affordable Household Essentials
      </footer>
    </div>
  );
}
