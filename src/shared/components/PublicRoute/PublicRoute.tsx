import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/authCookies';

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/user/home', { replace: true });
    }
  }, [navigate]);

  if (isAuthenticated()) {
    return null;
  }

  return <>{children}</>;
};

export default PublicRoute;
