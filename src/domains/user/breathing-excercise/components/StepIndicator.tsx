import { motion, AnimatePresence } from 'framer-motion';
import { STEP_COLORS, STEP_ICONS, STEP_LABELS } from './constants';

interface StepIndicatorProps {
  currentStep: any;
  currentStepIndex: number;
  steps: any[];
  isRunning: boolean;
  isCompleted: boolean;
}

const StepIndicator = ({
  currentStep,
  currentStepIndex,
  steps,
  isRunning,
  isCompleted,
}: StepIndicatorProps) => {
  const getStepColor = () => {
    if (!currentStep) return 'from-gray-300 to-gray-400';
    return STEP_COLORS[currentStep.stepType] || 'from-gray-300 to-gray-400';
  };

  const getStepIcon = () => {
    if (!currentStep) return '🧘‍♀️';
    return STEP_ICONS[currentStep.stepType] || '🧘‍♀️';
  };

  return (
    <AnimatePresence mode="wait">
      {!isCompleted && currentStep && (
        <div
          key={`step-${currentStepIndex}`}
          className="bg-gradient-to-r from-white/95 to-blue-50/80 backdrop-blur-sm p-5 md:p-6 rounded-2xl 
          mb-6 md:mb-8 shadow-xl w-full max-w-lg border border-white/60"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <motion.div
                className={`w-5 h-5 rounded-full bg-gradient-to-r ${getStepColor()} shadow-lg`}
                animate={{
                  scale: isRunning ? [1, 1.08, 1] : 1,
                  boxShadow: isRunning
                    ? [
                        '0 0 0 0 rgba(59, 130, 246, 0.3)',
                        '0 0 0 6px rgba(59, 130, 246, 0)',
                        '0 0 0 0 rgba(59, 130, 246, 0)',
                      ]
                    : '0 0 0 0 rgba(59, 130, 246, 0)',
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
              <div>
                <span className="text-lg md:text-xl font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-2xl">{getStepIcon()}</span>
                  {STEP_LABELS[currentStep.stepType]}
                </span>
                <div className="text-sm text-gray-600 mt-1 font-medium">
                  {currentStep.durationSeconds} saniye
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                {currentStepIndex + 1} / {steps.length}
              </div>
              <div className="text-xs text-gray-500 mt-1 font-medium">Adım</div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default StepIndicator;
