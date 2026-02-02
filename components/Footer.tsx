
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-[#0a0a0a] border-t border-[#f5f1e6]/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
          <div>
            <div className="text-3xl font-black tracking-tighter text-[#f5f1e6] mb-4">
              SimpliFlow<span className="text-[#00f3ff]">.</span>
            </div>
            <p className="text-[#f5f1e6]/40 max-w-xs leading-relaxed">
              Создаем цифровую ясность для сложных бизнесов. Превращаем хаос в структуру.
            </p>
          </div>

          <div className="flex flex-col md:items-end space-y-4">
            <h5 className="font-bold text-[#f5f1e6]/80 text-lg">Контакты</h5>
            <a href="mailto:hello@simpliflow.studio" className="text-[#f5f1e6]/60 hover:text-[#00f3ff] transition-colors">hello@simpliflow.studio</a>
            <a href="https://t.me/simpliflow" className="px-6 py-2 bg-[#1a1a1a] rounded-full text-sm font-bold hover:bg-[#00f3ff] hover:text-[#0a0a0a] transition-all flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0C5.348 0 0 5.348 0 11.944c0 6.595 5.348 11.944 11.944 11.944 6.596 0 11.944-5.349 11.944-11.944C23.888 5.348 18.54 0 11.944 0zm5.727 8.019l-1.928 9.098c-.145.642-.524.8-.1.411l-2.936-2.163-1.417 1.363c-.157.157-.289.289-.59.289l.211-2.992 5.446-4.919c.237-.211-.052-.328-.368-.118l-6.73 4.237-2.9-.906c-.63-.197-.643-.63.131-.933l11.336-4.368c.525-.197.985.118.841.901z"/></svg>
              Telegram
            </a>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-[#f5f1e6]/5 flex flex-col md:flex-row justify-between items-center text-xs text-[#f5f1e6]/20 font-bold tracking-widest uppercase">
          <p>© {new Date().getFullYear()} SimpliFlow Studio. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#00f3ff]">Privacy Policy</a>
            <a href="#" className="hover:text-[#00f3ff]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
