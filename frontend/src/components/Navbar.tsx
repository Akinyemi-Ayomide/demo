import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaWhatsapp, FaBars } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import { FaTimes } from "react-icons/fa";
import collection from '../assets/collection.png';
import about from '../assets/info.png';
import contact from '../assets/telephone.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => setVisible(!visible);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = '23473222';

  return (
    <>
      {/* Main Navbar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 h-16 md:m-6 md:rounded-full px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'bg-black/80 shadow-lg text-white' : 'bg-black/80 text-white'
        }`} 
      >
        {/* Left Links */}
        <div className="hidden md:flex space-x-6 items-center text-sm font-semibold">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/niche">CATEGORY</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
         <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="/price">PRICE</NavLink>
        </div>

        {/* Mobile Toggle */}
        <FaBars onClick={toggleMenu} className="flex md:hidden text-xl cursor-pointer" />

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link to="/">
            {/* <img src="/logo.svg" alt="logo" className="h-8" /> */}
            <h1 className='text-2xl text-orange-300'>LOGO</h1>
          </Link>
        </div>

        {/* Right Icon */}
        <div>
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-500"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
      className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-transform duration-300 ${
        visible ? 'translate-x-0' : '-translate-x-full'
      }`}
      onClick={toggleMenu}
    >
      {/* Sidebar Content */}
      <aside
        className="bg-white text-black w-[85%] max-w-sm h-full p-6 space-y-6 shadow-xl"
        onClick={toggleMenu} 
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4">
          <Link to="/" onClick={toggleMenu}>
            <img src="/logo.svg" alt="logo" className="h-8" />
          </Link>
          <FaTimes className="text-xl cursor-pointer" onClick={toggleMenu} />
        </div>

        {/* Links */}
        <nav className="space-y-4 text-sm" >
          <div className="flex justify-between items-center mb-4">
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-green-700 hover:underline"
            >
              REACH OUT
            </a>
            <IoIosArrowForward />
          </div>

          <NavLink
            to="/niche"
            className="flex items-center gap-3 hover:text-blue-600"
            onClick={toggleMenu}
          >
            <img src={collection} alt="Category" className="w-5 h-5" />
            Category
          </NavLink>

          <NavLink
            to="/price"
            className="flex items-center gap-3 hover:text-blue-600"
            onClick={toggleMenu}
          >
            <img src={collection} alt="Price" className="w-5 h-5" />
            Price
          </NavLink>

          <NavLink
            to="/about"
            className="flex items-center gap-3 hover:text-blue-600"
            onClick={toggleMenu}
          >
            <img src={about} alt="About" className="w-5 h-5" />
            About
          </NavLink>

          <NavLink
            to="/contact"
            className="flex items-center gap-3 hover:text-blue-600"
            onClick={toggleMenu}
          >
            <img src={contact} alt="Contact" className="w-5 h-5" />
            Contact
          </NavLink>
        </nav>
      </aside>
    </div>
    </>
  );
};

export default Navbar;
