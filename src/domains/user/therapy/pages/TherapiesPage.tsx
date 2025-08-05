import { useEffect, useRef, useState } from 'react';
import { useListTherapies } from '../hooks/useListTherapies';
import PaginationControls from '../../../../shared/components/Pagination/PaginationControls';
import TherapyCard from '../components/TherapyCard';
import TherapiesSkeletonList from '../components/TherapiesSkeletonList';
import type { Therapy } from '../model/therapy.types';

const TherapiesPage = () => {
  const [search, setSearch] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, isError } = useListTherapies({
    search: searchQuery,
    page,
    limit: 3,
  });
  const therapies = data?.data?.therapies ?? [];
  const totalPages = data?.data?.meta?.lastPage ?? 1;

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [page]);

  const handleSearch = () => {
    setPage(1);
    setSearchQuery(search.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  const clearSearch = () => {
    setSearch('');
    setSearchQuery('');
    setPage(1);
  };

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
      ref={topRef}
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Bilimsel Terapi Yöntemleri
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Terapiler
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bilimsel olarak kanıtlanmış terapi yöntemlerini keşfedin ve size en uygun olanını
              bulun
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8 mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center p-4">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Terapi arayın..."
                      className="w-full pl-12 pr-20 py-4 text-lg border-0 focus:outline-none focus:ring-0 bg-transparent placeholder-gray-400"
                    />
                    <svg
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    {searchQuery && (
                      <button
                        onClick={clearSearch}
                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        title="Aramayı temizle"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    )}
                    <button
                      onClick={handleSearch}
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      Ara
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {searchQuery && (
              <div className="mt-4 flex items-center justify-center">
                <span className="text-sm text-gray-600">"{searchQuery}" için arama sonuçları</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-8">
          {isLoading && (
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8">
              <TherapiesSkeletonList count={4} />
            </div>
          )}

          {!isLoading && !isError && therapies.length > 0 && (
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {searchQuery ? 'Arama Sonuçları' : 'Mevcut Terapiler'}
                </h2>
                <p className="text-gray-600">{data?.data?.meta?.total} terapi bulundu</p>
              </div>

              <div className="grid gap-6">
                {therapies.map((therapy: Therapy) => (
                  <TherapyCard key={therapy.id} therapy={therapy} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <PaginationControls page={page} totalPages={totalPages} onChange={setPage} />
                </div>
              )}
            </div>
          )}

          {!isLoading && !isError && therapies.length === 0 && (
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-12 text-center">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {searchQuery ? 'Sonuç bulunamadı' : 'Henüz terapi bulunmuyor'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {searchQuery
                    ? `"${searchQuery}" için arama sonucu bulunamadı. Farklı anahtar kelimeler deneyebilirsiniz.`
                    : 'Şu anda sistemde terapi bulunmuyor. Daha sonra tekrar kontrol edin.'}
                </p>
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                  >
                    Tüm Terapileri Göster
                  </button>
                )}
              </div>
            </div>
          )}

          {isError && (
            <div className="bg-red-50 border border-red-200 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-red-900 mb-2">Bir hata oluştu</h3>
              <p className="text-red-700">
                Terapiler yüklenirken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default TherapiesPage;
