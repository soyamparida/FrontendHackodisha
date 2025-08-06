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
        <div className="hidden md:flex space-x-6 items-center font-medium">
          <NavLink href="#home" icon={<Home />} label="Home" />
          <NavLink href="#report" icon={<PlusCircle />} label="Report Item" />
          <NavLink href="#browse" icon={<Search />} label="Browse Listings" />
          <NavLink href="#faq" icon={<HelpCircle />} label="FAQ" />
          <NavLink href="#contact" icon={<Phone />} label="Contact" />

          <a
            href="/login"
            className="ml-4 px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-green-500 transition duration-300"
          >
            Login
          </a>
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

