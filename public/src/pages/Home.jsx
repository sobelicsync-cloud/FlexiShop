import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  // Solo mostramos los primeros 4 como "Destacados"
  const featured = products.slice(0, 4);

  return (
    <div className="animate-in">
      <Hero />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black italic tracking-tighter text-white">RECIÉN LLEGADOS</h2>
            <div className="h-1 w-20 bg-blue-600 mt-2"></div>
          </div>
          <a href="/catalog" className="text-zinc-500 hover:text-white text-xs font-bold tracking-widest uppercase transition">Ver todo</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

