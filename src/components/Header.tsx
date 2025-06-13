import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'AI Tools', href: '/ai-tools' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Felicity Strategic Advisors Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-[#004aad] bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-[#004aad] dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="https://calendly.com/felicitystrategicadvisors/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-[#004aad] text-[#004aad] dark:text-blue-400 dark:border-blue-400 font-medium rounded-lg hover:bg-[#004aad] hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-all"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Book Meeting
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#004aad] to-[#ad0000] text-white px-6 py-2 rounded-lg font-medium hover:from-[#003d8a] hover:to-[#8a0000] transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-[#004aad] bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-[#004aad] dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://calendly.com/felicitystrategicadvisors/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center border border-[#004aad] text-[#004aad] dark:text-blue-400 dark:border-blue-400 px-3 py-2 rounded-md font-medium mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Calendar className="inline h-4 w-4 mr-2" />
                Book Meeting
              </a>
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-[#004aad] to-[#ad0000] text-white px-3 py-2 rounded-md font-medium mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;