import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-400 text-white  py-4 pb-10">
      <div className="flex  justify-center gap-4 mt-4 mb-4">
        <p className="font-barlow text-lg font-bold tracking-widest ">Github en LinkedIn: </p>
        <a
          href="https://github.com/Quincy-Fer"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-700 transition"
        >
          <FaGithub size={40} />
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-700 transition"
        >
          <FaLinkedin size={40} />
        </a>
      </div>
      <p className="text-md font-barlow font-bold text-end mr-4">
        &copy; {new Date().getFullYear()} Copyright Quincy Fer
      </p>
    </footer>
  );
};

export default Footer;
