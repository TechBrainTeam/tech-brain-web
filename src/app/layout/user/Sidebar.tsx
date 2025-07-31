import { Home, BookOpen, Activity, Wind, TrendingUp, Settings, ShieldCheck } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const navItems = [
  { label: 'Ana Sayfa', icon: Home, path: '/user' },
  { label: 'Kütüphane', icon: BookOpen, path: '/user/library' },
  { label: 'Terapi', icon: Activity, path: '/user/therapy' },
  { label: 'Nefes', icon: Wind, path: '/user/breath' },
  { label: 'İlerleme', icon: TrendingUp, path: '/user/progress' },
];

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 w-72 h-screen bg-white flex flex-col justify-between py-6 px-4 border-r shadow-lg z-50">
      <div>
        <div className="px-2 mb-6 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-black" />
          <div>
            <h1 className="text-lg font-semibold text-black">Fobi Uygulaması</h1>
            <p className="text-sm text-gray-500">Korkularını yen</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-3 mb-8 bg-gray-100 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium">
              S
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Günaydın!</p>
              <p className="text-xs text-gray-500 lowercase">s</p>
            </div>
          </div>
          <Settings className="w-4 h-4 text-gray-400" />
        </div>

        <nav className="space-y-2">
          {navItems.map(({ label, icon: Icon, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                classNames(
                  'flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  {
                    'bg-black text-white': isActive,
                    'text-gray-700 hover:bg-gray-100': !isActive,
                  }
                )
              }
            >
              <Icon className="w-4 h-4" />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-6 bg-indigo-50 p-4 rounded-xl text-sm text-center">
        <div className="text-xl mb-2">✨</div>
        <p className="text-gray-700 italic mb-2">
          “Cesaret, korkunun yokluğu değil, korkuya rağmen harekete geçmektir.”
        </p>
        <button className="text-indigo-600 text-sm font-medium hover:underline">
          Günlük Motivasyon
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
