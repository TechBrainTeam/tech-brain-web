import { motion } from 'framer-motion';

interface ProgressIndicatorProps {
  currentStep: any;
  stepElapsedSeconds: number;
  getProgressPercentage: () => number;
}

const ProgressIndicator = ({
  currentStep,
  stepElapsedSeconds,
  getProgressPercentage,
}: ProgressIndicatorProps) => {
  return (
    <div className="w-full max-w-md mb-2">
      <div className="bg-gradient-to-r from-white/90 to-blue-50/80 backdrop-blur-sm p-3 rounded-xl shadow border border-white/60">
        <div className="text-center mb-1">
          <h3 className="text-xs font-semibold text-gray-700 mb-0">Adım İlerlemesi</h3>
          <div className="text-xs text-gray-500">Mevcut adımın tamamlanma durumu</div>
        </div>
        <div className="relative mb-1">
          <div className="w-full bg-white/60 rounded-full h-3 backdrop-blur-sm overflow-hidden border border-white/40">
            <motion.div
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full relative"
              style={{ width: `${getProgressPercentage()}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${getProgressPercentage()}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-gray-700">{stepElapsedSeconds}s</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium text-gray-700">
              {currentStep?.durationSeconds}s
            </span>
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
