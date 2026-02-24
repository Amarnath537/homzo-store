export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* ================= NAVBAR ================= */}
      <div className="bg-gray-900 text-white px-10 py-3 flex items-center justify-between">
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-yellow-400">
          Project_Homzo.in
        </h1>

        {/* SEARCH & DELIVERY GROUP */}
        <div className="flex flex-1 items-center justify-start gap-6 ml-14">
          <input
            type="text"
            placeholder="Search Project Homzo.in"
            className="w-full max-w-xl px-4 py-2 rounded-md text-black"
          />
          
          <div className="cursor-pointer hover:text-yellow-400 whitespace-nowrap">
            <p className="text-xs text-gray-200">Deliver to</p>
            <p className="text-sm font-bold">India</p>
          </div>
        </div>

        {/* USER ACTIONS */}
        <div className="flex gap-6 text-sm">
          <span className="cursor-pointer hover:text-yellow-400">Account</span>
          <span className="cursor-pointer hover:text-yellow-400">Orders</span>
          <span className="cursor-pointer hover:text-yellow-400">Cart (0)</span>
        </div>
      </div>

      {/* ================= CATEGORY BAR ================= */}
      <div className="bg-gray-800 text-white px-10 py-2 flex gap-8 text-sm">
        <span className="hover:text-yellow-400 cursor-pointer">Kitchen</span>
        <span className="hover:text-yellow-400 cursor-pointer">Home Decor</span>
        <span className="hover:text-yellow-400 cursor-pointer">Home Improvement</span>
        <span className="hover:text-yellow-400 cursor-pointer">Storage</span>
        <span className="hover:text-yellow-400 cursor-pointer">Wall Accessories</span>
      </div>

      {/* ================= HERO SECTION ================= */}
      <div className="mx-10 mt-6">
        <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-xl shadow-md p-12 flex items-center justify-between">

          <div className="max-w-lg">
            <h2 className="text-4xl font-bold mb-4">
              Home Essentials Sale
            </h2>
            <p className="text-gray-700 mb-6">
              Upgrade Your Home With Modern and Premium Products.
            </p>
            <button className="bg-yellow-400 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition">
              Shop Now
            </button>
          </div>

          <img
            src="https://plus.unsplash.com/premium_photo-1680382578857-c331ead9ed51"
            alt="Hero"
            className="w-100 h-80 object-cover rounded-xl"
          />

        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex mx-10 mt-10 gap-8">

        {/* SIDEBAR CONTAINER */}
        <div className="w-1/8 space-y-6"> 
          
          {/* Box 1: Shop by Category */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold mb-4 text-lg border-b pb-1">Shop by Category</h3>
            <ul className="space-y-2 text-sm text-gray-900">
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Kitchen</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Home Decor</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Home Improvement</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Storage</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Wall Accessories</li>
            </ul>
          </div>

          {/* Box 2: Shop by Price */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold mb-4 text-lg border-b pb-1">Shop by Price</h3>
            <ul className="space-y-2 text-sm text-gray-900">
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Under ₹500</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">₹500 - ₹1,000</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">₹1,000 - ₹2,000</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors">Over ₹2,000</li>
            </ul>
          </div>

        </div>

        {/* PRODUCTS GRID */}
        <div className="w-4/5">

          <h3 className="text-2xl font-bold mb-6">
            Featured Products
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* PRODUCT CARD 1 */}
            <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">
              <img
                src="https://plus.unsplash.com/premium_photo-1679826780251-b68160114d32?"
                alt="Product"
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h4 id="product-name" className="font-semibold mb-2">Homzo Premium Kitchen Steel Container</h4>
              <p className="text-yello-500 font-bold mb-3">₹499</p>
              <button id="Add-to-cart" className="w-full bg-yellow-400 py-2 rounded-md font-medium hover:bg-yellow-500 transition">
                Add to Cart
              </button>
            </div>

            {/* PRODUCT CARD 2 */}
            <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1601232251778-81ba856938c8?"
                alt="Product"
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h4 id="product-name" className="font-semibold mb-2">Homzo premium Foldable Laundry Basket</h4>
              <div className="flex items-center gap-2 mb-3">
                <p className="text-green-600 font-bold text-lg">₹299</p>
                <p className="text-gray-400 line-through text-sm">₹350</p>
                <span className="text-green-600 text-xs font-bold bg-green-100 px-2 py-0.5 rounded">
                  14% OFF
                </span>
              </div>              
              <button id="Add-to-cart" className="w-full bg-green-400 py-2 rounded-md font-medium hover:bg-yellow-500 transition">
                Add to Cart
              </button>
            </div>

            {/* PRODUCT CARD 3 */}
            <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">
              <img
                src="https://plus.unsplash.com/premium_photo-1676410715645-dfe0429e32fe?"
                alt="Product"
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h4 id="product-name" className="font-semibold mb-2">Homzo Premium Artificial Spring Flowers</h4>
              <p className="text-yello-500 font-bold mb-3">₹699</p>
              <button id="Add-to-cart" className="w-full bg-yellow-400 py-2 rounded-md font-medium hover:bg-yellow-500 transition">
                Add to Cart
              </button>
            <div className="a-section a-spacing-none a-spacing-top-micro">
              Only Few left!
            </div>
            </div>

          </div>

        </div>

      </div>

      {/* ================= FOOTER ================= */}
      <div className="bg-gray-900 text-white text-center py-6 mt-12">
        © 2026 Project_Homzo-Patil & Group Co. All rights reserved.
      </div>

    </div>
  );
}
