import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const categories = ['Todos', ...new Set(products.map(p => p.category))];

  const filtered = activeCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto animate-in">
      <header className="mb-12">
        <h1 className="text-5xl font-black italic text-white mb-6">COLECCIONES</h1>
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                : 'bg-zinc-900 text-zinc-500 border border-white/5 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;

