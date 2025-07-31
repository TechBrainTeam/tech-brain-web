import { useMutation } from '@tanstack/react-query';
import type { AuthResponse, LoginRequest } from '../model/auth.types';
import { loginUser } from '../api/auth.service';
import { setAuthCookies } from '../../../shared/utils/authCookies';

export const useLogin = () => {
  return useMutation<AuthResponse, Error, LoginRequest>({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setAuthCookies(data.data);
    },
  });
};
