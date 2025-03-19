import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Heart, User } from 'lucide-react';

const Navbar = ({ onCartClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              className="sm:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-900">STORE</span>
            </a>
          </div>

          <div className="hidden sm:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Shop</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Categories</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <User size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Heart size={20} />
            </button>
            <button
              className="p-2 text-gray-600 hover:text-gray-900 relative"
              onClick={onCartClick}
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Shop</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Categories</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;