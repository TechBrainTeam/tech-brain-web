import { api } from '../../../shared/api/axios';
import type { RegisterRequest, AuthResponse, LoginRequest } from '../model/auth.types';

export const registerUser = async (data: RegisterRequest): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/register', data);
  return response.data;
};

export const loginUser = async (data: LoginRequest): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', data);
  return response.data;
};
