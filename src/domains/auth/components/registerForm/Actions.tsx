import type React from 'react';
import { Button } from '../../../../shared/components/Button/Button';

type Props = {
  step: number;
  isPending: boolean;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
  onSkip?: () => void;
};

const Actions: React.FC<Props> = ({ step, isPending, onBack, onNext, onSubmit, onSkip }) => {
  return (
    <>
      <div className="flex justify-between gap-3 mt-6 mb-3">
        {step > 1 && (
          <Button
            onClick={onBack}
            disabled={isPending}
            variant="outline"
            fullWidth
            size="md"
            className="rounded-xl"
          >
            Geri
          </Button>
        )}

        {step < 2 ? (
          <Button
            onClick={onNext}
            variant="primary"
            fullWidth
            size="md"
            className="rounded-xl text-base"
          >
            Devam Et
          </Button>
        ) : (
          <Button
            onClick={onSubmit}
            disabled={isPending}
            loading={isPending}
            fullWidth
            size="md"
            className="rounded-xl text-base"
          >
            Kayıt Ol
          </Button>
        )}
      </div>

      {step === 2 && (
        <Button
          type="button"
          onClick={onSkip}
          disabled={isPending}
          variant="outline"
          fullWidth
          size="md"
          className="text-gray-600 rounded-xl"
        >
          Bu Adımı Geç
        </Button>
      )}
    </>
  );
};

export default Actions;
