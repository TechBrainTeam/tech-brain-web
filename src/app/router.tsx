import { createBrowserRouter } from 'react-router-dom';
import { RegisterPage } from '../domains/auth/pages/RegisterPage';
import LoginPage from '../domains/auth/pages/LoginPage';
import HomePage from '../domains/home/pages/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);
