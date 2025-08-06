import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type { CompleteStrategyResponse } from '../model/copingStrategy.types';
import { useCompleteStrategy } from '../hooks/useCompleteStrategy';
import { useGetCopingStrategy } from '../hooks/useGetCopingStrategy';
import CopingStrategyDetailSkeleton from '../components/CopingStrategyDetailSkeleton';
import StrategyContent from '../components/StrategyContent';
import StrategyErrorState from '../components/StrategyErrorState';
import CongratulationsModal from '../components/CongratulationsModal';

const CopingStrategyDetailPage = () => {
  const { strategyId } = useParams<{ strategyId: string }>();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    title: '',
    message: '',
    buttonText: '',
    onButtonClick: () => { },
  });

  const { data: strategyResponse, isLoading, error } = useGetCopingStrategy(strategyId!);
  const strategy = strategyResponse?.data;

  const { mutate: completeStrategy, isPending } = useCompleteStrategy();

  const handleBack = () => {
    navigate(-1);
  };

  const handleComplete = () => {
    completeStrategy(strategy!.id, {
      onSuccess: (data: CompleteStrategyResponse) => {
        if (data.data.completed) {
          setModalConfig({
            title: 'Tebrikler! 🎉',
            message: 'Terapinizi başarıyla tamamladınız. Bu büyük bir başarı!',
            buttonText: 'Terapi Sayfasına Git',
            onButtonClick: () => navigate('/user/therapy'),
          });
          setShowModal(true);
        } else if (data.data.nextStrategyId) {
          navigate(`/user/therapy/strategies/${data.data.nextStrategyId}`);
        } else {
          setModalConfig({
            title: 'Tebrikler! 🎉',
            message: 'Terapinizi başarıyla tamamladınız. Yeni stratejilerle devam edebilirsiniz.',
            buttonText: 'Terapi Listesine Git',
            onButtonClick: () => navigate('/user/therapy'),
          });
          setShowModal(true);
        }
      },
      onError: (error: any) => {
        setModalConfig({
          title: 'Hata! ❌',
          message: `Bir hata oluştu: ${error.message}`,
          buttonText: 'Tekrar Dene',
          onButtonClick: () => setShowModal(false),
        });
        setShowModal(true);
      },
    });
  };

  if (isLoading) {
    return <CopingStrategyDetailSkeleton />;
  }

  if (error || !strategy) {
    return <StrategyErrorState error={error} onBack={handleBack} />;
  }

  return (
    <>
      <StrategyContent
        strategy={strategy}
        onBack={handleBack}
        onComplete={handleComplete}
        isPending={isPending}
      />

      <CongratulationsModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={modalConfig.title}
        message={modalConfig.message}
        buttonText={modalConfig.buttonText}
        onButtonClick={() => {
          modalConfig.onButtonClick();
          setShowModal(false);
        }}
      />
    </>
  );
};

export default CopingStrategyDetailPage;
