import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const top = window.scrollY;
    setIsScrolled(top > 50); // Navbar becomes solid after scrolling 50px
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full p-4 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-blue-700" : "bg-transparent"
      } md:bg-blue-950 z-50`} // The z-50 ensures the navbar stays on top
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-3xl font-serif">
          KSHAMA
        </div>
        {/* Hamburger Icon (Visible on Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
            )}
          </button>
        </div>
        {/* Nav Links and Button */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto w-full absolute md:relative top-full md:top-0 left-0 bg-blue-700 md:bg-transparent md:flex-row flex-col md:space-x-8 space-y-4 md:space-y-0 py-4 md:py-0 md:px-0 px-4`}>
          <ul className="text-white md:flex md:space-x-8 space-y-4 md:space-y-0 ">
            <li className="hover:text-gray-300 text-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-300 text-lg">
              <Link to="/product">Products</Link>
            </li>
            <li className="hover:text-gray-300 text-lg">
              <a href="#blog">Blog</a>
            </li>
            <li className="hover:text-gray-300 text-lg">
              <a href="/gallery">Gallery</a>
            </li>
            <li className="hover:text-gray-300 text-lg">
              <a href="/service">Services</a>
            </li>
            <li className="hover:text-gray-300 text-lg">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-gray-300 text-lg">
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
