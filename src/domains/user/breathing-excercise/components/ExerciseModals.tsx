import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

interface ExerciseModalsProps {
  showInstructions: boolean;
  showCompletion: boolean;
  showBenefits: boolean;
  benefits: string[];
  onCloseInstructions: () => void;
  onCloseCompletion: () => void;
  onCloseBenefits: () => void;
  onRestart: () => void;
}

const ExerciseModals = ({
  showInstructions,
  showCompletion,
  showBenefits,
  benefits,
  onCloseInstructions,
  onCloseCompletion,
  onCloseBenefits,
  onRestart,
}: ExerciseModalsProps) => {
  return (
    <>
      <AnimatePresence>
        {showInstructions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onCloseInstructions}
          >
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full text-left shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>❓</span>
                Nasıl Kullanılır?
              </h2>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">1.</span>
                  <p>Rahat bir pozisyonda oturun ve gözlerinizi kapatın</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">2.</span>
                  <p>Başlat butonuna tıklayın ve nefes döngüsünü takip edin</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">3.</span>
                  <p>Daire büyürken nefes alın, küçülürken nefes verin</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">4.</span>
                  <p>İstediğiniz zaman duraklatabilir veya sıfırlayabilirsiniz</p>
                </div>
              </div>
              <button
                onClick={onCloseInstructions}
                className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 
                transition-colors cursor-pointer"
              >
                Anladım
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCompletion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onCloseCompletion}
          >
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="text-6xl mb-4"
              >
                🎉
              </motion.div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Tebrikler!</h2>
              <p className="text-gray-600 mb-6">
                Nefes egzersizini başarıyla tamamladınız. Kendinizi nasıl hissediyorsunuz?
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={onCloseCompletion}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Tamam
                </button>
                <button
                  onClick={() => {
                    onCloseCompletion();
                    onRestart();
                  }}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Tekrar Yap
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBenefits && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onCloseBenefits}
          >
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full text-left shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                <Info size={28} className="text-green-600" />
                Egzersizin Faydaları
              </h2>
              <ul className="list-disc space-y-2 text-gray-700 text-base">
                {benefits && benefits.length > 0 ? (
                  benefits.map((b, i) => (
                    <li
                      key={i}
                      className="bg-blue-50 rounded-lg px-3 py-2 shadow-sm border border-green-100 flex items-start gap-2"
                    >
                      <span className="mt-1">
                        <Info size={18} className="text-green-400" />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))
                ) : (
                  <li>Fayda bilgisi bulunamadı.</li>
                )}
              </ul>
              <button
                onClick={onCloseBenefits}
                className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 
                transition-colors cursor-pointer"
              >
                Kapat
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExerciseModals;
