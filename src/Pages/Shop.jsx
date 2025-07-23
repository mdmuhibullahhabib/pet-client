import React, { useEffect, useState } from 'react';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <section className="text-center space-y-5">
        <h1 className="text-3xl font-bold text-gray-800">Pet Essentials & Shop</h1>
        <p className="text-gray-600">Explore a wide range of food, toys, grooming tools and accessories for your beloved pet!</p>
      </section>

      {loading ? (
        <div className="flex justify-center py-10">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
          {products.map(product => (
            <div key={product.id} className="bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img src={product.image} alt={product.title} className="w-full h-48 object-contain p-4" />
              <div className="px-4 pb-4 text-left">
                <h3 className="text-md font-semibold text-gray-800 mb-2 truncate">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                <p className="text-gray-800 font-bold text-lg">${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 block w-full bg-[#0E7A81] hover:bg-[#095b60] text-white py-2 rounded-md"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </section>
      )}

      {cart.length > 0 && (
        <div className="fixed right-4 bottom-4 bg-white border shadow-lg rounded-lg p-4 w-72 z-50">
          <h2 className="text-lg font-bold mb-3">Cart Items</h2>
          <ul className="space-y-2 max-h-60 overflow-y-auto">
            {cart.map((item, idx) => (
              <li key={idx} className="flex justify-between text-sm">
                <span>{item.title.slice(0, 20)}...</span>
                <span className="font-semibold">${item.price}</span>
              </li>
            ))}
          </ul>
        