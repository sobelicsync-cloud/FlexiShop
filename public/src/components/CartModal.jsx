import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { STORE_CONFIG } from '../../config';
import { X, Trash2, ShoppingBag } from 'lucide-react';

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const total = subtotal + (cart.length > 0 ? STORE_CONFIG.shippingCost : 0);

  const handleCheckout = () => {
    const productList = cart.map(item => `- ${item.name} (${STORE_CONFIG.currency}${item.price.toLocaleString()})`).join('%0A');
    const message = `Hola ${STORE_CONFIG.name}! Quisiera realizar el siguiente pedido:%0A%0A${productList}%0A%0A*Total + Envío: ${STORE_CONFIG.currency}${total.toLocaleString()}*%0A%0A¿Podrían confirmarme disponibilidad?`;
    
    window.open(`https://wa.me/${STORE_CONFIG.whatsapp}?text=${message}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z- flex justify-end">
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Contenedor del Carrito */}
      <div className="relative w-full max-w-md bg-zinc-950 h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Cabecera */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-blue-500" />
            <h2 className="text-xl font-bold text-white tracking-tight">Tu Carrito</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition text-zinc-400">
            <X size={24} />
          </button>
        </div>

        {/* Lista de Productos */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center">
                <ShoppingBag className="text-zinc-700" size={32} />
              </div>
              <p className="text-zinc-500 font-medium">Tu carrito está vacío</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="flex gap-4 bg-zinc-900/50 p-3 rounded-xl border border-white/5">
                <img src={item.image} className="w-20 h-20 object-cover rounded-lg" alt={item.name} />
                <div className="flex-1">
                  <h4 className="text-white font-bold text-sm">{item.name}</h4>
                  <p className="text-blue-400 font-mono text-sm">{STORE_CONFIG.currency}{item.price.toLocaleString()}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-zinc-600 hover:text-red-500 transition self-center"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Resumen y Checkout */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-zinc-900/30 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-zinc-400 text-sm">
                <span>Subtotal</span>
                <span>{STORE_CONFIG.currency}{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-zinc-400 text-sm">
                <span>Envío estimado</span>
                <span>{STORE_CONFIG.currency}{STORE_CONFIG.shippingCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-white font-bold text-lg pt-2 border-t border-white/5">
                <span>Total</span>
                <span className="text-blue-500">{STORE_CONFIG.currency}{total.toLocaleString()}</span>
              </div>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-3"
            >
              Completar Pedido por WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;

