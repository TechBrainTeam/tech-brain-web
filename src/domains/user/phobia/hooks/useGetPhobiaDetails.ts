import { useQuery } from '@tanstack/react-query';
import type { PhobiaDetailsResponse } from '../model/phobia.types';
import { getPhobiaDetails } from '../api/phobia.service';

export const useGetPhobiaDetails = (phobiaId: string, enabled = true) => {
  return useQuery<PhobiaDetailsResponse, Error>({
    queryKey: ['phobiaDetails', phobiaId],
    queryFn: () => getPhobiaDetails(phobiaId),
    enabled: enabled && Boolean(phobiaId),
    staleTime: 5 * 60 * 1000,
  });
};
