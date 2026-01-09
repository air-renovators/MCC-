import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Icons, MCC_NAV_LINKS } from '../constants';
import Icon from './Icon';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || !isHome ? 'bg-white shadow-lg py-3 text-mccGreen' : 'bg-transparent py-6 text-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <Link 
              to="/"
              className="flex-shrink-0 cursor-pointer flex items-center gap-4 group" 
            >
              <div className={`w-12 h-12 border-2 flex items-center justify-center font-serif font-bold text-2xl rounded-sm transition-all duration-300 ${isScrolled || !isHome ? 'border-mccGreen text-mccGreen' : 'border-white text-white group-hover:bg-white group-hover:text-mccGreen'}`}>
                M
              </div>
              <div className="hidden sm:block">
                <div className={`font-serif font-bold text-xl leading-none tracking-tight transition-colors ${isScrolled || !isHome ? 'text-mccGreen' : 'text-white'}`}>Mtunzini</div>
                <div className={`text-[9px] uppercase tracking-[0.3em] font-bold mt-1 transition-colors ${isScrolled || !isHome ? 'text-mccGold' : 'text-gray-300'}`}>Country Club</div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
              {MCC_NAV_LINKS.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.id === 'home' ? '/' : `/${link.id}`}
                  className={({ isActive }) => `text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-mccGold relative group whitespace-nowrap ${
                    isActive ? 'text-mccGold' : ''
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-mccGold transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              ))}
              <Link 
                to="/membership"
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${
                  isScrolled || !isHome 
                  ? 'border-mccGreen text-mccGreen hover:bg-mccGreen hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-mccGreen'
                }`}
              >
                Join Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 transition-transform hover:scale-110 active:scale-95">
                {isMenuOpen ? <Icon path={Icons.X} /> : <Icon path={Icons.Menu} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed inset-0 bg-mccDark/95 z-[60] transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-6">
              <button onClick={() => setIsMenuOpen(false)} className="text-white">
                <Icon path={Icons.X} className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow space-y-8 px-8">
              {MCC_NAV_LINKS.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.id === 'home' ? '/' : `/${link.id}`}
                  className={({ isActive }) => `text-2xl font-serif hover:text-mccGold transition-colors tracking-wide ${isActive ? 'text-mccGold' : 'text-white'}`}
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-8 w-full">
                <Link 
                  to="/membership"
                  className="w-full block text-center bg-mccGold text-white py-4 rounded-lg font-bold uppercase tracking-widest text-sm"
                >
                  Membership Inquiry
                </Link>
              </div>
            </div>
            <div className="p-8 text-center text-gray-500 text-xs tracking-widest uppercase">
              The Heart of Mtunzini
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
