type Props = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

const PaginationControls = ({ page, totalPages, onChange }: Props) => (
  <div className="flex justify-center items-center gap-4 pt-6">
    <button
      disabled={page === 1}
      onClick={() => onChange(page - 1)}
      className="px-4 py-2 rounded-lg border text-sm disabled:opacity-50 bg-white hover:bg-gray-100 cursor-pointer"
    >
      ← Önceki
    </button>
    <span className="text-sm text-gray-700 font-medium">
      Sayfa {page} / {totalPages}
    </span>
    <button
      disabled={page === totalPages}
      onClick={() => onChange(page + 1)}
      className="px-4 py-2 rounded-lg border text-sm disabled:opacity-50 bg-white hover:bg-gray-100 cursor-pointer"
    >
      Sonraki →
    </button>
  </div>
);

export default PaginationControls;
