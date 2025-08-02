import { Calendar, TrendingUp, Flame } from 'lucide-react';

const WeeklySummary = () => (
  <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200 mt-11">
    <h2 className="text-lg font-semibold mb-6 mt-3 text-gray-800">Bu Hafta</h2>
    <div className="space-y-8">
      <div className="flex items-center gap-4 group">
        <div className="bg-gray-100 p-4 rounded-xl shadow-sm group-hover:scale-105 transition">
          <Calendar className="w-5 h-5 text-gray-700" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500">Toplam Seans</p>
          <p className="text-2xl font-bold text-gray-800">12</p>
        </div>
      </div>

      <div className="flex items-center gap-4 group">
        <div className="bg-green-100 p-4 rounded-xl shadow-sm group-hover:scale-105 transition">
          <TrendingUp className="w-5 h-5 text-green-600" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500">İlerleme</p>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-1 overflow-hidden">
            <div
              className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-300"
              style={{ width: '85%' }}
            />
          </div>
        </div>
        <p className="text-sm font-semibold text-green-600">85%</p>
      </div>

      <div className="flex items-center gap-4 group">
        <div className="bg-blue-100 p-4 rounded-xl shadow-sm group-hover:scale-105 transition">
          <Flame className="w-5 h-5 text-blue-600" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500">Günlük Seri</p>
          <p className="text-2xl font-bold text-blue-500">7</p>
        </div>
      </div>
    </div>
  </div>
);

export default WeeklySummary;
