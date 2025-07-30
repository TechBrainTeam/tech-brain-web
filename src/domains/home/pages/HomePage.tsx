import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e0f7fa] to-white py-12">
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
          Fobinle Yüzleş, <span className="text-[#00796b]">Kendini Keşfet</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Korkularınızı adım adım aşarak özgüveninizi yeniden inşa edin. Bilimsel tekniklerle,
          güvenli bir ortamda ilerleyin.
        </p>
        <Link
          to="/register"
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition"
        >
          <Sparkles className="w-5 h-5" />
          Hemen Başla
        </Link>

        <div className="mt-24 grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-[#00796b]">1. Fobini Seç</h3>
            <p className="text-gray-600">
              Hangi fobinizle çalışmak istediğinizi seçin: yükseklik, karanlık, sosyal fobi...
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-[#00796b]">2. Egzersizlere Başla</h3>
            <p className="text-gray-600">
              Yavaş yavaş ilerleyen interaktif egzersizlerle rahatlamaya başlayın.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-[#00796b]">3. Gelişimini Takip Et</h3>
            <p className="text-gray-600">
              İlerlemenizi grafiklerle takip edin ve her adımda destek alın.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
