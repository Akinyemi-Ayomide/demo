import Navbar from '../components/Navbar';

import { Outlet } from 'react-router-dom';
import Push from '../components/Push';

const RootLayout = () => {
  return (
    <div>
      <Push />
      <Navbar />
      <div className="w-full min-h-screen">
        {/* Main content area where nested routes will be rendered */}
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
