import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const UserLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto  bg-gradient-to-br from-purple-50 to-blue-50 ml-72">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
