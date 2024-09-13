import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-gray-900 text-white shadow-lg">
      {/* Brand Logo */}
      <div className="text-2xl font-bold">
        <a href="#">KIWA.</a>
      </div>

      {/* Navigation Links */}
      <div className="flex">
        <ul className="flex space-x-8 font-mono font-semibold">
          <li>
            <a href="#" className="hover:text-blue-400 transition duration-300">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition duration-300">Blog</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition duration-300">Tools</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition duration-300">Guides</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition duration-300">Innovation</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition duration-300">Community</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition duration-300">About</a>
          </li>
        </ul>
      </div>

      {/* Dark/Light Mode Toggle (Optional) */}
      <div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition duration-300">
          Dark Mode
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
