import { useParams } from 'react-router-dom';
import { useListCopingStrategies } from '../hooks/useListCopingStrategies';
import CopingStrategiesSkeleton from '../components/CopingStrategiesSkeleton';
import ErrorState from '../components/ErrorState';
import PageHeader from '../components/PageHeader';
import StrategyCard from '../components/StrategyCard';
import EmptyState from '../components/EmptyState';
import type { CopingStrategyData } from '../model/copingStrategy.types';

const CopingStrategiesPage = () => {
  const { therapyId } = useParams<{ therapyId: string }>();

  const { data, isLoading, isError, error } = useListCopingStrategies(therapyId || '');

  const strategies = data?.data.strategies || [];
  const therapyName = data?.data.therapy.name;

  if (isLoading) {
    return <CopingStrategiesSkeleton count={5} />;
  }

  if (isError || !data) {
    return <ErrorState error={error} />;
  }

  const totalDuration = strategies.reduce((total, s) => total + s.durationInMinutes, 0);

  const handleStrategyClick = (strategy: CopingStrategyData) => {
    console.log(strategy.id);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 sm:p-6 md:p-12">
      <section className="mx-auto max-w-6xl">
        <PageHeader
          therapyName={therapyName || ''}
          strategiesCount={strategies.length}
          totalDuration={totalDuration}
        />

        {strategies.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {strategies.map((strategy) => (
              <StrategyCard key={strategy.id} strategy={strategy} onClick={handleStrategyClick} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </section>
    </main>
  );
};

export default CopingStrategiesPage;
