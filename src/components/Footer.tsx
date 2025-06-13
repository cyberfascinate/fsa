import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Felicity Strategic Advisors Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 dark:text-gray-500 max-w-md">
              Expert tax, legal, financial, and digital transformation services for Indian businesses. 
              AI-powered solutions for scalable growth with integrity and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/ai-tools" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                  AI Tools
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#c4a668] mt-0.5" />
                <div className="text-gray-400 dark:text-gray-500 text-sm">
                  25/19, A Block, Middle Circle<br />
                  Connaught Place<br />
                  New Delhi - 110001
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#c4a668]" />
                <a href="tel:+919560419070" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                  +91 95604 19070
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#c4a668]" />
                <a href="mailto:info@felicitystrategicadvisors.com" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                  info@felicitystrategicadvisors.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-[#c4a668]" />
                <a 
                  href="https://calendly.com/felicitystrategicadvisors/30min" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  Schedule Meeting
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 dark:text-gray-500 text-sm">
            © 2025 Felicity Strategic Advisors. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/company/felicitystrategicadvisors"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <Link to="/" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors text-sm">
              Terms of Use
            </Link>
            <Link to="/" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;