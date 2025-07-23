// components/CategoryNav.jsx
import React from 'react';

const CategoryNav = ({ categories, onSelect }) => {
  return (
    <nav className="flex flex-wrap justify-center gap-3 mt-6">
      {categories.map((cat) => (
        <button
          key={cat.category}
          onClick={() => onSelect(cat.category)}
          className="btn bg-white hover:bg-gray-200 flex items-center gap-2 px-4 py-2 shadow-md"
        >
          <img src={cat.category_icon} alt={cat.category} className="h-6 w-6" />
          <span className="font-bold">{cat.category}</span>
        </button>
      ))}
    </nav>
  );
};

export default CategoryNav;
