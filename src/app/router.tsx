import { createBrowserRouter } from 'react-router-dom';
import { RegisterPage } from '../domains/auth/pages/RegisterPage';
import { LoginPage } from '../domains/auth/pages/LoginPage';
import HomePage from '../domains/home/pages/HomePage';
import UserLayout from './layout/user/UserLayout';
import UserHomePage from '../domains/user/home/pages/HomePage';
import PhobiasPage from '../domains/user/phobia/pages/PhobiasPage';
import PhobiaDetailPage from '../domains/user/phobia/pages/PhobiaDetailPage';
import ChatPage from '../domains/user/chat/pages/ChatPage';
import CopingStrategiesPage from '../domains/user/coping-strategy/pages/CopingStrategiesPage';
import TherapiesPage from '../domains/user/therapy/pages/TherapiesPage';
import BreathingExercises from '../domains/user/breathing-excercise/pages/BreathingExercises';
import BreathingExerciseDetail from '../domains/user/breathing-excercise/pages/BreathingExerciseDetail';
import CopingStrategyDetailPage from '../domains/user/coping-strategy/pages/CopingStrategyDetailPage';
import ProtectedRoute from '../shared/components/ProtectedRoute';
import PublicRoute from '../shared/components/PublicRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/register',
    element: (
      <PublicRoute>
        <RegisterPage />
      </PublicRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: '/user',
    element: (
      <ProtectedRoute>
        <UserLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: 'home', element: <UserHomePage /> },
      { path: 'library', element: <PhobiasPage /> },
      { path: 'library/phobia/:id', element: <PhobiaDetailPage /> },
      { path: 'chat/:userPhobiaId', element: <ChatPage /> },
      { path: 'therapy/:therapyId', element: <CopingStrategiesPage /> },
      { path: 'therapy', element: <TherapiesPage /> },
      { path: 'therapy/strategies/:strategyId', element: <CopingStrategyDetailPage /> },
      { path: 'breath', element: <BreathingExercises /> },
      { path: 'breath/:exerciseId', element: <BreathingExerciseDetail /> },
    ],
  },
]);
