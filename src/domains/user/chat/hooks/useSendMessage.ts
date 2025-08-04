import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { sendChatMessage } from '../api/chat.service';
import type { ChatMessageResponse } from '../model/chat.types';

export const useSendMessage = (): UseMutationResult<
  ChatMessageResponse,
  Error,
  { userPhobiaId: string; message: string }
> => {
  return useMutation({
    mutationFn: ({ userPhobiaId, message }) => sendChatMessage(userPhobiaId, message),
  });
};
