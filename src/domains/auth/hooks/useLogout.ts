import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const useLogout = () => {
  const navigate = useNavigate();

  return () => {
    Cookies.remove('token');
    Cookies.remove('user');
    navigate('/');
  };
};
