import { api } from '../../../shared/api/axios';
import type { RegisterRequest, RegisterResponse } from '../model/auth.types';

export const registerUser = async (data: RegisterRequest): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>('/auth/register', data);
  return response.data;
};
