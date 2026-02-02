
import React from 'react';

const servicesData = [
  {
    title: "Визуализация процессов",
    description: "Превращаем ваши сложные схемы в интерактивные и понятные диаграммы прямо на сайте.",
    icon: (
      <svg className="w-12 h-12 text-[#00f3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    )
  },
  {
    title: "Минималистичный дизайн",
    description: "Убираем лишнее, оставляем суть. Дизайн, который говорит о вашей экспертизе без лишних слов.",
    icon: (
      <svg className="w-12 h-12 text-[#00f3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  },
  {
    title: "Техническая реализация",
    description: "Чистый код, быстрая загрузка и полная адаптивность. Ваш сайт будет летать на любом устройстве.",
    icon: (
      <svg className="w-12 h-12 text-[#00f3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#0d0d0d]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Создаём цифровую ясность</h2>
          <div className="w-24 h-1 bg-[#00f3ff] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-10 bg-[#1a1a1a] border border-[#f5f1e6]/5 rounded-3xl hover:border-[#00f3ff]/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="mb-8 transform transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00f3ff] transition-colors">{service.title}</h3>
              <p className="text-[#f5f1e6]/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
