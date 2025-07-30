import type React from 'react';

import { Brain, Heart, Sparkles } from 'lucide-react';

type Props = {
  icon: React.FC<{ size?: number; className?: string }>;
  title: string;
  description: string;
};

const AuthIntro: React.FC<Props> = ({ icon: Icon, title, description }) => {
  return (
    <div className="hidden lg:flex flex-1 flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-gray-200 p-12">
      <div className="w-26 h-26 bg-black rounded-full flex items-center justify-center mb-8">
        <Icon size={58} className="text-white" />
      </div>
      <h2 className="text-3xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-600 text-center max-w-sm">{description}</p>
      <div className="flex justify-center gap-6 mt-6 opacity-70">
        <Sparkles size={22} className="text-yellow-500" />
        <Brain size={22} className="text-blue-500" />
        <Heart size={22} className="text-red-500" />
      </div>
    </div>
  );
};

export default AuthIntro;
