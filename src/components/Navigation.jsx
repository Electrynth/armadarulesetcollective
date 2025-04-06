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
          <div className="hidden md:flex bg-gray-800/90 backdrop-blur-sm rounded-xl pl-3 pr-6 py-2 ring-1 ring-gray-700/50 items-center">
            {/* Logo and ARC text */}
            <div className="flex items-center space-x-2 mr-6">
              <img 
                src={arcLogo} 
                alt="ARC Logo" 
                className="h-7 w-7"
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

          {/* Mobile navigation - combined nav bar and popup menu */}
          <div className="md:hidden w-full">
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl pl-3 pr-6 py-1.5 ring-1 ring-gray-700/50 flex items-center w-full">
              <div className="flex items-center space-x-2 mr-6">
                <img 
                  src={arcLogo} 
                  alt="ARC Logo" 
                  className="h-6 w-6"
                />
                <span className="text-white text-lg font-bold">ARC</span>
              </div>
              <div className="ml-auto">
                <button 
                  ref={buttonRef}
                  className="text-white p-1.5 z-[60] bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
                  onClick={toggleMenu}
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                  <div className="relative w-5 h-5">
                    <div className={`absolute w-5 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-2.5' : 'rotate-0 top-1'}`}></div>
                    <div className={`absolute w-5 h-0.5 bg-white top-2.5 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                    <div className={`absolute w-5 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-2.5' : 'rotate-0 top-4'}`}></div>
                  </div>
                </button>
              </div>
            </div>
            
            {/* Popup menu - part of the same component */}
            <div 
              className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'} z-[55]`} 
              ref={menuRef}
            >
              <div className="flex flex-col bg-gray-800/90 backdrop-blur-sm rounded-xl p-3 ring-1 ring-gray-700/50 text-left transform origin-top transition-transform duration-300 ease-in-out">
                {navLinks.map((link, index) => (
                  <div key={link.path} className={`transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: `${index * 50}ms` }}>
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;