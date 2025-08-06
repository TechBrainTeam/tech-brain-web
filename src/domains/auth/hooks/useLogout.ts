import { useNavigate } from 'react-router-dom';
import { clearAuthCookies } from '../../../shared/utils/authCookies';

export const useLogout = () => {
  const navigate = useNavigate();

  return () => {
    clearAuthCookies();
    navigate('/');
  };
};
