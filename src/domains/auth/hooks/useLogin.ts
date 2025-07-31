import { useMutation } from '@tanstack/react-query';
import type { AuthResponse, LoginRequest } from '../model/auth.types';
import { loginUser } from '../api/auth.service';

export const useLogin = () => {
  return useMutation<AuthResponse, Error, LoginRequest>({
    mutationFn: loginUser,
  });
};
