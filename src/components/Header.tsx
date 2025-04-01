
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-edu-blue">
          <span className="text-edu-orange">Grade</span>Navigator
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li><Link to="/" className="text-gray-700 hover:text-edu-blue transition-colors">Home</Link></li>
            <li><Link to="/resources" className="text-gray-700 hover:text-edu-blue transition-colors">Resources</Link></li>
            <li><Link to="/about" className="text-gray-700 hover:text-edu-blue transition-colors">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
