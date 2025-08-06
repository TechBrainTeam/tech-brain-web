import { useEffect, useRef } from 'react';
import { useListBreathingExercises } from '../hooks/useListBreathingExercises';
import BreathingExerciseSkeletonList from '../components/BreathingExerciseSkeletonList';
import BreathingExerciseList from '../components/BreathingExerciseList';

const BreathingExercises = () => {
  const { data, isLoading, error } = useListBreathingExercises();
  const exercises = data?.data ?? [];

  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
      ref={topRef}
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
              🧘‍♀️ Nefes Egzersizleri
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Nefes</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Doğru nefesle bedenini ve zihnini dengede tut ✨
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 mt-8">
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8 space-y-8">
          {isLoading && <BreathingExerciseSkeletonList count={4} />}

          {!isLoading && !error && exercises.length > 0 && (
            <BreathingExerciseList exercises={exercises} />
          )}
        </div>
      </div>
    </main>
  );
};

export default BreathingExercises;
