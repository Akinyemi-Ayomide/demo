import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { useThemeStore } from '../store/themeStore';

const RootLayout = () => {
  const { theme } = useThemeStore();
  return (
    <div className="flex flex-col md:flex-row md:min-h-screen">
      {/* Sidebar */}
      <aside className="w-full h-0 border-b   md:w-16 md:h-auto md:border-b-0 md:border-r">
        <Navbar />
      </aside>

      {/* Main content */}
      <main
        className={`flex-1 md:py-5 py-5  overflow-y-auto ${
          theme === 'light'
            ? 'bg-[#02111B] text-[#00CFC1] shadow-[0_4px_10px_#00CFC1] min-h-screen'
            : 'bg-white text-black  min-h-screen'
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
