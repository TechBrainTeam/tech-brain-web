import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-15 animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Bilimsel Fobi Tedavisi
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Fobinle Yüzleş,{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Özgürleş
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Korkularınızı adım adım aşarak özgüveninizi yeniden inşa edin. Bilimsel tekniklerle,
            güvenli bir ortamda ilerleyin ve hayatınızı değiştirin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/register"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              Hemen Başla
              <ArrowRight className="w-5 h-5" />
            </Link>

            <button className="inline-flex items-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-2xl text-lg font-semibold border-2 border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
              <Play className="w-5 h-5" />
              Nasıl Çalışır?
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">10K+</div>
              <div className="text-gray-600">Mutlu Kullanıcı</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Başarı Oranı</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">50+</div>
              <div className="text-gray-600">Fobi Türü</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Destek</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 