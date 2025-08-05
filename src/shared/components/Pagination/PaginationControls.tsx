type Props = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

const PaginationControls = ({ page, totalPages, onChange }: Props) => (
  <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
    <div className="text-sm text-gray-600 font-medium">
      Sayfa <span className="text-purple-600 font-bold">{page}</span> /{' '}
      <span className="text-gray-900">{totalPages}</span>
    </div>

    <div className="flex items-center gap-2">
      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed bg-white hover:bg-gray-50 hover:border-purple-300 hover:text-purple-700 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Önceki
      </button>

      <div className="flex items-center gap-1">
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          let pageNum;
          if (totalPages <= 5) {
            pageNum = i + 1;
          } else if (page <= 3) {
            pageNum = i + 1;
          } else if (page >= totalPages - 2) {
            pageNum = totalPages - 4 + i;
          } else {
            pageNum = page - 2 + i;
          }

          return (
            <button
              key={pageNum}
              onClick={() => onChange(pageNum)}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                page === pageNum
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-purple-700 border border-gray-200 hover:border-purple-300'
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      <button
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed bg-white hover:bg-gray-50 hover:border-purple-300 hover:text-purple-700 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
      >
        Sonraki
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
);

export default PaginationControls;
