import Skeleton from '../../../../shared/components/Skeleton/Skeleton';

const PhobiaSkeletonList = ({ count = 3 }: { count?: number }) => {
  return (
    <div className="space-y-6 animate-pulse">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3 mb-2">
              <Skeleton className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-200 to-pink-200" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-48 bg-gray-200 rounded" />
                <Skeleton className="h-4 w-32 bg-gray-200 rounded" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="w-2 h-2 bg-pink-200 rounded-full" />
              <Skeleton className="h-4 w-16 bg-gray-200 rounded" />
            </div>
          </div>

          <div className="mb-4 space-y-2">
            <Skeleton className="h-4 w-full bg-gray-200 rounded" />
            <Skeleton className="h-4 w-5/6 bg-gray-200 rounded" />
            <Skeleton className="h-4 w-4/5 bg-gray-200 rounded" />
          </div>

          <div className="mb-4 flex gap-2">
            <Skeleton className="h-6 w-16 bg-purple-200 rounded-full" />
            <Skeleton className="h-6 w-12 bg-purple-200 rounded-full" />
            <Skeleton className="h-6 w-20 bg-purple-200 rounded-full" />
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <Skeleton className="w-6 h-6 bg-purple-200 rounded-lg" />
              <Skeleton className="h-4 w-32 bg-gray-200 rounded" />
            </div>
            <Skeleton className="w-24 h-8 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhobiaSkeletonList;
