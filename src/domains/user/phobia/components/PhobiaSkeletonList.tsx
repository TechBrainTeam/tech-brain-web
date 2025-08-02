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
              <div className="h-4 w-40 bg-gray-300 rounded"></div>
              <div className="h-3 w-24 bg-gray-200 rounded"></div>
            </div>
            <div className="h-4 w-12 bg-gray-300 rounded"></div>
          </div>
          <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
          <div className="h-3 w-5/6 bg-gray-200 rounded mb-2"></div>
          <div className="h-3 w-2/3 bg-gray-200 rounded mb-2"></div>
          <div className="mt-3 flex gap-2">
            <div className="h-6 w-16 bg-purple-200 rounded-full"></div>
            <div className="h-6 w-12 bg-purple-100 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhobiaSkeletonList;
