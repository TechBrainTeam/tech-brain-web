import { motion } from 'framer-motion';

const LoadingState = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <div className="text-4xl mb-4 animate-spin">🧘‍♀️</div>
        <div className="text-lg font-medium text-gray-600">Yükleniyor...</div>
      </motion.div>
    </div>
  );
};

export default LoadingState; 