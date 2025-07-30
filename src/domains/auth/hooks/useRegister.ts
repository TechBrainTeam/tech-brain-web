import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../api/auth.service';
import type { RegisterRequest, RegisterResponse } from '../model/auth.types';

export const useRegister = () => {
  return useMutation<RegisterResponse, Error, RegisterRequest>({
    mutationFn: registerUser,
  });
};
