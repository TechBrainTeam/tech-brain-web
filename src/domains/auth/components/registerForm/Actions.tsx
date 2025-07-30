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
      <div className="flex justify-between gap-3 mt-6 mb-4">
        {step > 1 && (
          <button
            onClick={onBack}
            disabled={isPending}
            className="flex-1 border rounded-lg py-3 hover:bg-gray-50 transition cursor-pointer"
          >
            Geri
          </button>
        )}

        {step < 2 ? (
          <button
            onClick={onNext}
            className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition cursor-pointer"
          >
            Devam Et
          </button>
        ) : (
          <button
            onClick={onSubmit}
            disabled={isPending}
            className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition cursor-pointer"
          >
            {isPending ? 'Kayıt Olunuyor...' : 'Kayıt Ol'}
          </button>
        )}
      </div>

      {step === 2 && (
        <button
          type="button"
          onClick={onSkip}
          disabled={isPending}
          className="w-full border rounded-lg py-3 hover:bg-gray-50 transition cursor-pointer"
        >
          Bu Adımı Geç
        </button>
      )}
    </>
  );
};

export default Actions;
