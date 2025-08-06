import { useNavigate } from 'react-router-dom';
import type { BreathingExercise } from '../model/breathingExercise.types';

interface BreathingExerciseListProps {
  exercises: BreathingExercise[];
}

const BreathingExerciseList = ({ exercises }: BreathingExerciseListProps) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {exercises.map((exercise) => (
        <div
          key={exercise.id}
          className="bg-white rounded-2xl shadow-md p-4 cursor-pointer transition hover:shadow-lg"
          onClick={() => navigate(`/user/breath/${exercise.id}`, { state: { exercise } })}
        >
          <h3 className="text-lg font-semibold mb-1">{exercise.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{exercise.description}</p>
          <div className="mt-2 text-sm text-gray-500">
            Süre: {exercise.totalDurationMinutes} dk, Döngü: {exercise.loopCount}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BreathingExerciseList;
