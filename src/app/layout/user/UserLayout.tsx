import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ScrollToTop from '../../../shared/components/Scroll/ScrollToTop';

const UserLayout = () => {
  return (
    <div className="flex min-h-screen">
      <ScrollToTop />
      <Sidebar />
      <main className="flex-1  overflow-y-auto bg-gradient-to-b from-white to-indigo-50 ml-72">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
