import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinkStyle = (path) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      location.pathname === path
        ? 'bg-purple-900 text-white'  
        : 'text-gray-300 hover:bg-purple-800 hover:text-white' 
    }`;

  return (
    <nav className="bg-gradient-to-r from-purple-800 via-black to-purple-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold tracking-wide hover:opacity-90 transition">
          AI Prompt Saver
        </Link>
        <div className="flex space-x-3">
          <Link to="/" className={navLinkStyle('/')}>
            Home
          </Link>
          <Link to="/all-prompts" className={navLinkStyle('/all-prompts')}>
            All Prompts
          </Link>
          <Link to="/add-prompt" className={navLinkStyle('/add-prompt')}>
            Add Prompt
          </Link>
          <Link to="/user-prompts" className={navLinkStyle('/user-prompts')}>
            Your Prompts
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
