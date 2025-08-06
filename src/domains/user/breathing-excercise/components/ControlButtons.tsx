import { motion } from 'framer-motion';

interface ControlButtonsProps {
  isRunning: boolean;
  isPaused: boolean;
  isCompleted: boolean;
  isLoading: boolean;
  onStart: () => void;
  onPause: () => void;
  onResume: () => void;
  onReset: () => void;
}

const ControlButtons = ({
  isRunning,
  isCompleted,
  isLoading,
  onStart,
  onReset,
}: ControlButtonsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-2">
      {!isRunning && !isCompleted && (
        <motion.button
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          disabled={isLoading}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 md:px-6 py-2 md:py-3 
          rounded-lg text-xs md:text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all 
          duration-300 shadow hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          aria-label="Egzersizi başlat"
        >
          {isLoading ? '⏳' : '▶'} {isLoading ? 'Başlatılıyor...' : 'Başlat'}
        </motion.button>
      )}
      {(isRunning || isCompleted) && (
        <motion.button
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
          onClick={onReset}
          className="bg-white/90 text-gray-700 px-4 md:px-6 py-2 md:py-3 rounded-lg text-xs md:text-sm font-semibold
           hover:bg-white transition-all duration-300 shadow hover:shadow-md backdrop-blur-sm border 
           border-gray-200 cursor-pointer"
          aria-label="Egzersizi sıfırla"
        >
          ⟳ Sıfırla
        </motion.button>
      )}
    </div>
  );
};

export default ControlButtons;
