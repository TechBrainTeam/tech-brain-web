import Skeleton from '../../../../shared/components/Skeleton/Skeleton';

const PhobiaDetailSkeleton = () => {
  return (
    <main className="min-h-screen p-4 sm:p-6 md:p-12">
      <section className="mx-auto bg-white/70 backdrop-blur-sm shadow-xl border border-gray-200 rounded-3xl px-4 sm:px-8 md:px-16 py-4 sm:py-8 md:py-12">
        <div className="mb-6">
          <Skeleton className="w-32 h-5" />
        </div>

        <div className="max-w-4xl mx-auto text-center mb-10">
          <Skeleton className="w-2/3 h-8 mx-auto mb-3" />
          <Skeleton className="w-1/3 h-4 mx-auto mb-4" />
          <Skeleton className="w-40 h-6 mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="w-24 h-6 rounded-full" />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          <div className="space-y-8">
            <div>
              <Skeleton className="w-40 h-6 mb-3" />
              <Skeleton className="w-full h-20" />
            </div>
            <div>
              <Skeleton className="w-40 h-6 mb-3" />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="w-24 h-6 rounded-full" />
                ))}
              </div>
            </div>
          </div>

          <div>
            <Skeleton className="w-48 h-6 mb-4" />
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="w-full h-6 mb-3" />
            ))}
          </div>
        </div>

        <Skeleton className="mt-10 w-full h-12 rounded-xl" />
      </section>
    </main>
  );
};

export default PhobiaDetailSkeleton;
