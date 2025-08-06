import { AlertCircle, ArrowLeft } from 'lucide-react';
import { Button } from '../../../../shared/components/Button/Button';

interface StrategyErrorStateProps {
  error?: Error | null;
  onBack: () => void;
}

const StrategyErrorState = ({ error, onBack }: StrategyErrorStateProps) => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 md:p-12">
      <div className="max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8 text-red-600" />
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-3">Bir Hata Oluştu</h2>
        <p className="text-gray-600 mb-6">
          {error ? error.message : 'Strateji bulunamadı veya yüklenirken bir hata oluştu.'}
        </p>

        <div className="flex gap-3">
          <Button
            onClick={onBack}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Geri Dön
          </Button>
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="px-6 py-3 rounded-xl border-gray-300 text-gray-600 hover:bg-gray-50"
          >
            Tekrar Dene
          </Button>
        </div>
      </div>
    </main>
  );
};

export default StrategyErrorState; 