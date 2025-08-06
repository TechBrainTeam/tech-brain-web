import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import type { BreathingExercise, Step } from '../model/breathingExercise.types';

interface UseBreathingExerciseProps {
  exercise: BreathingExercise | undefined;
}

export const useBreathingExercise = ({ exercise }: UseBreathingExerciseProps) => {
  const stepTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [stepElapsedSeconds, setStepElapsedSeconds] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const steps: Step[] = useMemo(() => {
    if (!exercise?.steps || !exercise?.loopCount) return [];
    try {
      return Array(exercise.loopCount)
        .fill(null)
        .flatMap(() => exercise.steps);
    } catch (err) {
      console.error('Error creating steps array:', err);
      return [];
    }
  }, [exercise]);

  const currentStep = steps[currentStepIndex];
  const isCompleted = currentStepIndex >= steps.length;

  const currentLoop = useMemo(() => {
    if (!exercise?.steps || currentStepIndex === 0) return 1;
    try {
      const stepsPerLoop = exercise.steps.length;
      return Math.floor(currentStepIndex / stepsPerLoop) + 1;
    } catch (err) {
      console.error('Error calculating current loop:', err);
      return 1;
    }
  }, [currentStepIndex, exercise]);

  const overallProgress = useMemo(() => {
    if (!steps.length) return 0;
    try {
      return Math.min((currentStepIndex / steps.length) * 100, 100);
    } catch (err) {
      console.error('Error calculating progress:', err);
      return 0;
    }
  }, [currentStepIndex, steps.length]);

  const cleanupTimers = useCallback(() => {
    if (stepTimerRef.current) {
      clearTimeout(stepTimerRef.current);
      stepTimerRef.current = null;
    }
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      cleanupTimers();
    };
  }, [cleanupTimers]);

  useEffect(() => {
    if (!isRunning || isPaused || isCompleted || !currentStep) {
      cleanupTimers();
      return;
    }

    const stepDuration = currentStep.durationSeconds;
    if (stepDuration <= 0) {
      console.error('Invalid step duration:', stepDuration);
      return;
    }

    stepTimerRef.current = setTimeout(() => {
      if (!isPaused) {
        setCurrentStepIndex((prev) => {
          const nextIndex = prev + 1;
          if (nextIndex >= steps.length) {
            setIsRunning(false);
            setIsPaused(false);
            setShowCompletion(true);
          }
          return nextIndex;
        });
        setStepElapsedSeconds(0);
        setResetKey((prev) => prev + 1);
      }
    }, stepDuration * 1000);

    return () => {
      if (stepTimerRef.current) {
        clearTimeout(stepTimerRef.current);
        stepTimerRef.current = null;
      }
    };
  }, [
    isRunning,
    isPaused,
    currentStepIndex,
    currentStep,
    isCompleted,
    steps.length,
    cleanupTimers,
  ]);

  useEffect(() => {
    if (!isRunning || isPaused || isCompleted || !currentStep) {
      cleanupTimers();
      return;
    }

    const startTime = Date.now();
    const stepDuration = currentStep.durationSeconds;

    const updateProgress = () => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const stepElapsed = Math.min(elapsed, stepDuration);

      setStepElapsedSeconds(stepElapsed);

      if (stepElapsed < stepDuration && isRunning && !isPaused) {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isRunning, isPaused, currentStep, isCompleted, resetKey, cleanupTimers]);

  const handleStart = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      if (isCompleted) {
        setCurrentStepIndex(0);
        setStepElapsedSeconds(0);
        setResetKey((prev) => prev + 1);
        setShowCompletion(false);
      }

      setIsRunning(true);
      setIsPaused(false);
      setHasStarted(true);
    } catch (err) {
      console.error('Error starting exercise:', err);
      setError('Egzersiz başlatılırken bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  }, [isCompleted, hasStarted]);

  const handlePause = useCallback(() => {
    try {
      setIsPaused(true);
      cleanupTimers();
    } catch (err) {
      console.error('Error pausing exercise:', err);
      setError('Egzersiz duraklatılırken bir hata oluştu');
    }
  }, [cleanupTimers]);

  const handleResume = useCallback(() => {
    try {
      setIsPaused(false);
    } catch (err) {
      console.error('Error resuming exercise:', err);
      setError('Egzersiz devam ettirilirken bir hata oluştu');
    }
  }, []);

  const handleReset = useCallback(() => {
    try {
      cleanupTimers();
      setIsRunning(false);
      setIsPaused(false);
      setCurrentStepIndex(0);
      setStepElapsedSeconds(0);
      setResetKey((prev) => prev + 1);
      setShowCompletion(false);
      setHasStarted(false);
      setError(null);
    } catch (err) {
      console.error('Error resetting exercise:', err);
      setError('Egzersiz sıfırlanırken bir hata oluştu');
    }
  }, [cleanupTimers]);

  const getProgressPercentage = useCallback(() => {
    if (!currentStep) return 0;
    try {
      return Math.min((stepElapsedSeconds / currentStep.durationSeconds) * 100, 100);
    } catch (err) {
      console.error('Error calculating progress percentage:', err);
      return 0;
    }
  }, [currentStep, stepElapsedSeconds]);

  const toggleInstructions = useCallback(() => {
    setShowInstructions((prev) => !prev);
  }, []);

  const closeInstructions = useCallback(() => {
    setShowInstructions(false);
  }, []);

  const closeCompletion = useCallback(() => {
    setShowCompletion(false);
  }, []);

  return {
    currentStepIndex,
    isRunning,
    isPaused,
    stepElapsedSeconds,
    resetKey,
    showCompletion,
    hasStarted,
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
  };
};
