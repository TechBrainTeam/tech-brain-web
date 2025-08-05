type Category = { id: string; name: string };

type Props = {
  categories: Category[];
  selectedCategory: string;
  onSelect: (id: string) => void;
};

const CategoryFilter = ({ categories, selectedCategory, onSelect }: Props) => (
  <div className="flex gap-3 flex-wrap">
    {[{ id: '', name: 'Tümü' }, ...categories].map((cat) => (
      <button
        key={cat.id}
        onClick={() => onSelect(cat.id)}
        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer border-2 ${
          selectedCategory === cat.id
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-purple-700 border-gray-200 hover:border-purple-300 hover:shadow-md'
        }`}
      >
        {cat.name}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
