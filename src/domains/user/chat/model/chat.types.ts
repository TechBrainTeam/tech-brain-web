export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  message: string;
  createdAt: string;
}

export interface ChatMessageResponse {
  success: boolean;
  data: {
    reply: string;
  };
}

export interface ChatHistoryResponse {
  success: boolean;
  data: ChatMessage[];
  meta: {
    totalItems: number;
    currentPage: number;
    totalPages: number;
    pageSize: number;
  };
}
