import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { products } from './data/products';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartModal from './components/CartModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filter, setFilter] = useState('Todos');

  // Filtrado de productos por categoría
  const filteredProducts = filter === 'Todos' 
    ? products 
    : products.filter(p => p.category === filter);

  const categories = ['Todos', ...new Set(products.map(p => p.category))];

  return (
    <CartProvider>
      <div className="min-h-screen bg-zinc-950 text-white selection:bg-blue-500/30">
        
        {/* Navegación y Modales */}
        <Navbar onOpenCart={() => setIsOpen(true)} />
        <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <WhatsAppFloat />

        {/* Sección Principal */}
        <main>
          <Hero />

          {/* Sección de Catálogo */}
          <section className="max-w-7xl mx-auto px-6 py-24" id="catalog">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-4xl font-black italic tracking-tighter mb-2">CATÁLOGO</h2>
                <p className="text-zinc-500 text-sm">Explora nuestra selección exclusiva de Flexishop.</p>
              </div>

              {/* Filtros Estilo "Capsule" */}
              <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2 rounded-full text-xs font-bold transition-all border ${
                      filter === cat 
                      ? 'bg-white text-black border-white' 
                      : 'bg-transparent text-zinc-500 border-white/10 hover:border-white/30'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid de Productos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;

