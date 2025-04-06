import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'bg-[#C14949]/20 ring-1 ring-[#C14949]/50 font-bold' : '';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-gray-800 font-montserrat py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gray-900/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg ring-1 ring-gray-800">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className={`px-5 py-2 rounded-full text-white hover:text-[#666666] hover:bg-[#666666]/10 transition-all ${isActive('/')}`}
            >
              Home
            </Link>
            <Link
              to="/news"
              className={`px-5 py-2 rounded-full text-white hover:text-[#666666] hover:bg-[#666666]/10 transition-all ${isActive('/news')}`}
            >
              News
            </Link>
            <Link
              to="/resources"
              className={`px-5 py-2 rounded-full text-white hover:text-[#666666] hover:bg-[#666666]/10 transition-all ${isActive('/resources')}`}
            >
              Resources
            </Link>
            <Link
              to="/about"
              className={`px-5 py-2 rounded-full text-white hover:text-[#666666] hover:bg-[#666666]/10 transition-all ${isActive('/about')}`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;