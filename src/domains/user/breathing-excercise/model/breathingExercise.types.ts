export type StepType = 'INHALE' | 'EXHALE' | 'HOLD_AFTER_INHALE' | 'HOLD_AFTER_EXHALE';

export interface Step {
  stepType: StepType;
  durationSeconds: number;
  stepOrder: number;
}

export interface BreathingExercise {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  loopCount: number;
  totalDurationSeconds: number;
  totalDurationMinutes: number;
  createdAt: string;
  updatedAt: string;
  steps: Step[];
}

export interface BreathingExerciseListResponse {
  success: boolean;
  data: BreathingExercise[];
}
