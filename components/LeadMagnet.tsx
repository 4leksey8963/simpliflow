
import React, { useState } from 'react';

const LeadMagnet: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setIsSubmitted(true);
      // In real scenario, API call would be here
    }
  };

  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-black mb-6 leading-tight">
            Бесплатный гайд: <span className="text-[#00f3ff]">5 принципов</span> визуализации сложных идей
          </h2>
          <p className="text-[#f5f1e6]/70 mb-8 text-lg">
            Узнайте, как превратить хаос ваших бизнес-процессов в структурированный и продающий контент, который поймет любой клиент.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <input 
                type="text" 
                placeholder="Ваше имя"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#f5f1e6]/10 px-6 py-4 rounded-xl focus:border-[#00f3ff] outline-none transition-all"
              />
              <input 
                type="email" 
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#f5f1e6]/10 px-6 py-4 rounded-xl focus:border-[#00f3ff] outline-none transition-all"
              />
              <button className="w-full py-4 bg-[#f5f1e6] text-[#0a0a0a] font-black rounded-xl hover:bg-[#00f3ff] transition-all duration-300">
                СКАЧАТЬ ГАЙД
              </button>
            </form>
          ) : (
            <div className="p-8 bg-[#1a1a1a] border border-[#00f3ff] rounded-2xl animate-pulse">
              <h4 className="text-xl font-bold text-[#00f3ff] mb-2">Спасибо, {name}!</h4>
              <p className="text-[#f5f1e6]/70">Ссылка для скачивания гайда уже отправлена на {email}.</p>
            </div>
          )}
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            {/* Styled Book/Guide representation */}
            <div className="w-64 h-80 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#00f3ff]/30 rounded-r-2xl shadow-2xl relative overflow-hidden flex flex-col items-center justify-center p-8 group-hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#00f3ff]/50"></div>
              <div className="text-[#00f3ff] mb-4">
                 <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-center text-sm font-black tracking-widest text-[#f5f1e6]/40 uppercase mb-2">Guide Book</p>
              <h5 className="text-center font-bold text-lg leading-tight">Цифровая Ясность</h5>
            </div>
            {/* Glow backing */}
            <div className="absolute -inset-4 bg-[#00f3ff]/10 blur-2xl rounded-full z-[-1] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
