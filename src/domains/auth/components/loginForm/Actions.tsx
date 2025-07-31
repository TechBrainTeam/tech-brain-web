import type React from 'react';

type Props = {
  isPending: boolean;
  onSubmit: () => void;
};

const Actions: React.FC<Props> = ({ isPending, onSubmit }) => {
  return (
    <>
      <div className="flex justify-between gap-3 mt-6 mb-4">
        <button
          onClick={onSubmit}
          disabled={isPending}
          className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition cursor-pointer"
        >
          {isPending ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
        </button>
      </div>
    </>
  );
};

export default Actions;
