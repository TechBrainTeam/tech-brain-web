import { Search } from 'lucide-react';

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
};

const PhobiaSearch = ({ value, onChange, onSearch }: Props) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSearch();
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Fobinle ilgili bir şeyler ara..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full p-3 pl-4 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white"
      />
      <button
        onClick={onSearch}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-500 hover:text-purple-700"
      >
        <Search className="w-5 h-5" />
      </button>
    </div>
  );
};

export default PhobiaSearch;
