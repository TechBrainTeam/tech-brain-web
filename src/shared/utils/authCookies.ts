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
