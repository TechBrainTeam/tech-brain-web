import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, HelpCircle, Info } from 'lucide-react';

interface ExerciseHeaderProps {
  exercise: any;
  overallProgress: number;
  currentLoop: number;
  onToggleInstructions: () => void;
  onShowBenefits: () => void;
}

const ExerciseHeader = ({
  exercise,
  overallProgress,
  currentLoop,
  onToggleInstructions,
  onShowBenefits,
}: ExerciseHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between p-4 md:p-6 bg-white/80 backdrop-blur-sm border-b border-white/20">
      <button
        onClick={() => navigate('/user/breath')}
        className="text-blue-600 text-sm hover:text-blue-800 transition-colors flex items-center gap-2 bg-white/70 px-3 py-2 rounded-lg hover:bg-white/90 cursor-pointer"
        aria-label="Geri dön"
      >
        <ArrowLeft size={18} />
        <span className="hidden sm:inline">Geri</span>
      </button>

      <div className="flex items-center gap-4">
        <button
          onClick={onToggleInstructions}
          className="bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-200 transition-colors cursor-pointer"
          aria-label="Talimatları göster/gizle"
        >
          <HelpCircle size={20} />
        </button>

        {onShowBenefits && (
          <button
            onClick={onShowBenefits}
            className="bg-green-100 text-green-600 p-2 rounded-lg hover:bg-green-200 transition-colors cursor-pointer"
            aria-label="Faydaları göster"
          >
            <Info size={20} />
          </button>
        )}

        <div className="hidden sm:flex items-center gap-2">
          <div className="w-20 h-2 bg-white/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: `${overallProgress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <span className="text-xs text-gray-600 font-medium">{Math.round(overallProgress)}%</span>
        </div>

        <div className="text-sm text-gray-600 bg-white/70 px-3 py-1 rounded-full font-medium">
          Döngü {currentLoop}/{exercise.loopCount}
        </div>
      </div>
    </div>
  );
};

export default ExerciseHeader;
