import { ListOrdered, Clock } from 'lucide-react';

interface PageHeaderProps {
  therapyName: string;
  strategiesCount: number;
  totalDuration: number;
}

const PageHeader = ({ therapyName, strategiesCount, totalDuration }: PageHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="bg-white/80 backdrop-blur-sm shadow-2xl border border-white/20 rounded-3xl p-6 sm:p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {therapyName}
          </h1>
          <p className="text-gray-600 mt-2 text-lg">Başa Çıkma Stratejileri</p>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <ListOrdered className="w-4 h-4" />
              {strategiesCount} Strateji
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {totalDuration} dk Toplam
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader; 