import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-400 text-white fixed w-full z-30">
      <div className="container mx-auto flex items-center justify-around p-4">
        {/* Logo */}

        {/* Links for larger screens */}
        <ul className="hidden md:flex font-extrabold gap-20 font-barlow transition-all">
          <li className="hover:underline transition-all underline-offset-8 decoration-2 ">
            <a href="#home" className="">
              Home
            </a>
          </li>

          <li className="hover:underline transition-all underline-offset-8 decoration-2">
            {" "}
            <a href="#projecten" className="">
              Projecten
            </a>
          </li>
          <li className="hover:underline transition-all underline-offset-8 decoration-2">
            <a href="#about" className="">
              Over Mij
            </a>
          </li>
          <li className="hover:underline transition-all underline-offset-8 decoration-2">
            {" "}
            <a href="#contact" className="">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Links */}
        <div className="hidden md:flex gap-10">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            LinkedIn
          </a>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-red-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
            <a href="#projects" className="hover:text-gray-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
