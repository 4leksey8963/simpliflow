
import React, { useState, useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-[#00f3ff]/20 rounded-xl floating-shape"
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px) rotate(15deg)` }}
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/4 w-48 h-48 border-2 border-[#f5f1e6]/10 rounded-full floating-shape"
          style={{ transform: `translate(${-mousePos.x * 1.5}px, ${-mousePos.y * 1.5}px)` }}
          active-animation-delay="1s"
        ></div>
        <div 
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-[#00f3ff]/5 blur-xl rounded-full"
          style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
        ></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
          Превращаем сложное <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] to-[#f5f1e6]">
            в очевидное
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-[#f5f1e6]/70 max-w-3xl mx-auto mb-12">
          Создаём сайты, которые наглядно объясняют ваши бизнес-процессы и привлекают клиентов за счет визуальной ясности.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#contact" className="px-10 py-5 bg-[#00f3ff] text-[#0a0a0a] rounded-full text-lg font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 cyan-glow">
            Обсудить проект
          </a>
          <a href="#services" className="px-10 py-5 border border-[#f5f1e6]/20 rounded-full text-lg font-bold hover:border-[#00f3ff] hover:text-[#00f3ff] transition-all duration-300">
            Наши услуги
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
