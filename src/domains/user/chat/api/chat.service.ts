import { api } from '../../../../shared/api/axios';
import type { ChatMessageResponse, ChatHistoryResponse } from '../model/chat.types';

export const sendChatMessage = async (
  userPhobiaId: string,
  message: string
): Promise<ChatMessageResponse> => {
  const response = await api.post('/chat/send', { userPhobiaId, message });
  return response.data;
};

export const getChatHistory = async (
  userPhobiaId: string,
  page: number,
  limit: number
): Promise<ChatHistoryResponse> => {
  const response = await api.get(`/chat/history/${userPhobiaId}?page=${page}&limit=${limit}`);
  return response.data;
};
