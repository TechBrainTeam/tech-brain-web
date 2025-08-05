import { useNavigate } from 'react-router-dom';
import type { Therapy } from '../model/therapy.types';
import Icons from '../../../../shared/components/Icons';

const TherapyCard = ({ therapy }: { therapy: Therapy }) => {
  const navigate = useNavigate();

  const handlePhobiaClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (therapy.phobia?.id) {
      navigate(`/user/library/phobia/${therapy.phobia.id}`);
    }
  };

  const handleDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/user/therapy/${therapy.id}`);
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Icons.ModelAvatarIcon className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                {therapy.name}
              </h2>
            </div>
          </div>
        </div>

        {therapy.description && (
          <div className="mb-4">
            <p className="text-gray-600 leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-200">
              {therapy.description}
            </p>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-3 h-3 text-purple-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-sm text-gray-600">
              İlgili Fobi:{' '}
              {therapy.phobia?.id ? (
                <button
                  onClick={handlePhobiaClick}
                  className="font-semibold text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-200 cursor-pointer"
                >
                  {therapy.phobia.name}
                </button>
              ) : (
                <span className="font-semibold text-gray-500">Belirtilmemiş</span>
              )}
            </span>
          </div>

          <button
            onClick={handleDetailsClick}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md opacity-0 group-hover:opacity-100 cursor-pointer"
          >
            Terapiyi Uygula
          </button>
        </div>
      </div>
    </div>
  );
};

export default TherapyCard;
