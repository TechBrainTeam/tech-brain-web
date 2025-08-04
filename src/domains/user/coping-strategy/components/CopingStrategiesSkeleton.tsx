import Skeleton from '../../../../shared/components/Skeleton/Skeleton';

interface Props {
  count?: number;
}

const CopingStrategiesSkeleton = ({ count = 3 }: Props) => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 sm:p-6 md:p-12">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8">
          <div className="bg-white/80 backdrop-blur-sm shadow-2xl border border-white/20 rounded-3xl p-6 sm:p-8">
            <div className="text-center mb-8">
              <Skeleton className="h-10 w-1/3 mx-auto mb-2" />
              <Skeleton className="h-5 w-1/4 mx-auto mb-4" />
              <div className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-500">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-28" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(count)].map((_, i) => (
            <div
              key={i}
              className="group bg-white/80 backdrop-blur-sm shadow-xl border border-white/20 rounded-3xl p-6 relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Skeleton className="w-12 h-12 rounded-2xl" />
                  <div>
                    <Skeleton className="h-5 w-3/4 mb-2" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-5/6" />
                <Skeleton className="h-3 w-2/3" />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CopingStrategiesSkeleton; 