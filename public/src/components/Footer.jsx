import React from 'react';
import { STORE_CONFIG } from '../../config';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Columna 1: Branding */}
        <div className="space-y-4">
          <h2 className="text-white text-2xl font-black italic tracking-tighter">FLEXISHOP</h2>
          <p className="text-sm leading-relaxed">
            Tu destino premium para Vapes, Streetwear y accesorios con el mejor estilo urbano.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
          </div>
        </div>

        {/* Columna 2: Categorías Rápidas */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Productos</h3>
          <ul className="space-y-3 text-sm">
            {STORE_CONFIG.categories.slice(0, 5).map(cat => (
              <li key={cat}><a href="/catalog" className="hover:text-blue-400 transition">{cat}</a></li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Información Legal */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Soporte</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition">Términos de Uso</a></li>
            <li><a href="#" className="hover:text-white transition">Políticas de Privacidad</a></li>
            <li><a href="#" className="hover:text-white transition">Devoluciones</a></li>
            <li><a href="#" className="hover:text-white transition">Preguntas Frecuentes</a></li>
          </ul>
        </div>

        {/* Columna 4: Contacto Oficial */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contacto</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-500 shrink-0" />
              <span>{STORE_CONFIG.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500 shrink-0" />
              <span>{STORE_CONFIG.whatsapp}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500 shrink-0" />
              <span>{STORE_CONFIG.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em]">
        <p>© {currentYear} {STORE_CONFIG.name} - Todos los derechos reservados.</p>
        <p className="text-zinc-600">Desarrollado con ❤️ para el mundo Tech</p>
      </div>
    </footer>
  );
};

export default Footer;

