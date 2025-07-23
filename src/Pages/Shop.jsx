import React, { useEffect, useState } from 'react';

const categories = ['Toys', 'Dress', 'Food', 'Accessories'];

const mockProducts = {
  Toys: [
    { id: 1, name: 'Rubber Bone', price: 10, image: '/images/toy1.jpg' },
    { id: 2, name: 'Squeaky Duck', price: 12, image: '/images/toy2.jpg' },
  ],
  Dress: [
    { id: 3, name: 'Dog Sweater', price: 20, image: '/images/dress1.jpg' },
  ],
  Food: [
    { id: 4, name: 'Puppy Kibble', price: 15, image: '/images/food1.jpg' },
  ],
  Accessories: [
    { id: 5, name: 'Pet Collar', price: 8, image: '/images/acc1.jpg' },
  ],
};

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('Toys');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(mockProducts[activeCategory] || []);
  }, [activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 lg:flex gap-6">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/5 space-y-3">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`block w-full text-left px-4 py-2 rounded-md transition font-medium 
              ${activeCategory === category ? 'bg-[#0E7A81] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </aside>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition"
          >
            <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded-t-lg" />
            <div className="p-4 text-left">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-600 mb-2">Price: ${product.price}</p>
              <div className="flex gap-2">
                <button className="bg-[#0E7A81] text-white px-3 py-1 rounded hover:bg-[#095f64]">
                  Add to Cart
                </button>
                <button className="border border-[#0E7A81] text-[#0E7A81] px-3 py-1 rounded hover:bg-[#0E7A811a]">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Shop;
