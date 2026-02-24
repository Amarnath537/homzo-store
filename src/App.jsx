import { useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Minimal Wall Shelf", category: "Furniture", price: 1299 },
  { id: 2, name: "Modern Table Lamp", category: "Lighting", price: 899 },
  { id: 3, name: "Storage Organizer Box", category: "Storage", price: 499 },
  { id: 4, name: "Decor Plant Pot", category: "Decor", price: 699 },
];

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h1>Homzo Store</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Cart Items: {cart.length}</h2>
        <h3>Total: ₹{total}</h3>
      </div>
    </div>
  );
}

export default App;
