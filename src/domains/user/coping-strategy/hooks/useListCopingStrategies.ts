import { useQuery } from '@tanstack/react-query';
import type { CopingStrategyListResponse } from '../model/copingStrategy.types';
import { listCopingStrategies } from '../api/copingStrategy.service';

export const useListCopingStrategies = (therapyId: string) => {
  return useQuery<CopingStrategyListResponse, Error>({
    queryKey: ['copingStrategies', therapyId],
    queryFn: () => listCopingStrategies(therapyId),
    staleTime: 60 * 1000,
    enabled: !!therapyId,
  });
};
