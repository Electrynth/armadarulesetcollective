import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import arcLogo from '../assets/ARC Logo no text Circle.png';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const isActive = (path) => {
    return location.pathname === path ? 'text-[#C14949] font-bold' : '';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/news', label: 'News' },
    { path: '/organized-play', label: 'Organized Play' },
    { path: '/resources', label: 'Resources' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 font-montserrat py-3">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center items-center relative">
          {/* Desktop navigation - hidden on mobile */}
          <div className="hidden md:flex bg-gray-800/90 backdrop-blur-sm rounded-full pl-3 pr-6 py-2 ring-1 ring-gray-700/50 items-center">
            {/* Logo and ARC text */}
            <div className="flex items-center space-x-2 mr-6">
              <img 
                src={arcLogo} 
                alt="ARC Logo" 
                className="h-8 w-8"
              />
              <span className="text-white text-xl font-bold">ARC</span>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-white hover:text-[#C14949] transition-colors px-4 py-1 text-sm ${isActive(link.path)}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile header with logo and hamburger */}
          <div className="md:hidden flex justify-between items-center w-full pl-3">
            <div className="flex items-center space-x-2">
              <img 
                src={arcLogo} 
                alt="ARC Logo" 
                className="h-8 w-8"
              />
              <span className="text-white text-xl font-bold">ARC</span>
            </div>
            <button 
              ref={buttonRef}
              className="text-white p-2 z-[60]"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-6">
                <div className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-3' : 'rotate-0 top-1'}`}></div>
                <div className={`absolute w-6 h-0.5 bg-white top-3 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                <div className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-3' : 'rotate-0 top-5'}`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu - shown when isMenuOpen is true */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-3 z-[55]`} ref={menuRef}>
          <div className="flex flex-col bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 ring-1 ring-gray-700/50 text-left">
            {navLinks.map((link, index) => (
              <div key={link.path}>
                <Link
                  to={link.path}
                  className={`text-white hover:text-[#C14949] transition-colors block py-1.5 text-left text-sm ${isActive(link.path)}`}
                >
                  {link.label}
                </Link>
                {index < navLinks.length - 1 && (
                  <div className="border-b border-gray-700/50 my-1.5"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;