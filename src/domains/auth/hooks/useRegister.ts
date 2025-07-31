import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../api/auth.service';
import type { RegisterRequest, AuthResponse } from '../model/auth.types';
import { setAuthCookies } from '../../../shared/utils/authCookies';

export const useRegister = () => {
  return useMutation<AuthResponse, Error, RegisterRequest>({
    mutationFn: registerUser,
    onSuccess: (data) => {
      setAuthCookies(data.data);
    },
  });
};
