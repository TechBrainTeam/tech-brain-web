const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Fobini Seç',
      description: 'Hangi fobinizle çalışmak istediğinizi seçin: yükseklik, karanlık, sosyal fobi, uçak korkusu ve daha fazlası...',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      number: 2,
      title: 'Egzersizlere Başla',
      description: 'Yavaş yavaş ilerleyen interaktif egzersizlerle rahatlamaya başlayın. Her seviye korkunuzu azaltmaya yardımcı olur.',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      number: 3,
      title: 'Gelişimini Takip Et',
      description: 'İlerlemenizi grafiklerle takip edin ve her adımda destek alın. Başarılarınızı kutlayın ve motivasyonunuzu koruyun.',
      gradient: 'from-pink-600 to-red-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nasıl Çalışır?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Basit 3 adımda fobilerinizi aşmaya başlayın
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white`}>
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 