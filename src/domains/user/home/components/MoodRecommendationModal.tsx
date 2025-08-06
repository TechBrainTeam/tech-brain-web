import { X, Heart, ShieldCheck, BookOpen, Brain, Sparkles } from 'lucide-react';
import { Button } from '../../../../shared/components/Button/Button';

interface MoodRecommendationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedMood: number;
}

const moodData = [
  {
    mood: 'İyi',
    emoji: '😊',
    color: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-50',
    recommendations: [
      {
        icon: <Brain className="w-5 h-5 text-green-600" />,
        title: 'Güçlendirici Egzersizler',
        description:
          'Bu pozitif enerjinizi korumak için nefes teknikleri ve meditasyon öneriyoruz.',
        action: 'Nefes Egzersizi Başlat',
        link: '/user/breath',
      },
      {
        icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
        title: 'İleri Seviye Terapiler',
        description: 'Mükemmel durumda! Karmaşık fobilerle yüzleşmeye hazırsınız.',
        action: 'Terapi Seansına Başla',
        link: '/user/therapy',
      },
      {
        icon: <Sparkles className="w-5 h-5 text-purple-600" />,
        title: 'Motivasyon Artırıcı',
        description: 'Bu enerjiyle yeni hedefler belirleyebilir ve ilerleme kaydedebilirsiniz.',
        action: 'Fobileri Keşfet',
        link: '/user/library',
      },
    ],
  },
  {
    mood: 'Orta',
    emoji: '🙂',
    color: 'from-yellow-400 to-orange-500',
    bgColor: 'bg-yellow-50',
    recommendations: [
      {
        icon: <Heart className="w-5 h-5 text-pink-600" />,
        title: 'Sakinleştirici Aktiviteler',
        description: 'Günlük stresi azaltmak için hafif nefes egzersizleri öneriyoruz.',
        action: 'Nefes Egzersizi Başlat',
        link: '/user/breath',
      },
      {
        icon: <BookOpen className="w-5 h-5 text-indigo-600" />,
        title: 'Bilgilendirici İçerikler',
        description: 'Fobiler hakkında daha fazla bilgi edinerek kendinizi güçlendirin.',
        action: 'Fobileri Keşfet',
        link: '/user/library',
      },
      {
        icon: <ShieldCheck className="w-5 h-5 text-green-600" />,
        title: 'Temel Terapi Seansları',
        description: 'Küçük adımlarla başlayarak güveninizi artırabilirsiniz.',
        action: 'Terapi Seansına Başla',
        link: '/user/therapy',
      },
    ],
  },
  {
    mood: 'Kötü',
    emoji: '😟',
    color: 'from-orange-400 to-red-500',
    bgColor: 'bg-orange-50',
    recommendations: [
      {
        icon: <Heart className="w-5 h-5 text-red-600" />,
        title: 'Acil Sakinleştirme',
        description: 'Derin nefes teknikleri ile anında rahatlama sağlayın.',
        action: 'Nefes Egzersizi Başlat',
        link: '/user/breath',
      },
      {
        icon: <BookOpen className="w-5 h-5 text-blue-600" />,
        title: 'Destekleyici İçerikler',
        description: 'Benzer deneyimleri olan kişilerin hikayelerini okuyun.',
        action: 'Fobileri Keşfet',
        link: '/user/library',
      },
      {
        icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
        title: 'Hafif Terapi Seansları',
        description: 'Küçük, yönetilebilir adımlarla ilerleyin.',
        action: 'Terapi Seansına Başla',
        link: '/user/therapy',
      },
    ],
  },
  {
    mood: 'Yorgun',
    emoji: '😴',
    color: 'from-blue-400 to-indigo-500',
    bgColor: 'bg-blue-50',
    recommendations: [
      {
        icon: <Heart className="w-5 h-5 text-blue-600" />,
        title: 'Yatıştırıcı Nefes Teknikleri',
        description: 'Yorgunluğunuzu azaltacak özel nefes egzersizleri.',
        action: 'Nefes Egzersizi Başlat',
        link: '/user/breath',
      },
      {
        icon: <BookOpen className="w-5 h-5 text-indigo-600" />,
        title: 'Hafif Okuma Materyalleri',
        description: 'Yorucu olmayan, bilgilendirici içerikler.',
        action: 'Fobileri Keşfet',
        link: '/user/library',
      },
      {
        icon: <ShieldCheck className="w-5 h-5 text-green-600" />,
        title: 'Kısa Terapi Seansları',
        description: '5-10 dakikalık kısa ve etkili seanslar.',
        action: 'Terapi Seansına Başla',
        link: '/user/therapy',
      },
    ],
  },
  {
    mood: 'Çok kötü',
    emoji: '😞',
    color: 'from-red-400 to-pink-500',
    bgColor: 'bg-red-50',
    recommendations: [
      {
        icon: <Heart className="w-5 h-5 text-red-600" />,
        title: 'Acil Rahatlama Teknikleri',
        description: 'Anında sakinlik için özel nefes ve meditasyon teknikleri.',
        action: 'Nefes Egzersizi Başlat',
        link: '/user/breath',
      },
      {
        icon: <BookOpen className="w-5 h-5 text-purple-600" />,
        title: 'Destekleyici Kaynaklar',
        description: 'Zor zamanlarda size yardımcı olacak içerikler.',
        action: 'Fobileri Keşfet',
        link: '/user/library',
      },
      {
        icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
        title: 'Temel Destek Seansları',
        description: 'Bu durumda profesyonel destek almayı düşünebilirsiniz.',
        action: 'Terapi Seansına Başla',
        link: '/user/therapy',
      },
    ],
  },
];

const MoodRecommendationModal = ({
  isOpen,
  onClose,
  selectedMood,
}: MoodRecommendationModalProps) => {
  if (!isOpen) return null;

  const moodInfo = moodData[selectedMood];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full">
        <div className={`bg-gradient-to-r ${moodInfo.color} p-6 rounded-t-3xl text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center">
            <div className="text-6xl mb-4">{moodInfo.emoji}</div>
            <h2 className="text-2xl font-bold mb-2">Bugün {moodInfo.mood} Hissediyorsunuz</h2>
            <p className="text-white/90">Size özel önerilerimizi keşfedin</p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="text-center mb-6">
            <p className="text-gray-600">
              Bu ruh haliniz için size özel olarak hazırladığımız öneriler:
            </p>
          </div>

          <div className="space-y-4">
            {moodInfo.recommendations.map((rec, index) => (
              <div
                key={index}
                className={`${moodInfo.bgColor} p-4 rounded-2xl border border-gray-200 hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-2 shadow-sm">{rec.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{rec.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
                    <Button
                      onClick={() => {
                        window.location.href = rec.link;
                        onClose();
                      }}
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      {rec.action}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Bu öneriler size yardımcı olacak mı?</p>
            <Button
              onClick={onClose}
              variant="outline"
              className="px-6 py-2 rounded-xl border-gray-300 text-gray-600 hover:bg-gray-50"
            >
              Kapat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodRecommendationModal;
