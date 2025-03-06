
import React, { useState, useEffect } from 'react';
import { Search, X, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = [
    { id: 1, name: 'Industries', href: '#' },
    { id: 2, name: 'Consulting Services', href: '#consulting-services' },
    { id: 3, name: 'Digital', href: '#digital' },
    { id: 4, name: 'Insights', href: '#insights' },
    { id: 5, name: 'About', href: '#' },
    { id: 6, name: 'Career', href: '#' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        document.getElementById('searchInput')?.focus();
      }, 100);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality here
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  // Function to handle smooth scrolling for both desktop and mobile links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href && href !== '#') {
      const targetId = href.substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
        
        // Close the menu if it's open
        if (isMenuOpen) {
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }
      }
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/80 border-b border-light-gray/10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {/* Hamburger Menu */}
              <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="p-2 mr-4 focus:outline-none relative z-50"
              >
                <div className={`transition-all duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}>
                  {isMenuOpen ? (
                    <X className="w-6 h-6 text-black" />
                  ) : (
                    <Menu className="w-6 h-6 text-black" />
                  )}
                </div>
              </button>

              {/* Logo */}
              <a href="#" className="flex items-center">
                <span className="text-lg md:text-2xl font-rubik tracking-wider text-black">COMPANY</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-black hover:text-sky-blue transition-all-fast text-shadow tracking-wide font-rubik"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Search Button */}
            <button
              onClick={toggleSearch}
              aria-label="Search"
              className="p-2 focus:outline-none"
            >
              <Search className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-page blur overlay when menu is open - Changed to 30% blur for entire background */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 opacity-100 z-40"
          onClick={toggleMenu}
        ></div>
      )}
      
      {/* Mobile Menu Slide-out with 70% blur effect */}
      <div
        className={`fixed top-0 left-0 max-h-screen overflow-y-auto bg-white/70 backdrop-blur-md shadow-xl transition-transform duration-300 ease-in-out transform rounded-br-[20px] p-4 z-50 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: 'auto', minWidth: '250px', maxWidth: '85%' }}
      >
        <div className="p-2 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-rubik tracking-wider text-black font-semibold">COMPANY</span>
            {/* Close menu button - positioned properly */}
            <button 
              onClick={toggleMenu}
              className="p-1 hover:bg-gray-200/50 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-black hover:text-sky-blue transition-all-fast py-2 border-b border-light-gray/30 font-rubik tracking-wide text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>
          {/* Additional menu footer */}
          <div className="mt-6 pt-2">
            <a 
              href="#" 
              className="inline-block px-6 py-3 bg-sky-blue text-white rounded-md text-center w-full font-medium hover:bg-black transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-50 ${
          isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSearch}
      ></div>
      
      <div
        className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out transform ${
          isSearchOpen ? 'translate-y-0' : '-translate-y-full'
        } z-50`}
      >
        <div className="bg-white p-4 shadow-lg">
          <form onSubmit={handleSearch} className="relative">
            <input
              id="searchInput"
              type="text"
              placeholder="Search for services, industries, insights..."
              className="w-full pl-10 pr-4 py-3 rounded-md bg-light-gray/30 focus:outline-none focus:ring-2 focus:ring-sky-blue font-rubik tracking-wide"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-3.5 w-5 h-5 text-black/60" />
            <button
              type="button"
              onClick={toggleSearch}
              className="absolute right-3 top-3.5"
            >
              <X className="w-5 h-5 text-black/60" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;
