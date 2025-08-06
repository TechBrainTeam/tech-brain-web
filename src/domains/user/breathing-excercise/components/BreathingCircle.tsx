import { motion } from 'framer-motion';
import { STEP_COLORS, STEP_ICONS, STEP_LABELS } from './constants';

interface BreathingCircleProps {
  currentStep: any;
  isRunning: boolean;
  isPaused: boolean;
  isCompleted: boolean;
  currentStepIndex: number;
  resetKey: number;
  onStart: () => void;
}

const BreathingCircle = ({
  currentStep,
  isRunning,
  isPaused,
  isCompleted,
  currentStepIndex,
  resetKey,
  onStart,
}: BreathingCircleProps) => {
  const getAnimationScale = () => {
    if (!currentStep || !isRunning) return 1;

    try {
      switch (currentStep.stepType) {
        case 'INHALE':
          return 1.2;
        case 'EXHALE':
          return 0.8;
        default:
          return 1.05;
      }
    } catch (err) {
      console.error('Error calculating animation scale:', err);
      return 1;
    }
  };

  const getInitialScale = () => {
    if (!currentStep || !isRunning) return 1;

    try {
      switch (currentStep.stepType) {
        case 'INHALE':
          return 1;
        case 'EXHALE':
          return 1.2;
        default:
          return 1.05;
      }
    } catch (err) {
      console.error('Error calculating initial scale:', err);
      return 1;
    }
  };

  const getStepColor = () => {
    if (!currentStep) return 'from-gray-300 to-gray-400';
    return STEP_COLORS[currentStep.stepType] || 'from-gray-300 to-gray-400';
  };

  const getStepIcon = () => {
    if (!currentStep) return '🧘‍♀️';
    return STEP_ICONS[currentStep.stepType] || '🧘‍♀️';
  };

  return (
    <div className="flex justify-center mb-2">
      <div className="relative">
        {isRunning && !isPaused && currentStep && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 
              opacity-20 z-0 overflow-hidden"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.05, 0.2],
              }}
              transition={{
                duration: currentStep.durationSeconds,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 opacity-15 
              z-0 overflow-hidden"
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.15, 0.03, 0.15],
              }}
              transition={{
                duration: currentStep.durationSeconds * 1.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </>
        )}

        <motion.div
          key={`${currentStep?.stepType}-${currentStepIndex}-${resetKey}`}
          initial={{ scale: getInitialScale(), opacity: 0.8, rotate: 0 }}
          animate={{
            scale: getAnimationScale(),
            opacity: 1,
            rotate: isRunning ? [0, 5, -5, 0] : 0,
          }}
          transition={{
            duration: isRunning ? (currentStep?.durationSeconds ?? 2) : 0.5,
            ease: 'easeInOut',
            rotate: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
          className={`w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br ${getStepColor()} flex items-center 
          justify-center text-white shadow-2xl border-4 border-white/30 backdrop-blur-sm relative overflow-hidden 
          cursor-pointer z-10`}
          onClick={!isRunning ? onStart : undefined}
          role="button"
          tabIndex={!isRunning ? 0 : -1}
          aria-label={!isRunning ? 'Egzersizi başlat' : 'Nefes döngüsü'}
          onKeyDown={(e) => {
            if (!isRunning && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              onStart();
            }
          }}
        >
          <div className="absolute inset-3 rounded-full bg-white/10 backdrop-blur-sm" />
          <div className="text-center relative z-10">
            <motion.div
              className="text-2xl md:text-3xl mb-1"
              animate={{ scale: isRunning ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              {isCompleted ? '🎉' : !isRunning ? '🧘‍♀️' : getStepIcon()}
            </motion.div>
            <div className="text-xs md:text-sm font-semibold">
              {isCompleted
                ? 'Tamamlandı!'
                : isRunning
                  ? currentStep
                    ? STEP_LABELS[currentStep.stepType]
                    : 'Hazır'
                  : 'Başlatmak için tıklayın'}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BreathingCircle;
