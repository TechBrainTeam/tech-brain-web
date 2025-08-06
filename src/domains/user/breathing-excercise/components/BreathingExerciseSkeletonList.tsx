import Skeleton from '../../../../shared/components/Skeleton/Skeleton';

interface Props {
  count?: number;
}

const BreathingExerciseSkeletonList: React.FC<Props> = ({ count = 3 }) => {
  return (
    <div className="grid gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <Skeleton className="h-6 w-2/3 mb-4" />
          <Skeleton className="h-4 w-1/2 mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      ))}
    </div>
  );
};

export default BreathingExerciseSkeletonList;
