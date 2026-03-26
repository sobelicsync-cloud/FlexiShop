import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { STORE_CONFIG } from '../../config';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // Formatear el precio con la moneda configurada
  const formatPrice = (price) => {
    return `${STORE_CONFIG.currency}${price.toLocaleString('es-CO')}`;
  };

  return (
    <div className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden group shadow-lg transition-all hover:shadow-2xl hover:border-blue-500/30">
      {/* Contenedor de Imagen con Efecto Hover */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {product.discount > 0 && (
          <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
            {product.discount}% OFF
          </span>
        )}
      </div>

      {/* Información del Producto */}
      <div className="p-5">
        <span className="text-zinc-500 text-xs uppercase tracking-widest font-mono mb-1.5 block">
          {product.category}
        </span>
        <h3 className="text-white text-xl font-bold tracking-tight mb-2 truncate">
          {product.name}
        </h3>
        <p className="text-zinc-400 text-sm mb-4 line-clamp-2 h-10">
          {product.description}
        </p>

        {/* Sección de Tallas y Precio */}
        <div className="flex items-end justify-between gap-4 mb-5">
          <div className="flex-1">
            <span className="text-zinc-600 text-xs font-semibold mb-1.5 block">Tallas:</span>
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              {product.sizes.map((size) => (
                <span 
                  key={size} 
                  className="bg-zinc-800 border border-white/10 text-zinc-300 text-[11px] font-bold px-3 py-1.5 min-w-[36px] text-center rounded-lg"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
          <p className="text-white text-3xl font-black tracking-tighter whitespace-nowrap">
            {formatPrice(product.price)}
          </p>
        </div>

        {/* Botón de Acción */}
        <button 
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2 group-hover:scale-[1.02]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 100-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

