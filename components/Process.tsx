
import React from 'react';

const steps = [
  {
    title: "Обсуждение",
    desc: "Погружаемся в специфику вашего бизнеса и выявляем ключевые узлы сложности."
  },
  {
    title: "Прототип",
    desc: "Создаем архитектуру смыслов и визуальные черновики будущих схем."
  },
  {
    title: "Визуальный дизайн",
    desc: "Отрисовываем премиальный интерфейс, где дизайн работает на понимание."
  },
  {
    title: "Разработка",
    desc: "Пишем чистый код и внедряем анимации, которые оживляют процессы."
  },
  {
    title: "Запуск",
    desc: "Тестируем, оптимизируем и передаем вам готовый инструмент роста."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-[#0d0d0d]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-black mb-4">От идеи до ясного результата</h2>
          <p className="text-[#f5f1e6]/60">Наш процесс прозрачен и логичен на каждом этапе.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f3ff] to-transparent hidden md:block"></div>

          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`relative mb-16 md:mb-24 flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
            >
              {/* Dot */}
              <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-[#0d0d0d] bg-[#00f3ff] z-10 hidden md:block"></div>
              
              <div className="w-full md:w-5/12 ml-10 md:ml-0">
                <div className={`p-8 bg-[#1a1a1a] rounded-3xl border border-[#f5f1e6]/5 hover:border-[#00f3ff]/30 transition-all ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-4xl font-black text-[#00f3ff]/20 block mb-2">{idx + 1}</span>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-[#f5f1e6]/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
              <div className="hidden md:block w-2/12"></div>
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
