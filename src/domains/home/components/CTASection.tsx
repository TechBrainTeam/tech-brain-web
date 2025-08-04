import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const features = [
    'Ücretsiz Kayıt',
    'Bilimsel Yöntemler',
    '7/24 Destek',
    'Güvenli Ortam'
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Fobilerinizi Aşmaya Hazır mısınız?
        </h2>
        <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
          Binlerce kişi gibi siz de özgürleşin. Hemen başlayın ve hayatınızı değiştirin.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/register"
            className="inline-flex items-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Zap className="w-5 h-5" />
            Ücretsiz Başla
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            to="/login"
            className="inline-flex items-center gap-3 bg-transparent text-white px-8 py-4 rounded-2xl text-lg font-semibold border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-300"
          >
            Zaten Üyeyim
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-indigo-100">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection; 