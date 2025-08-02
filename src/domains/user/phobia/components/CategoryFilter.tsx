type Category = { id: string; name: string };

type Props = {
  categories: Category[];
  selectedCategory: string;
  onSelect: (id: string) => void;
};

const CategoryFilter = ({ categories, selectedCategory, onSelect }: Props) => (
  <div className="flex gap-2 flex-wrap">
    {[{ id: '', name: 'Tümü' }, ...categories].map((cat) => (
      <button
        key={cat.id}
        onClick={() => onSelect(cat.id)}
        className={`px-4 py-1 rounded-full text-sm font-medium transition border cursor-pointer ${
          selectedCategory === cat.id
            ? 'bg-gradient-to-br from-purple-500 to-indigo-500 text-white shadow'
            : 'bg-white text-gray-700 hover:bg-purple-50'
        }`}
      >
        {cat.name}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
