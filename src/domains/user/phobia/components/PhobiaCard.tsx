import { useNavigate } from 'react-router-dom';
import { Users } from 'lucide-react';
import type { Phobia } from '../model/phobia.types';
import Icons from '../../../../shared/components/Icons';

type Props = {
  phobia: Phobia;
};

const PhobiaCard = ({ phobia }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/library/phobia/${phobia.id}`);
  };

  return (
    <div
      role="button"
      className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Icons.WarningIcon />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                  {phobia.name}
                </h2>
                <p className="text-sm text-gray-500 italic">{phobia.englishName}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
              <Users className="w-3 h-3" />%{phobia.percentage}
            </span>
          </div>
        </div>

        {phobia.description && (
          <div className="mb-4">
            <p className="text-gray-600 leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-200">
              {phobia.description}
            </p>
          </div>
        )}

        {phobia.categories.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {phobia.categories.map((cat) => (
                <span
                  key={cat.id}
                  className="bg-purple-100 text-purple-700 px-3 py-1 text-xs rounded-full font-medium transition-colors duration-200"
                >
                  {cat.name}
                </span>
              ))}
            </div>
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
            <span className="text-sm text-gray-600">Detayları görüntüle</span>
          </div>

          <button
            onClick={handleClick}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-md opacity-0 group-hover:opacity-100 cursor-pointer"
          >
            Fobini Yen
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhobiaCard;
