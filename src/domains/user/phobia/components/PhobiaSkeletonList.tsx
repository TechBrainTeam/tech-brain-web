import Skeleton from '../../../../shared/components/Skeleton/Skeleton';

const PhobiaSkeletonList = ({ count = 3 }: { count?: number }) => {
  return (
    <div className="space-y-5 animate-pulse">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="p-5 rounded-2xl shadow-md border border-gray-200 bg-gradient-to-br from-gray-100 to-white"
        >
          <div className="flex justify-between items-start mb-2">
            <div className="space-y-2">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-3 w-24" />
            </div>
            <Skeleton className="h-4 w-12" />
          </div>
          <Skeleton className="h-3 w-full mb-2" />
          <Skeleton className="h-3 w-5/6 mb-2" />
          <Skeleton className="h-3 w-2/3 mb-2" />
          <div className="mt-3 flex gap-2">
            <Skeleton className="h-6 w-16 bg-purple-200 rounded-full" />
            <Skeleton className="h-6 w-12 bg-purple-100 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhobiaSkeletonList;
