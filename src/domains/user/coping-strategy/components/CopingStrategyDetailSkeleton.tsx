import { ArrowLeft, Clock } from 'lucide-react';
import Skeleton from '../../../../shared/components/Skeleton/Skeleton';

const CopingStrategyDetailSkeleton = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8">
        <div className="flex items-center text-indigo-600 font-medium mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <Skeleton className="h-4 w-16" />
        </div>

        <Skeleton className="h-8 w-3/4 mb-2" />
        <Skeleton className="h-4 w-24 mb-4" />

        <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
          <Clock className="w-4 h-4" />
          <Skeleton className="h-4 w-20" />
        </div>

        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-5/6" />
        </div>

        <Skeleton className="h-12 w-32 mt-8 rounded-lg" />
      </div>
    </main>
  );
};

export default CopingStrategyDetailSkeleton; 