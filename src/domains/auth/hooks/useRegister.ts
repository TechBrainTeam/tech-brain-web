import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../api/auth.service';
import type { RegisterRequest, AuthResponse } from '../model/auth.types';

export const useRegister = () => {
  return useMutation<AuthResponse, Error, RegisterRequest>({
    mutationFn: registerUser,
  });
};
