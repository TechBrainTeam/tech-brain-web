import { useState, useRef, useEffect } from 'react';
import { LogOut, Settings, MoreVertical } from 'lucide-react';
import { useUser } from '../../../shared/hooks/useUser';
import { capitalize } from '../../../shared/utils/capitalize';
import { useLogout } from '../../../domains/auth/hooks/useLogout';
import { motion, AnimatePresence } from 'framer-motion';
import { showSuccessToast } from '../../hooks/useToast';

const UserProfileCard = () => {
  const user = useUser();
  const logout = useLogout();

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      showSuccessToast('Başarıyla çıkış yapıldı');
    } catch (err) {
      console.error(err);
    }
  };

  const fullName = [user?.firstName, user?.lastName]
    .filter((v): v is string => typeof v === 'string' && v.length > 0)
    .map(capitalize)
    .join(' ');

  const initials = (user?.firstName?.[0] ?? user?.username?.[0] ?? 'S').toUpperCase();

  return (
    <div className="flex items-center justify-between p-3 mb-8 bg-gray-100 rounded-xl shadow-sm relative">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold overflow-hidden">
          {user?.profileImage ? (
            <img src={user.profileImage} alt="Profil" className="w-full h-full object-cover" />
          ) : (
            initials
          )}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">{user?.username}</p>
          <p className="text-xs text-gray-500">{fullName}</p>
        </div>
      </div>

      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="hover:bg-gray-200 p-1.5 rounded-md transition"
        >
          <MoreVertical className="w-4 h-4 text-gray-500 cursor-pointer" />
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -5 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="absolute right-0 mt-2 w-44 bg-white border border-gray-300 rounded-xl shadow-lg z-50 py-2 text-sm"
            >
              <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700 transition-colors cursor-pointer">
                <Settings className="w-4 h-4" />
                Ayarlar
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-red-600 transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                Çıkış Yap
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UserProfileCard;
