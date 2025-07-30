import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { RegisterPage } from '../domains/auth/pages/RegisterPage';
import LoginPage from '../domains/auth/pages/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
