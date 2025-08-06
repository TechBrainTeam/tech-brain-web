import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface ErrorStateProps {
  error: string;
}

const ErrorState = ({ error }: ErrorStateProps) => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-gray-600 max-w-md mx-auto p-6"
      >
        <div className="text-4xl mb-4">⚠️</div>
        <div className="text-lg font-medium text-red-600 mb-2">Hata Oluştu</div>
        <div className="text-sm mb-4">{error}</div>
        <button
          onClick={() => navigate('/user/breath')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Listeye Dön
        </button>
      </motion.div>
    </div>
  );
};

export default ErrorState; 