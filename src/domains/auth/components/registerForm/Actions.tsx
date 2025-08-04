import type React from 'react';

type Props = {
  step: number;
  isPending: boolean;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
  onSkip?: () => void;
};

const Actions: React.FC<Props> = ({ step, isPending, onBack, onNext, onSubmit, onSkip }: Props) => {
  return (
    <>
      <div className="flex justify-between gap-3 mt-6 mb-3">
        {step > 1 && (
          <button
            onClick={onBack}
            disabled={isPending}
            className="flex-1 border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Geri
          </button>
        )}

        {step < 2 ? (
          <button
            onClick={onNext}
            className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 ease-out"
          >
            Devam Et
          </button>
        ) : (
          <button
            onClick={onSubmit}
            disabled={isPending}
            className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg"
          >
            {isPending ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Kayıt Olunuyor...
              </div>
            ) : (
              'Kayıt Ol'
            )}
          </button>
        )}
      </div>

      {step === 2 && (
        <button
          type="button"
          onClick={onSkip}
          disabled={isPending}
          className="w-full border-2 border-gray-200 text-gray-600 py-3 px-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Bu Adımı Geç
        </button>
      )}
    </>
  );
};

export default Actions;
