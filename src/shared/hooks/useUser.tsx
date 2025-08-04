import { useMemo } from 'react';

const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()!.split(';').shift() ?? null;
  return null;
};

type User = {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  profileImage: string | null;
};

export const useUser = (): User | null => {
  return useMemo(() => {
    const raw = getCookie('user');
    if (!raw) return null;

    try {
      return JSON.parse(decodeURIComponent(raw)) as User;
    } catch (e) {
      console.error('Geçersiz user cookie formatı', e);
      return null;
    }
  }, [document.cookie]);
};
