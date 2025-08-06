import Cookies from 'js-cookie';
import type { AuthResponse } from '../../domains/auth/model/auth.types';

export const setAuthCookies = (authData: AuthResponse['data']) => {
  Cookies.set('token', authData.token, {
    expires: 7,
    secure: true,
    sameSite: 'Strict',
  });

  Cookies.set('user', JSON.stringify(authData.user), {
    expires: 7,
    secure: true,
    sameSite: 'Strict',
  });
};

export const getToken = (): string | null => {
  return Cookies.get('token') || null;
};

export const isAuthenticated = (): boolean => {
  const token = getToken();
  return !!token;
};

export const clearAuthCookies = () => {
  Cookies.remove('token');
  Cookies.remove('user');
};
