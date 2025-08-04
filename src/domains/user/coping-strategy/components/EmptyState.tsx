import { BookOpen } from 'lucide-react';

const EmptyState = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm shadow-2xl border border-white/20 rounded-3xl p-12 text-center">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <BookOpen className="w-10 h-10 text-gray-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Henüz strateji bulunmuyor</h3>
      <p className="text-gray-600">Bu terapi için henüz başa çıkma stratejileri eklenmemiş.</p>
    </div>
  );
};

export default EmptyState; 