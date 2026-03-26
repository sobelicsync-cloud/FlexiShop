import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <nav className="fixed w-full z-50 top-0 bg-black/60 backdrop-blur-lg border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tighter italic">FLEXISHOP</h1>
        
        {/* Escritorio */}
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="/" className="hover:text-zinc-400 transition">Inicio</a>
          <a href="/catalog" className="hover:text-zinc-400 transition">Catálogo</a>
          <a href="/contact" className="hover:text-zinc-400 transition">Contacto</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer group">
            <ShoppingCart className="group-hover:scale-110 transition" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cart.length}
              </span>
            )}
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Menú Móvil */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 p-4 flex flex-col space-y-4 animate-in slide-in-from-top">
          <a href="/" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="/catalog" onClick={() => setIsOpen(false)}>Catálogo</a>
          <a href="/contact" onClick={() => setIsOpen(false)}>Contacto</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

