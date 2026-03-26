import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Círculo de luz de fondo para dar profundidad */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -top-20 -left-20"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] bottom-0 right-0"></div>

      <div className="relative z-10 text-center px-4">
        <span className="text-blue-400 font-mono tracking-widest text-xs uppercase mb-4 block">New Collection 2026</span>
        <h2 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter mb-6">
          ESTILO SIN <br /> <span className="text-transparent stroke-white border-white" style={{WebkitTextStroke: '1px white'}}>LÍMITES.</span>
        </h2>
        <p className="text-zinc-400 max-w-md mx-auto mb-8 text-sm md:text-base">
          Vapes, Streetwear y Accesorios. La mejor calidad para tu outfit diario.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-8 py-3 font-bold hover:bg-zinc-200 transition">
            VER CATÁLOGO
          </button>
          <button className="border border-white/20 text-white px-8 py-3 font-bold backdrop-blur-md hover:bg-white/10 transition">
            MÁS VENDIDOS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

