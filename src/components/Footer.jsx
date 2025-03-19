import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-8">
            <span className="text-2xl font-bold text-white">STORE</span>
            <p className="text-gray-400 text-sm">
              Your one-stop destination for premium fashion and lifestyle products.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Shop</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">New Arrivals</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Best Sellers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Sale</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Collections</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Shipping Info</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Returns</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Newsletter</h3>
            <p className="mt-4 text-gray-400 text-sm">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700"
                >
                  <Mail size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} STORE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;