
import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] z-[100] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="text-4xl md:text-6xl font-black tracking-tighter text-[#f5f1e6] relative mb-4">
          ClarityFlow<span className="text-[#00f3ff] animate-pulse">.</span>
        </div>
        <div className="w-48 h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
          <div className="h-full bg-[#00f3ff] w-1/2 animate-[loading_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
