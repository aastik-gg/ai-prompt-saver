import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">AI Prompt Saver</h1>
        <div>
          <Link to="/" className="text-white px-4 py-2 hover:bg-blue-700 rounded">
            Home
          </Link>
          <Link to="/add-prompt" className="text-white px-4 py-2 hover:bg-blue-700 rounded">
            Add Prompt
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
