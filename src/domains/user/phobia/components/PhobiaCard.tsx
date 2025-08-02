import { useNavigate } from 'react-router-dom';
import { Users } from 'lucide-react';
import type { Phobia } from '../model/phobia.types';

type Props = {
  phobia: Phobia;
  index: number;
};

const PhobiaCard = ({ phobia, index }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/phobias/${phobia.id}`);
  };

  return (
    <div
      role="button"
      onClick={handleClick}
      className={`p-5 rounded-2xl shadow-md border border-gray-200 transition transform 
        hover:-translate-y-1 hover:shadow-lg bg-gradient-to-br ${
          index % 2 === 0 ? 'from-pink-50 to-white' : 'from-blue-50 to-white'
        } cursor-pointer select-text`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{phobia.name}</h2>
          <p className="text-sm text-gray-500 italic">{phobia.englishName}</p>
        </div>
        <span className="text-sm text-gray-600 whitespace-nowrap flex items-center gap-1">
          <Users className="w-4 h-4 text-gray-500" />
          Türkiye'de %{phobia.percentage}
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-700 leading-relaxed">{phobia.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {phobia.categories.map((cat) => (
          <span
            key={cat.id}
            className="bg-purple-100 text-purple-700 px-3 py-1 text-xs rounded-full"
          >
            {cat.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PhobiaCard;
