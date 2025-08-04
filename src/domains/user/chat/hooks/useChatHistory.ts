import { useInfiniteQuery } from '@tanstack/react-query';
import { getChatHistory } from '../api/chat.service';
import type { ChatHistoryResponse } from '../model/chat.types';

export const useChatHistory = (userPhobiaId: string) => {
  return useInfiniteQuery<ChatHistoryResponse, Error>({
    queryKey: ['chatHistory', userPhobiaId],
    queryFn: ({ pageParam }) => getChatHistory(userPhobiaId, pageParam as number, 5),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { currentPage, totalPages } = lastPage.meta;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    enabled: !!userPhobiaId,
    refetchOnWindowFocus: false,
  });
};
