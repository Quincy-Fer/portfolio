import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-400 text-white  py-4 ">
      <div className="flex  justify-center gap-4 mt-4 mb-4 items-end">
        <p className="font-barlow lg:text-lg font-bold tracking-widest ">Github en LinkedIn: </p>
        <a
          href="https://github.com/Quincy-Fer"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-700 transition"
        >
          <FaGithub size={35} />
        </a>
        <a
          href="https://www.linkedin.com/in/quincy-fer/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-700 transition"
        >
          <FaLinkedin size={35} />
        </a>
      </div>
      <p className="text-md font-barlow font-bold lg:text-end lg:mr-4 max-sm:mt-6 text-center">
        &copy; {new Date().getFullYear()} Copyright Quincy Fer
      </p>
    </footer>
  );
};

export default Footer;
