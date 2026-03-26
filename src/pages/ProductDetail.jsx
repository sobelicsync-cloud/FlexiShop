import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { STORE_CONFIG } from '../../config';
import { ArrowLeft, ShoppingCart, ShieldCheck } from 'lucide-react';

const ProductDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState(product?.sizes);

  if (!product) return <div className="pt-32 text-center">Producto no encontrado</div>;

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto animate-in">
      <button onClick={() => window.history.back()} className="flex items-center gap-2 text-zinc-500 hover:text-white mb-8 transition">
        <ArrowLeft size={20} /> Volver
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Galería de Imagen */}
        <div className="relative group overflow-hidden rounded-3xl bg-zinc-900 border border-white/5">
          <img src={product.image} className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105" alt={product.name} />
        </div>

        {/* Info del Producto */}
        <div className="flex flex-col">
          <span className="text-blue-500 font-mono text-sm mb-2 uppercase tracking-widest">{product.category}</span>
          <h1 className="text-4xl md:text-5xl font-black text-white italic mb-4 leading-tight">{product.name}</h1>
          <p className="text-3xl font-bold text-white mb-6 font-mono">
            {STORE_CONFIG.currency}{product.price.toLocaleString()}
          </p>
          
          <p className="text-zinc-400 mb-8 leading-relaxed">{product.description}</p>

          {/* Selector de Tallas */}
          <div className="mb-8">
            <h4 className="text-white text-sm font-bold mb-4 uppercase tracking-tighter">Selecciona Talla / Variante:</h4>
            <div className="flex gap-3">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold transition-all border ${
                    selectedSize === size 
                    ? 'bg-white text-black border-white' 
                    : 'bg-transparent text-zinc-500 border-white/10 hover:border-white/20'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => addToCart({...product, selectedSize})}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition flex items-center justify-center gap-3 shadow-xl shadow-blue-900/20"
          >
            <ShoppingCart size={22} /> AÑADIR AL PEDIDO
          </button>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-zinc-900/50 p-4 rounded-2xl flex items-center gap-3 border border-white/5 text-[11px] text-zinc-500">
              <ShieldCheck className="text-green-500" /> CALIDAD GARANTIZADA
            </div>
            <div className="bg-zinc-900/50 p-4 rounded-2xl flex items-center gap-3 border border-white/5 text-[11px] text-zinc-500">
              📦 ENVÍOS SEGUROS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

