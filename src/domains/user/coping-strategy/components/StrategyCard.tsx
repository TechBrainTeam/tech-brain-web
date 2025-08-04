import { PlayCircle, Clock } from 'lucide-react';
import type { CopingStrategyData } from '../model/copingStrategy.types';

interface StrategyCardProps {
  strategy: CopingStrategyData;
  onClick?: (strategy: CopingStrategyData) => void;
}

const StrategyCard = ({ strategy, onClick }: StrategyCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(strategy);
    } else {
      console.log('Strategy clicked:', strategy.id);
    }
  };

  return (
    <div
      className="group bg-white/80 backdrop-blur-sm shadow-xl border border-white/20 rounded-3xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden"
      onClick={handleClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
            <PlayCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg leading-tight">
              {strategy.title}
            </h3>
            <p className="text-indigo-600 text-sm font-medium">
              Adım {strategy.stepNumber}
            </p>
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
        {strategy.content}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Clock className="w-4 h-4" />
          {strategy.durationInMinutes} dk
        </div>
        <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
          Başla
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default StrategyCard; 