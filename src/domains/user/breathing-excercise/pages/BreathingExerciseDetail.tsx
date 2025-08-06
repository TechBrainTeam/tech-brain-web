import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import type { BreathingExercise } from '../model/breathingExercise.types';
import { useBreathingExercise } from '../hooks/useBreathingExercise';
import {
  ExerciseHeader,
  ProgressIndicator,
  BreathingCircle,
  ControlButtons,
  StepIndicator,
  ExerciseModals,
  ErrorState,
  LoadingState,
  NoExerciseState,
  containerVariants,
} from '../components';

const BreathingExerciseDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const exercise: BreathingExercise | undefined = state?.exercise;

  const {
    currentStepIndex,
    isRunning,
    isPaused,
    stepElapsedSeconds,
    resetKey,
    showCompletion,
    error,
    isLoading,
    showInstructions,
    steps,
    currentStep,
    isCompleted,
    currentLoop,
    overallProgress,

    handleStart,
    handlePause,
    handleResume,
    handleReset,
    getProgressPercentage,
    toggleInstructions,
    closeInstructions,
    closeCompletion,
  } = useBreathingExercise({ exercise });

  const [showBenefitsModal, setShowBenefitsModal] = useState(false);

  useEffect(() => {
    if (!exercise) {
      setTimeout(() => {
        navigate('/user/breath', { replace: true });
      }, 2000);
    }
  }, [exercise, navigate]);

  if (error) {
    return <ErrorState error={error} />;
  }

  if (isLoading) {
    return <LoadingState />;
  }

  if (!exercise) {
    return <NoExerciseState />;
  }

  return (
    <div className="min-h-screen h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
      <ExerciseHeader
        exercise={exercise}
        overallProgress={overallProgress}
        currentLoop={currentLoop}
        onToggleInstructions={toggleInstructions}
        onShowBenefits={() => setShowBenefitsModal(true)}
      />

      <ExerciseModals
        showInstructions={showInstructions}
        showCompletion={showCompletion}
        showBenefits={showBenefitsModal}
        benefits={exercise.benefits}
        onCloseInstructions={closeInstructions}
        onCloseCompletion={closeCompletion}
        onCloseBenefits={() => setShowBenefitsModal(false)}
        onRestart={handleStart}
      />

      <motion.div
        className="flex-1 flex flex-col items-center px-2 md:px-4 max-w-3xl mx-auto w-full justify-center min-h-[420px] md:min-h-[520px] gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-6 mt-4">
          <h1 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{exercise.title}</h1>
          <p className="text-xs md:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
            {exercise.description}
          </p>
        </div>

        <ProgressIndicator
          currentStep={currentStep}
          stepElapsedSeconds={stepElapsedSeconds}
          getProgressPercentage={getProgressPercentage}
        />

        <BreathingCircle
          currentStep={currentStep}
          isRunning={isRunning}
          isPaused={isPaused}
          isCompleted={isCompleted}
          currentStepIndex={currentStepIndex}
          resetKey={resetKey}
          onStart={handleStart}
        />

        <ControlButtons
          isRunning={isRunning}
          isPaused={isPaused}
          isCompleted={isCompleted}
          isLoading={isLoading}
          onStart={handleStart}
          onPause={handlePause}
          onResume={handleResume}
          onReset={handleReset}
        />

        <StepIndicator
          currentStep={currentStep}
          currentStepIndex={currentStepIndex}
          steps={steps}
          isRunning={isRunning}
          isCompleted={isCompleted}
        />
      </motion.div>
    </div>
  );
};

export default BreathingExerciseDetail;
