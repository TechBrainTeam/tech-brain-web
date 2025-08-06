import { CheckCircle, Star, Trophy } from 'lucide-react';
import { Button } from '../../../../shared/components/Button/Button';

interface CongratulationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CongratulationsModal = ({
  isOpen,
  onClose,
  title,
  message,
  buttonText,
  onButtonClick,
}: CongratulationsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

        <div className="absolute top-4 left-4">
          <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
        </div>
        <div className="absolute top-8 right-6">
          <Star className="w-3 h-3 text-yellow-400 animate-pulse delay-300" />
        </div>
        <div className="absolute bottom-6 left-6">
          <Star className="w-2 h-2 text-yellow-400 animate-pulse delay-500" />
        </div>

        <div className="relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">{message}</p>

          <div className="flex items-center justify-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-gray-500">Başarıyla tamamlandı!</span>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={onButtonClick}
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {buttonText}
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="px-6 py-3 rounded-xl border-gray-300 text-gray-600 hover:bg-gray-50"
            >
              Kapat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsModal;
