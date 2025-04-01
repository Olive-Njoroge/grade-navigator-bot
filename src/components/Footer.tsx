
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">GradeNavigator</h3>
            <p className="text-gray-300">
              Guiding Kenyan students to their ideal educational and career paths based on KCSE performance.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <p className="text-gray-300">
              Have questions or feedback? <br />
              <a href="mailto:contact@gradenavigator.com" className="text-edu-light-blue hover:underline">contact@gradenavigator.com</a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} GradeNavigator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
