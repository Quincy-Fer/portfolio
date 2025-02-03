import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-400 text-white text-center py-4">
      <p className="text-sm text-white font-bold">
        &copy; {new Date().getFullYear()} Quincy Fer. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
