import { Home, BookOpen, Activity, Wind, TrendingUp, ShieldCheck } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import UserProfileCard from '../../../shared/components/User/UserProfileCard';

const navItems = [
  { label: 'Ana Sayfa', icon: Home, path: '/user/home' },
  { label: 'Kütüphane', icon: BookOpen, path: '/user/library' },
  { label: 'Terapi', icon: Activity, path: '/user/therapy' },
  { label: 'Nefes', icon: Wind, path: '/user/breath' },
  { label: 'İlerleme', icon: TrendingUp, path: '/user/progress' },
];

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 w-72 h-screen bg-white flex flex-col justify-between py-6 px-5 border-r shadow-xl z-50">
      <div>
        <div className="flex items-center gap-3 mb-6 px-2">
          <div className="bg-indigo-100 text-indigo-600 p-2 rounded-xl">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">Fobi Uygulaması</h1>
            <p className="text-sm text-gray-500">Korkularını yen</p>
          </div>
        </div>

        <UserProfileCard />

        <nav className="space-y-1">
          {navItems.map(({ label, icon: Icon, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                classNames(
                  'flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                  {
                    'bg-indigo-600 text-white shadow-sm': isActive,
                    'text-gray-700 hover:bg-gray-100 hover:text-indigo-600': !isActive,
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

      <div className="mt-6 bg-indigo-50 p-4 rounded-xl text-sm text-center shadow-sm">
        <div className="text-2xl mb-2">✨</div>
        <p className="text-gray-700 italic mb-2 leading-snug">
          “Cesaret, korkunun yokluğu değil, korkuya rağmen harekete geçmektir.”
        </p>
        <p className="text-indigo-600 text-sm font-semibold transition">Günlük Motivasyon</p>
      </div>
    </aside>
  );
};

export default Sidebar;
