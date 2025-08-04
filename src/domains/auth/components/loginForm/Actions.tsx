import type React from 'react';

type Props = {
  isPending: boolean;
  onSubmit: () => void;
};

const Actions: React.FC<Props> = ({ isPending, onSubmit }) => {
  return (
    <>
      <div className="flex justify-between gap-3 mt-8 mb-4">
        <button
          onClick={onSubmit}
          disabled={isPending}
          className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg"
        >
          {isPending ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Giriş Yapılıyor...
            </div>
          ) : (
            'Giriş Yap'
          )}
        </button>
      </div>
    </>
  );
};

export default Actions;
