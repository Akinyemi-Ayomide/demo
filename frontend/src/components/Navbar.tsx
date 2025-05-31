import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaWhatsapp, FaBars } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import { FaTimes } from 'react-icons/fa';
import collection from '../assets/collection.png';
import about from '../assets/info.png';
import contact from '../assets/telephone.png';
import { GoHomeFill } from 'react-icons/go';
import { BiSolidCategory } from 'react-icons/bi';
import { BsFillInfoSquareFill } from 'react-icons/bs';
import { MdOutlineContacts, MdOutlinePriceChange } from 'react-icons/md';
import { useThemeStore } from '../store/themeStore';
import { IoMoonSharp } from 'react-icons/io5';
import { GoSun } from 'react-icons/go';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => setVisible(!visible);
  const { theme, toggleTheme } = useThemeStore();

  const phoneNumber = '23473222';

  return (
    <>
      {/* Sidebar - Desktop */}
      <div
        className={`sticky top-0 z-50 gap-10 py-2 px-2 flex flex-col items-center transition-all duration-300 md:h-screen ${
          theme === 'light'
            ? 'md:bg-[#02111B] text-[#00CFC1] md:shadow-[0_4px_10px_#00CFC1]'
            : 'md:bg-white md:text-black'
        }`}
      >
        <Link to="/">
          <h1 className="hidden md:flex text-2xl text-orange-300">LOGO</h1>
        </Link>

        {/* Desktop Nav Icons */}
        <div className="hidden md:flex flex-col gap-10 items-center text-sm font-semibold">
          <NavLink to="/">
            <GoHomeFill className="text-2xl " />
          </NavLink>
          <NavLink to="/niche">
            <BiSolidCategory className="text-2xl" />
          </NavLink>
          <NavLink to="/about">
            <BsFillInfoSquareFill
              className={`text-2xl ${
                theme == 'light' ? 'text-[#00CFC1]' : 'text-black'
              }`}
            />
          </NavLink>
          <NavLink to="/contact">
            <MdOutlineContacts className="text-2xl" />
          </NavLink>
          <NavLink to="/price">
            <MdOutlinePriceChange className="text-2xl" />
          </NavLink>
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-500"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
          <button onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoMoonSharp className="h-5 w-5" />
            ) : (
              <GoSun className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Bottom Navbar - Mobile */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0  shadow-2xl flex justify-between px-5 py-4 items-center z-40 ${
          theme === 'light'
            ? 'bg-[#02111B] text-[#00CFC1] shadow-[0_4px_10px_#00CFC1]'
            : 'bg-white text-black'
        }`}
      >
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-500"
        >
          <FaWhatsapp className="text-3xl" />
        </a>

        <Link to="/">
          <h1 className="text-2xl text-orange-300">LOGO</h1>
        </Link>

        <FaBars onClick={toggleMenu} className="cursor-pointer text-3xl " />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-transform duration-300 ${
          visible ? 'translate-x-0' : '-translate-x-full'
        }  `}
        // Clicking overlay closes the menu
      >
        {/* Sidebar Content */}
        <aside
          className={`  w-[85%] max-w-sm h-full p-6 space-y-6 shadow-xl ${
            theme === 'light'
              ? 'bg-[#02111B] text-[#00CFC1] shadow-[10px_0_15px_#00CFC1]'
              : 'bg-white text-black'
          }`}
          onClick={toggleMenu} // ✅ Prevent menu from closing when clicking inside
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b pb-4">
            <Link to="/" onClick={toggleMenu}>
              <img src="/logo.svg" alt="logo" className="h-8" />
            </Link>
            <FaTimes className="text-xl cursor-pointer" onClick={toggleMenu} />
          </div>

          {/* Mobile Links */}
          <nav className="space-y-4 text-sm">
            <div className="flex justify-between items-center mb-4">
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium  hover:underline"
              >
                REACH OUT
              </a>
              <IoIosArrowForward />
            </div>

            <NavLink
              to="/niche"
              className="flex items-center gap-3 hover:text-orange-600"
              onClick={toggleMenu}
            >
              <img src={collection} alt="Category" className="w-5 h-5" />
              Category
            </NavLink>

            <NavLink
              to="/price"
              className="flex items-center gap-3 hover:text-orange-600"
              onClick={toggleMenu}
            >
              <img src={collection} alt="Price" className="w-5 h-5" />
              Price
            </NavLink>

            <NavLink
              to="/about"
              className="flex items-center gap-3 hover:text-orange-600"
              onClick={toggleMenu}
            >
              <img src={about} alt="About" className="w-5 h-5" />
              About
            </NavLink>

            <NavLink
              to="/contact"
              className="flex items-center gap-3 hover:text-orange-600"
              onClick={toggleMenu}
            >
              <img src={contact} alt="Contact" className="w-5 h-5" />
              Contact
            </NavLink>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-sm"
            >
              {theme === 'light' ? (
                <>
                  <IoMoonSharp className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                  Dark Mode
                </>
              ) : (
                <>
                  <GoSun className="h-5 w-5 text-yellow-400" />
                  Light Mode
                </>
              )}
            </button>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
