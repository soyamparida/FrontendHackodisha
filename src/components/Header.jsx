import React, { useState } from 'react';
import { Menu, X, Home, PlusCircle, Search, HelpCircle, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center p-2 md:p-3">
        {/* Logo Placeholder */}
        <div className="text-2xl font-bold text-indigo-600">
          <a href="#home">Lost & Found</a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="flex items-center text-gray-700 hover:text-indigo-600">
            <Home className="mr-2 h-5 w-5" />
            Home
          </a>
          <a href="#report" className="flex items-center text-gray-700 hover:text-indigo-600">
            <PlusCircle className="mr-2 h-5 w-5" />
            Report Item
          </a>
          <a href="#browse" className="flex items-center text-gray-700 hover:text-indigo-600">
            <Search className="mr-2 h-5 w-5" />
            Browse Listings
          </a>
          <a href="#faq" className="flex items-center text-gray-700 hover:text-indigo-600">
            <HelpCircle className="mr-2 h-5 w-5" />
            FAQ
          </a>
          <a href="#contact" className="flex items-center text-gray-700 hover:text-indigo-600">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="h-8 w-8 text-gray-700" />
            ) : (
              <Menu className="h-8 w-8 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a href="#home" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <Home className="mr-2 h-5 w-5" />
            Home
          </a>
          <a href="#report" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <PlusCircle className="mr-2 h-5 w-5" />
            Report Item
          </a>
          <a href="#browse" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <Search className="mr-2 h-5 w-5" />
            Browse Listings
          </a>
          <a href="#faq" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <HelpCircle className="mr-2 h-5 w-5" />
            FAQ
          </a>
          <a href="#contact" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <Phone className="mr-2 h-5 w-5" />
            Contact
          </a>
          <a
            href="#report"
            className="block px-4 py-2 mt-2 bg-green-500 text-white text-center rounded-md shadow hover:bg-green-600 transition duration-300"
          >
            Report Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
