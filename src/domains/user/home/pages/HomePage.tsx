import { useState, useEffect } from 'react';
import { Heart, ShieldCheck, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import WeeklySummary from '../components/WeeklySummary';
import MoodRecommendationModal from '../components/MoodRecommendationModal';

const moodOptions = [
  { emoji: '😊', label: 'İyi' },
  { emoji: '🙂', label: 'Orta' },
  { emoji: '😟', label: 'Kötü' },
  { emoji: '😴', label: 'Yorgun' },
  { emoji: '😞', label: 'Çok kötü' },
];

const HomePage = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleContinueClick = () => {
    if (selectedMood !== null) {
      setShowModal(true);
    }
  };

  return (
    <main className="min-h-screen p-12 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Günaydın! 🌞</h1>
        <p className="text-gray-600 text-lg">Korkularınla yüzleşmeye hazır mısın?</p>
      </div>

      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Günlük Kontrol</h2>
            <h3 className="text-sm text-gray-500">Bugün nasıl hissediyorsun?</h3>
          </div>
          <span className="text-sm font-bold bg-gray-900 text-white px-3 py-1 rounded-full shadow">
            7. Gün
          </span>
        </div>

        <div className="flex justify-between max-w-lg gap-3 my-8">
          {moodOptions.map((mood, index) => (
            <button
              key={index}
              onClick={() => setSelectedMood(index)}
              className={`w-14 h-14 flex items-center justify-center text-3xl rounded-full transition transform hover:scale-110 shadow ${selectedMood === index
                ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-lg'
                : 'bg-white hover:bg-gray-100 text-gray-700'
                }`}
            >
              {mood.emoji}
            </button>
          ))}
        </div>

        <button
          onClick={handleContinueClick}
          disabled={selectedMood === null}
          className={`w-full py-3 rounded-xl text-base font-semibold shadow-lg transition cursor-pointer ${selectedMood !== null
            ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
        >
          Seriyi Devam Ettir
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-gray-800">Hızlı Erişim</h2>
          {[
            {
              icon: <Heart className="w-5 h-5 text-pink-500" />,
              title: 'Nefes Egzersizi Başlat',
              link: '/user/breath',
              desc: '5 dakikalık sakinlik seansı',
              gradient: 'from-pink-100 to-pink-50',
            },
            {
              icon: <ShieldCheck className="w-5 h-5 text-green-600" />,
              title: 'Terapi Seansı',
              link: '/user/therapy',
              desc: 'Terapi seansına devam et',
              gradient: 'from-green-100 to-green-50',
            },
            {
              icon: <BookOpen className="w-5 h-5 text-purple-500" />,
              title: 'Fobileri Keşfet',
              link: '/user/library',
              desc: 'Yaygın korkular hakkında öğren',
              gradient: 'from-purple-100 to-purple-50',
            },
          ].map((item, i) => (
            <Link
              to={item.link}
              key={i}
              className={`bg-gradient-to-br ${item.gradient} p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 cursor-pointer transition`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-white rounded-full p-2 shadow">{item.icon}</div>
                <h4 className="text-sm font-medium text-gray-800">{item.title}</h4>
              </div>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </Link>
          ))}
        </div>

        <WeeklySummary />
      </div>

      <MoodRecommendationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        selectedMood={selectedMood!}
      />
    </main>
  );
};

export default HomePage;
