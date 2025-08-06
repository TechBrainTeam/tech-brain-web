import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CompleteStrategyResponse } from '../model/copingStrategy.types';
import { completeStrategy } from '../api/copingStrategy.service';

export const useCompleteStrategy = (therapyId?: string) => {
  const queryClient = useQueryClient();

  return useMutation<CompleteStrategyResponse, Error, string>({
    mutationFn: (strategyId) => completeStrategy(strategyId),
    onSuccess: () => {
      if (therapyId) {
        queryClient.invalidateQueries({ queryKey: ['copingStrategies', therapyId] });
      }
    },
  });
};
