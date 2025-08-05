import { useQuery } from '@tanstack/react-query';
import type { TherapyListResponse, TherapyQueryParams } from '../model/therapy.types';
import { listTherapies } from '../api/therapy.service';

export const useListTherapies = (params: TherapyQueryParams) => {
  return useQuery<TherapyListResponse, Error>({
    queryKey: ['therapyList', params],
    queryFn: () => listTherapies(params),
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
};
