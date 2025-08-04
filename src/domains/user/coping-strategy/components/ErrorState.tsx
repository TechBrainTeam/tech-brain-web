import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowLeft } from 'lucide-react';

interface ErrorStateProps {
  error?: Error | null;
}

const ErrorState = ({ error }: ErrorStateProps) => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-sm shadow-2xl border border-white/20 rounded-3xl p-8 text-center max-w-md">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-8 h-8 text-red-500" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Bir hata oluştu</h3>
        <p className="text-gray-600 mb-6">{error?.message || 'Veri getirilemedi.'}</p>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          Geri Dön
        </button>
      </div>
    </main>
  );
};

export default ErrorState; 