import { useQuery } from '@tanstack/react-query';
import type { CopingStrategyDetailResponse } from '../model/copingStrategy.types';
import { getCopingStrategyById } from '../api/copingStrategy.service';

export const useGetCopingStrategy = (strategyId: string) => {
  return useQuery<CopingStrategyDetailResponse, Error>({
    queryKey: ['copingStrategy', strategyId],
    queryFn: () => getCopingStrategyById(strategyId),
    enabled: !!strategyId,
  });
}; 