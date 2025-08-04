import { useNavigate, useParams } from 'react-router-dom';
import { Users, BookOpen, Activity, ArrowLeft } from 'lucide-react';
import FloatingChatButton from '../components/FloatingChatButton';
import { useGetPhobiaDetails } from '../hooks/useGetPhobiaDetails';
import PhobiaDetailSkeleton from '../components/PhobiaDetailsSkleton';
import { useCreateUserPhobia } from '../hooks/useCreateUserPhobia';
import { useEffect } from 'react';

const PhobiaDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useGetPhobiaDetails(id ?? '');

  const { mutate, isPending } = useCreateUserPhobia();

  const phobia = data?.data;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleStartChat = () => {
    if (!phobia?.id) return;
    mutate(phobia.id, {
      onSuccess: (data) => {
        navigate(`/user/chat/${data.data.id}`);
      },
    });
  };

  if (isLoading) {
    return <PhobiaDetailSkeleton />;
  }

  if (isError || !phobia) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 font-semibold">Bir hata oluştu.</p>
          <p className="text-gray-600">{error?.message || 'Veri getirilemedi.'}</p>
          <button onClick={() => navigate(-1)} className="mt-4 text-indigo-600 underline">
            Geri Dön
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-4 sm:p-6 md:p-12">
      <section className="mx-auto bg-white/70 backdrop-blur-sm shadow-xl border border-gray-200 rounded-3xl px-4 sm:px-8 md:px-16 py-4 sm:py-8 md:py-12">
        <div className="mb-6">
          <button
            onClick={() => navigate('/user/library')}
            className="inline-flex items-center gap-2 hover:text-gray-600 cursor-pointer text-sm sm:text-base"
          >
            <ArrowLeft className="w-5 h-5" />
            Fobilere Geri Dön
          </button>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            {phobia.name}
          </h1>
          <p className="text-gray-500 italic mt-1 sm:mt-2 text-sm sm:text-base">
            {phobia.englishName}
          </p>
          {phobia.percentage && (
            <div className="mt-3 sm:mt-4 inline-flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full text-sm text-gray-700">
              <Users className="w-4 h-4" />
              Türkiye'de %{phobia.percentage}
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {phobia.categories?.map((cat) => (
            <span
              key={cat.id}
              className="bg-indigo-50 text-indigo-600 text-sm px-4 py-1 rounded-full font-medium"
            >
              {cat.name}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          <div className="space-y-8">
            <div>
              <h2 className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                <BookOpen className="w-5 h-5 text-indigo-500" />
                Açıklama
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {phobia.description || 'Açıklama mevcut değil.'}
              </p>
            </div>

            {Array.isArray(phobia.commonSymptoms) && phobia.commonSymptoms.length > 0 && (
              <div>
                <h2 className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                  <Activity className="w-5 h-5 text-pink-500" />
                  Yaygın Belirtiler
                </h2>
                <div className="flex flex-wrap gap-2">
                  {phobia.commonSymptoms.map((symptom, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 border border-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm"
                    >
                      {symptom}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Başa Çıkma Stratejileri
            </h2>
            {phobia.therapies?.length > 0 ? (
              <ul className="space-y-4 text-gray-700 text-sm sm:text-base">
                {phobia.therapies.flatMap(
                  (therapy) =>
                    therapy.strategies?.map((strategy) => (
                      <li
                        key={strategy.id}
                        className="flex items-start gap-3 before:content-['•'] before:text-indigo-500"
                      >
                        {strategy.title}
                      </li>
                    )) || []
                )}
              </ul>
            ) : (
              <p className="text-gray-500">Herhangi bir strateji bilgisi bulunamadı.</p>
            )}
          </div>
        </div>

        <button
          className="mt-10 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 
       bg-[length:200%_200%] animate-gradient 
       hover:scale-[1.02] text-white py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium 
       shadow-lg transition-all duration-300 cursor-pointer"
          onClick={() => {
            const therapyId = phobia.therapies?.[0]?.id;
            if (therapyId) {
              navigate(`/user/therapy/${therapyId}`);
            }
          }}
        >
          Maruz Kalma Terapisini Başlat
        </button>

        <FloatingChatButton onClick={handleStartChat} disabled={isPending} />
      </section>
    </main>
  );
};

export default PhobiaDetailPage;
