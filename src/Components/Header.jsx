import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#ED3D63] text-white top-0 w-full z-10">
      <nav className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <div className="text-2xl font-bold flex-shrink-0">
          <img src="" alt="Logo" className="h-20 w-20" />
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex flex-grow justify-center space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300 cursor-pointer text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className="hover:text-gray-300 cursor-pointer text-xl"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              className="hover:text-gray-300 cursor-pointer text-xl"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-300 cursor-pointer text-xl"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gray-300 cursor-pointer text-xl"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#ED3D63] text-white">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li>
              <Link
                to="/" onClick={() => setIsMenuOpen(false)}
                className="hover:text-gray-300 cursor-pointer text-xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/product" onClick={() => setIsMenuOpen(false)}
                className="hover:text-gray-300 cursor-pointer text-xl"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/service" onClick={() => setIsMenuOpen(false)}
                className="hover:text-gray-300 cursor-pointer text-xl"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about" onClick={() => setIsMenuOpen(false)}
                className="hover:text-gray-300 cursor-pointer text-xl"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact" onClick={() => setIsMenuOpen(false)}
                className="hover:text-gray-300 cursor-pointer text-xl"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
