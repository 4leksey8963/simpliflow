
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    project: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    // Real logic would go here
  };

  return (
    <section id="contact" className="py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Готовы сделать ваши процессы понятными?</h2>
          <p className="text-xl text-[#f5f1e6]/60">Оставьте заявку, и мы свяжемся для бесплатной консультации в течение 24 часов.</p>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#1a1a1a] p-8 md:p-12 rounded-[40px] border border-[#f5f1e6]/5">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#f5f1e6]/40 ml-1">Ваше имя</label>
              <input 
                required
                className="w-full bg-[#0a0a0a] border border-[#f5f1e6]/10 px-6 py-4 rounded-2xl focus:border-[#00f3ff] outline-none"
                placeholder="Иван Иванов"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#f5f1e6]/40 ml-1">Email</label>
              <input 
                required
                type="email"
                className="w-full bg-[#0a0a0a] border border-[#f5f1e6]/10 px-6 py-4 rounded-2xl focus:border-[#00f3ff] outline-none"
                placeholder="hello@example.com"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-[#f5f1e6]/40 ml-1">Кратко о проекте (опционально)</label>
              <textarea 
                rows={4}
                className="w-full bg-[#0a0a0a] border border-[#f5f1e6]/10 px-6 py-4 rounded-2xl focus:border-[#00f3ff] outline-none resize-none"
                placeholder="Расскажите о вашей задаче..."
                value={formData.project}
                onChange={e => setFormData({...formData, project: e.target.value})}
              ></textarea>
            </div>
            <div className="md:col-span-2 pt-4">
              <button className="w-full py-5 bg-[#00f3ff] text-[#0a0a0a] font-black uppercase tracking-widest rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cyan-glow">
                Отправить заявку
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-[#1a1a1a] p-16 rounded-[40px] text-center border-2 border-[#00f3ff]">
            <div className="w-20 h-20 bg-[#00f3ff] text-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-black mb-4">Заявка принята!</h3>
            <p className="text-[#f5f1e6]/60">Мы уже анализируем ваши данные и свяжемся с вами в ближайшее время.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
