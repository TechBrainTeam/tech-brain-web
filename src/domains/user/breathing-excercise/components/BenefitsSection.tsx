import { motion } from 'framer-motion';

interface BenefitsSectionProps {
  benefits: string[];
}

const BenefitsSection = ({ benefits }: BenefitsSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-white/95 to-blue-50/80 backdrop-blur-sm p-3 md:p-4 rounded-xl 
      shadow w-full max-w-lg border border-white/60 mb-2"
    >
      <div className="text-center mb-2">
        <h2 className="text-base md:text-lg font-bold text-gray-800 flex items-center justify-center gap-2 mb-1">
          <span className="text-lg">✨</span>
          <span>Egzersizin Faydaları</span>
          <span className="text-lg">✨</span>
        </h2>
        <p className="text-xs text-gray-600">Bu nefes egzersizi size şu faydaları sağlar</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {benefits?.map((benefit, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 p-2 rounded border border-blue-200/50 
            hover:shadow-sm transition-all duration-200 hover:scale-102"
          >
            <div className="flex items-start gap-2">
              <div
                className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full 
              flex items-center justify-center text-white text-xs font-bold"
              >
                {i + 1}
              </div>
              <div className="flex-1">
                <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                  {benefit}
                </p>
              </div>
            </div>
          </motion.div>
        )) || (
          <div className="col-span-2 text-center text-gray-500 py-2">Fayda bilgisi bulunamadı</div>
        )}
      </div>
      <div className="mt-2 text-center">
        <div
          className="inline-flex items-center gap-1 bg-gradient-to-r from-green-100 to-blue-100 px-2 py-1
         rounded-full text-xs text-gray-700 font-medium"
        >
          <span className="text-green-600">💚</span>
          <span>Düzenli uygulama ile daha etkili sonuçlar alırsınız</span>
        </div>
      </div>
    </motion.div>
  );
};

export default BenefitsSection;
