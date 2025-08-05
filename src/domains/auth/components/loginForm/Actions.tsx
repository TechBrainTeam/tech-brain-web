import type React from 'react';
import { Button } from '../../../../shared/components/Button/Button';

type Props = {
  isPending: boolean;
  onSubmit: () => void;
};

const Actions: React.FC<Props> = ({ isPending, onSubmit }) => {
  return (
    <div className="flex justify-between gap-3 mt-8 mb-4">
      <Button
        onClick={onSubmit}
        loading={isPending}
        disabled={isPending}
        fullWidth
        size="lg"
        className="rounded-2xl text-lg"
      >
        Giriş Yap
      </Button>
    </div>
  );
};

export default Actions;
