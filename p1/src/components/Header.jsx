import React, { useState } from 'react';
import { Menu, X, Home, PlusCircle, Search, HelpCircle, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600 tracking-wide">
          <a href="#home">Lost & Found</a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
           <div className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="flex items-center text-gray-700 hover:text-indigo-600">
            <Home className="mr-2 h-5 w-5" />
            Home
          </a>
          <a href="#report" className="flex items-center text-gray-700 hover:text-indigo-600">
            <PlusCircle className="mr-2 h-5 w-5" />
            Report Item
          </a>
          <a href="#workflow" className="flex items-center text-gray-700 hover:text-indigo-600">
            <Search className="mr-2 h-5 w-5" />
             How it Works
          </a>
          <a href="#faq" className="flex items-center text-gray-700 hover:text-indigo-600">
            <HelpCircle className="mr-2 h-5 w-5" />
            FAQ
          </a>
          <a href="#footer" className="flex items-center text-gray-700 hover:text-indigo-600">
            <Phone className="mr-2 h-5 w-5" />
            Contact
          </a>
          <a
            href="/login"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-green-500 transition duration-300"
          >
            Login
          </a>
        </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="h-8 w-8 text-gray-700 transition duration-200" />
            ) : (
              <Menu className="h-8 w-8 text-gray-700 transition duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transform transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
        } overflow-hidden`}
      >
        <div className="flex flex-col bg-white border-t shadow-md divide-y">
          <NavMobile href="#home" icon={<Home />} label="Home" />
          <NavMobile href="#report" icon={<PlusCircle />} label="Report Item" />
          <NavMobile href="#browse" icon={<Search />} label="Browse Listings" />
          <NavMobile href="#faq" icon={<HelpCircle />} label="FAQ" />
          <NavMobile href="#contact" icon={<Phone />} label="Contact" />
          <a
            href="#report"
            className="block px-4 py-3 text-center bg-green-500 text-white font-semibold rounded-b-lg hover:bg-green-600 transition duration-300"
          >
            Report Now
          </a>
        </div>
      </div>
    </nav>
  );
};

// Reusable link for desktop nav
const NavLink = ({ href, icon, label }) => (
  <a
    href={href}
    className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors duration-200"
  >
    {icon && <span className="h-5 w-5">{icon}</span>}
    <span>{label}</span>
  </a>
);

// Reusable link for mobile nav
const NavMobile = ({ href, icon, label }) => (
  <a
    href={href}
    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-200"
  >
    {icon && <span className="mr-3">{icon}</span>}
    {label}
  </a>
);

export default Header;

