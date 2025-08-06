import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const NoExerciseState = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-gray-600"
      >
        <div className="text-4xl mb-4">🧘‍♀️</div>
        <div className="text-lg font-medium">Egzersiz bulunamadı</div>
        <div className="text-sm mt-2">Lütfen listeden tekrar seçin.</div>
        <button
          onClick={() => navigate('/user/breath')}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Listeye Dön
        </button>
      </motion.div>
    </div>
  );
};

export default NoExerciseState; 