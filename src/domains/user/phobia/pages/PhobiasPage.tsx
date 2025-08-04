import { useEffect, useState, useRef } from 'react';
import { useListPhobias } from '../hooks/useListPhobias';
import PhobiaSkeletonList from '../components/PhobiaSkeletonList';
import PhobiaSearch from '../components/PhobiaSearch';
import CategoryFilter from '../components/CategoryFilter';
import PhobiaList from '../components/PhobiaList';
import PaginationControls from '../../../../shared/components/Pagination/PaginationControls';

const PhobiasPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [search, setSearch] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);

  const topRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, error } = useListPhobias({
    search: searchQuery,
    categoryId: selectedCategory,
    page,
    limit: 5,
  });

  const phobias = data?.data.data ?? [];
  const totalPages = data?.data.meta.lastPage ?? 1;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleSearch = () => {
    setPage(1);
    setSearchQuery(search.trim());
  };

  useEffect(() => {
    if (data?.data?.categories && categories.length === 0) {
      setCategories(data.data.categories);
    }
  }, [data, categories.length]);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [page]);

  return (
    <main className="min-h-screen p-12 space-y-8" ref={topRef}>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Fobiler</h1>
        <p className="text-gray-600 text-sm">Yalnız değilsin. Bilgi, korkunun panzehiridir 🧠</p>
      </div>

      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200 p-6 space-y-6">
        <PhobiaSearch value={search} onChange={setSearch} onSearch={handleSearch} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={(id) => {
            setSelectedCategory(id);
            setPage(1);
          }}
        />
        {isLoading && <PhobiaSkeletonList count={4} />}
        {!isLoading && !error && <PhobiaList phobias={phobias} />}
        {!isLoading && !error && totalPages > 1 && (
          <PaginationControls page={page} totalPages={totalPages} onChange={(p) => setPage(p)} />
        )}
      </div>
    </main>
  );
};

export default PhobiasPage;
