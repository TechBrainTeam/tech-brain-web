import { Clock, ArrowLeft } from 'lucide-react';
import type { CopingStrategyData } from '../model/copingStrategy.types';
import { Button } from '../../../../shared/components/Button/Button';

interface StrategyContentProps {
  strategy: CopingStrategyData;
  onBack: () => void;
  onComplete: () => void;
  isPending: boolean;
}

const StrategyContent = ({ strategy, onBack, onComplete, isPending }: StrategyContentProps) => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8">
        <button
          onClick={onBack}
          className="flex items-center text-indigo-600 font-medium mb-6 hover:text-indigo-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Geri
        </button>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{strategy.title}</h1>
        <p className="text-indigo-600 text-sm font-medium mb-4">Adım {strategy.stepNumber}</p>

        <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
          <Clock className="w-4 h-4" />
          {strategy.durationInMinutes} dakika
        </div>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
            {strategy.content}
          </p>
        </div>

        <Button
          onClick={onComplete}
          disabled={isPending}
          className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              İşleniyor...
            </div>
          ) : (
            'İlerle'
          )}
        </Button>
      </div>
    </main>
  );
};

export default StrategyContent; 