import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, User, Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-indigo-600">ShopHub</h1>
          </div>

          {/* Search - hidden on mobile */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Navigation - desktop */}
          <nav className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Categories
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Deals
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Contact
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center">
            <button className="p-2 rounded-full text-gray-500 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Heart className="h-6 w-6" />
            </button>
            <button className="p-2 rounded-full text-gray-500 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <User className="h-6 w-6" />
            </button>
            <button className="p-2 rounded-full text-gray-500 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full">3</span>
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden ml-2 p-2 rounded-md text-gray-500 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Search - mobile only */}
        <div className="md:hidden py-2 pb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 bg-gray-50">
              Home
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              Categories
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              Deals
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
