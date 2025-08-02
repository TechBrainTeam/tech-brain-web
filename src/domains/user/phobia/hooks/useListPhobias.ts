import { useQuery, useQueryClient } from '@tanstack/react-query';
import { listPhobias } from '../api/phobia.service';
import type { PhobiaListResponse, PhobiaQueryParams } from '../model/phobia.types';

export const useListPhobias = (params: PhobiaQueryParams) => {
  const queryClient = useQueryClient();

  return useQuery<PhobiaListResponse, Error>({
    queryKey: ['phobiaList', params],
    queryFn: () => listPhobias(params),
    select: (data) => {
      const cachedCategories = queryClient.getQueryData<PhobiaListResponse>(['phobiaListStatic'])
        ?.data.categories;

      if (!cachedCategories?.length && data.data.categories.length > 0) {
        queryClient.setQueryData(['phobiaListStatic'], {
          ...data,
          data: {
            ...data.data,
            data: [],
            meta: { total: 0, page: 1, limit: 10, lastPage: 1 },
          },
        });
      }

      return {
        ...data,
        data: {
          ...data.data,
          categories: cachedCategories?.length ? cachedCategories : data.data.categories,
        },
      };
    },
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
};
