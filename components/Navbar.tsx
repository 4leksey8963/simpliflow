
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-[#f5f1e6]">
          SimpliFlow<span className="text-[#00f3ff]">.</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium hover:text-[#00f3ff] transition-colors">Услуги</a>
          <a href="#process" className="text-sm font-medium hover:text-[#00f3ff] transition-colors">Процесс</a>
          <a href="#contact" className="px-6 py-2 border border-[#00f3ff] text-[#00f3ff] rounded-full text-sm font-bold hover:bg-[#00f3ff] hover:text-[#0a0a0a] transition-all duration-300">
            Обсудить проект
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
