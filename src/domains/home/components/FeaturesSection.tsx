import { Brain, Heart, Shield, Target, TrendingUp, Smartphone } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'Bilimsel Yaklaşım',
      description: 'CBT, exposure therapy ve mindfulness tekniklerini birleştirerek kanıtlanmış tedavi yöntemleri sunuyoruz.',
      gradient: 'from-indigo-50 to-indigo-100',
      iconBg: 'bg-indigo-600'
    },
    {
      icon: Shield,
      title: 'Güvenli Ortam',
      description: 'Kontrollü ve güvenli bir ortamda, kendi hızınızda ilerleyerek korkularınızla yüzleşin.',
      gradient: 'from-purple-50 to-purple-100',
      iconBg: 'bg-purple-600'
    },
    {
      icon: Heart,
      title: 'Kişisel Destek',
      description: 'Her adımda yanınızdayız. İhtiyacınız olduğunda uzmanlarımızdan destek alabilirsiniz.',
      gradient: 'from-pink-50 to-pink-100',
      iconBg: 'bg-pink-600'
    },
    {
      icon: Target,
      title: 'Kişiselleştirilmiş',
      description: 'Her fobi türü için özel olarak tasarlanmış programlar ve kişisel ilerleme planları.',
      gradient: 'from-blue-50 to-blue-100',
      iconBg: 'bg-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'İlerleme Takibi',
      description: 'Detaylı raporlar ve grafiklerle ilerlemenizi takip edin, motivasyonunuzu koruyun.',
      gradient: 'from-green-50 to-green-100',
      iconBg: 'bg-green-600'
    },
    {
      icon: Smartphone,
      title: 'Her Yerden Erişim',
      description: 'Mobil uygulama ile istediğiniz yerden, istediğiniz zaman tedavinize devam edin.',
      gradient: 'from-yellow-50 to-yellow-100',
      iconBg: 'bg-yellow-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Neden Bizi Seçmelisiniz?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bilimsel araştırmalara dayalı tekniklerle, kişiselleştirilmiş yaklaşımla fobilerinizi
            aşmanıza yardımcı oluyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`bg-gradient-to-br ${feature.gradient} p-8 rounded-3xl hover:shadow-xl transition-all duration-300`}>
              <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 