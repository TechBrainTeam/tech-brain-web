import type React from 'react';

import { Brain, Heart, Sparkles, Shield } from 'lucide-react';

type Props = {
  icon: React.FC<{ size?: number; className?: string }>;
  title: string;
  description: string;
};

const AuthIntro: React.FC<Props> = ({ icon: Icon, title, description }) => {
  return (
    <div className="hidden lg:flex flex-1 flex-col justify-center items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-300 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center text-center">
        <div className="w-28 h-28 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 shadow-2xl border border-white/20">
          <Icon size={48} className="text-white" />
        </div>

        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">{title}</h2>
        <p className="text-white/80 text-lg max-w-md leading-relaxed mb-8">{description}</p>

        <div className="flex justify-center gap-8 mt-8">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles size={24} className="text-white" />
            </div>
            <span className="text-white/70 text-sm font-medium">Güvenli</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Brain size={24} className="text-white" />
            </div>
            <span className="text-white/70 text-sm font-medium">Akıllı</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Heart size={24} className="text-white" />
            </div>
            <span className="text-white/70 text-sm font-medium">Desteği</span>
          </div>
        </div>
      </div>

      {/* Floating particles - daha dengeli konumlar */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sol üst köşe */}
        <div className="absolute top-16 left-16 w-2 h-2 bg-white/40 rounded-full animate-float"></div>
        <div className="absolute top-24 left-32 w-1 h-1 bg-white/30 rounded-full animate-float delay-1000"></div>

        {/* Sağ üst köşe */}
        <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-white/35 rounded-full animate-float delay-500"></div>
        <div className="absolute top-32 right-16 w-1 h-1 bg-white/25 rounded-full animate-float delay-1500"></div>

        {/* Sol alt köşe */}
        <div className="absolute bottom-24 left-24 w-1 h-1 bg-white/30 rounded-full animate-float delay-700"></div>
        <div className="absolute bottom-16 left-40 w-2 h-2 bg-white/40 rounded-full animate-float delay-1200"></div>

        {/* Sağ alt köşe */}
        <div className="absolute bottom-20 right-32 w-1.5 h-1.5 bg-white/35 rounded-full animate-float delay-300"></div>
        <div className="absolute bottom-32 right-24 w-1 h-1 bg-white/25 rounded-full animate-float delay-900"></div>

        {/* Orta alan */}
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white/20 rounded-full animate-float delay-600"></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-white/30 rounded-full animate-float delay-1100"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white/25 rounded-full animate-float delay-800"></div>

        {/* Merkez çevresi */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/50 rounded-full animate-float delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white/20 rounded-full animate-float delay-1300"></div>
      </div>
    </div>
  );
};

export default AuthIntro;
