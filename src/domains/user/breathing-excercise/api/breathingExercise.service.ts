import { api } from '../../../../shared/api/axios';
import type { BreathingExerciseListResponse } from '../model/breathingExercise.types';

export const listBreathingExercises = async (): Promise<BreathingExerciseListResponse> => {
  const response = await api.get<BreathingExerciseListResponse>('/breathing-exercise/list');
  return response.data;
};
