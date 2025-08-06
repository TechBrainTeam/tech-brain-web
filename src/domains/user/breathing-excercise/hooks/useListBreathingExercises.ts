import { useQuery } from '@tanstack/react-query';
import type { BreathingExerciseListResponse } from '../model/breathingExercise.types';
import { listBreathingExercises } from '../api/breathingExercise.service';

export const useListBreathingExercises = () => {
  return useQuery<BreathingExerciseListResponse, Error>({
    queryKey: ['therapyList'],
    queryFn: () => listBreathingExercises(),
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
};
