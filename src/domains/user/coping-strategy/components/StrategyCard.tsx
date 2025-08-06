import { PlayCircle, Clock, CheckCircle } from 'lucide-react';
import type { CopingStrategyData } from '../model/copingStrategy.types';
import { useNavigate } from 'react-router-dom';

interface StrategyCardProps {
  strategy: CopingStrategyData;
}

const StrategyCard = ({ strategy }: StrategyCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/therapy/strategies/${strategy.id}`);
  };

  return (
    <div
      className={`group bg-white/80 backdrop-blur-sm shadow-xl border rounded-3xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden ${strategy.isCompleted
        ? 'border-green-200 bg-green-50/50'
        : 'border-white/20'
        }`}
      onClick={handleClick}
    >
      {/* Completion badge */}
      {strategy.isCompleted && (
        <div className="absolute top-2 right-4 z-10">
          <div className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
          </div>
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${strategy.isCompleted
            ? 'bg-green-100 text-green-600'
            : 'bg-indigo-100 text-indigo-600'
            }`}>
            {strategy.isCompleted ? (
              <CheckCircle className="w-6 h-6" />
            ) : (
              <PlayCircle className="w-6 h-6" />
            )}
          </div>
          <div>
            <h3 className={`font-bold text-lg leading-tight ${strategy.isCompleted ? 'text-gray-700' : 'text-gray-900'
              }`}>
              {strategy.title}
            </h3>
            <p className="text-indigo-600 text-sm font-medium">Adım {strategy.stepNumber}</p>
          </div>
        </div>
      </div>

      <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${strategy.isCompleted ? 'text-gray-600' : 'text-gray-600'
        }`}>
        {strategy.content}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Clock className="w-4 h-4" />
          {strategy.durationInMinutes} dk
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${strategy.isCompleted
          ? 'bg-green-100 text-green-700'
          : 'bg-blue-100 text-blue-700'
          }`}>
          {strategy.isCompleted ? 'Tamamlandı' : 'Başla'}
        </div>
      </div>

      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${strategy.isCompleted
        ? 'bg-gradient-to-r from-green-600/10 to-emerald-600/10'
        : 'bg-gradient-to-r from-indigo-600/10 to-purple-600/10'
        }`} />
    </div>
  );
};

export default StrategyCard;
