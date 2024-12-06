import React, { useState } from 'react';
import logo from '../assets/logo-white.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="bg-primary-400">
        <div className="flex justify-between h-[80px] items-center py-1 mx-4 lg:mx-20 z-10">
          {/* Logo */}
          <div className="flex items-center h-[70px]">
            <img src={logo} alt="agreneery" className="h-[200px]" />
          </div>

          {/* Hamburger Menu */}
          <button
            className="lg:hidden text-neutral-100 z-20"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>

          {/* Navigation Links */}
          <div
            className={`lg:flex flex-col lg:flex-row lg:gap-12 items-center absolute lg:static top-[80px] left-0 w-full lg:w-auto bg-primary-400 lg:bg-transparent transition-all duration-300 z-10 ${
              isOpen ? 'flex' : 'hidden'
            }`}
          >
            <a href="#home" className="text-neutral-100 font-roboto-400 px-4 py-2 lg:py-0 hover:text-secondary-300">
              Home
            </a>
            <a href="#feature" className="text-neutral-100 font-roboto-400 px-4 py-2 lg:py-0 hover:text-secondary-300">
              Feature
            </a>
            <a href="#about" className="text-neutral-100 font-roboto-400 px-4 py-2 lg:py-0 hover:text-secondary-300">
              About Us
            </a>
            <a href="#testimonies" className="text-neutral-100 font-roboto-400 px-4 py-2 lg:py-0 hover:text-secondary-300">
              Testimonies
            </a>
            {/* Sign Up Button */}
            <a
              href="/signup"
              className="text-neutral-100 font-roboto-500 bg-secondary-400 px-11 py-2 rounded-md hover:bg-secondary-300 transition-colors duration-500 mt-4 lg:mt-0"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
