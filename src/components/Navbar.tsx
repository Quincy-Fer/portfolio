import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-400 text-white fixed w-full z-30" id="#home">
      <div className="container mx-auto flex items-center justify-around lg:p-4 p-8">
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
            <a href="#over-mij" className="">
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
          <div className="flex">
            <p className="mx-auto flex items-center justify-around p-4 uppercase font-barlow font-bold">
              github{" "}
            </p>
            <a
              href="https://github.com/Quincy-Fer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-700 transition"
            >
              <FaGithub size={38} className="mt-2" />
            </a>
          </div>

          <div className="flex">
            <p className="mx-auto flex items-center justify-around p-4 uppercase font-barlow font-bold">
              LinkedIn
            </p>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-700  transition"
            >
              <FaLinkedin size={38} className="mt-2" />
            </a>
          </div>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <motion.svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Top Line (Morphs) */}
            <motion.path
              initial={false}
              animate={{ d: isOpen ? "M6 18L18 6" : "M4 6h16" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            {/* Middle Line (Fades Out/In) */}
            <motion.path
              initial={false}
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              d="M4 12h16"
            />

            {/* Bottom Line (Morphs) */}
            <motion.path
              initial={false}
              animate={{ d: isOpen ? "M6 6l12 12" : "M4 18h16" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </motion.svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed w-full bg-teal-400  z-20 flex flex-col items-center justify-center lg:hidden">
          <div className="flex flex-col items-center space-y-12 py-8 h-screen pt-20">
            <a
              href="#home"
              className="hover:underline hover:underline-offset-4 font-montserrat font-bold"
            >
              Home
            </a>
            <a
              href="#projects"
              className="hover:underline hover:underline-offset-4 font-montserrat font-bold"
            >
              Projecten
            </a>
            <a
              href="#about"
              className="hover:underline hover:underline-offset-4 font-montserrat font-bold"
            >
              Over Mij
            </a>
            <a
              href="#contact"
              className="hover:underline hover:underline-offset-4 font-montserrat font-bold"
            >
              Contact
            </a>

            <a
              href="https://github.com/Quincy-Fer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:underline-offset-4 font-montserrat font-bold"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:underline-offset-4 font-montserrat font-bold"
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
