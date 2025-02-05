import React from "react";
import ContactButton from "../components/ContactButton";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="px-16 lg:px-48 pb-16" id="contact">
      <motion.h2
        className="text-center font-montserrat font-bold text-3xl  lg:text-5xl text-gray-800 py-10 "
        ref={ref}
        initial={{ y: 100, opacity: 0 }} // Starts below and invisible
        animate={isInView ? { y: 0, opacity: 1 } : {}} // Moves up when in view
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Contact
      </motion.h2>
      <div className="flex justify-around lg:pt-2 lg:mt-10 lg:mb-12">
        <div className="">
          <p
            className="bg-white mt-6  font-montserrat text-lg lg:text-xl text-center 
              text-gray-700 lg:mb-10 mb-4 "
          >
            Ik sta altijd open voor een gesprek!
            <br /> Stuur me gerust een mailtje 📧
          </p>
          <p className="font-barlow font-bold text-teal-400 mb-10 text-xl">
            quincy.e.fer@gmail.com
          </p>
          <ContactButton />
        </div>
        <motion.svg
          initial={{ rotate: 0 }}
          animate={{ rotate: 0 }}
          whileHover={{
            y: [-15, 0, -9, 0], // Bouncing effect
            transition: {
              type: "spring", // Smooth natural motion
              stiffness: 50, // Controls how strong the spring is
              damping: 10, // Slows down motion for smooth effect
              mass: 0.5, // Lighter mass makes it more responsive
              repeat: 2, // Keeps bouncing while hovered
            },
          }}
          className="w-56 mt-12 hidden lg:flex  "
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          stroke="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M287.38 939.53H676.5A20.48 20.48 0 0 1 697 960a20.48 20.48 0 0 1-20.48 20.48H287.38A20.48 20.48 0 0 1 266.9 960a20.48 20.48 0 0 1 20.48-20.47z"
              fill=""
            ></path>
            <path
              d="M309.41 837.77c-110.78-61.5-185.75-179.64-185.75-315.3v-11.25A361 361 0 0 1 135 421.11h698.45a361 361 0 0 1 11.36 90.1v11.26c0 135.65-75 253.8-185.75 315.3v11.38a45 45 0 0 1-45 45H354.4a45 45 0 0 1-45-45v-11.38z"
              fill="#FFFFFF"
            ></path>
            <path
              d="M833.54 734.43a121.23 121.23 0 0 1-46.89-9.35L764.88 716l12-20.28a339.44 339.44 0 0 0 47.41-173.24V489l22.73 2.51a121.66 121.66 0 0 1 108.37 121.1c0.04 67.16-54.64 121.82-121.85 121.82zM825 693a82.41 82.41 0 0 0 8.5 0.44A80.92 80.92 0 0 0 865 538a380.68 380.68 0 0 1-40 155z"
              fill=""
            ></path>
            <path
              d="M833.45 421.11a361 361 0 0 1 11.36 90.1v11.26c0 135.65-75 253.8-185.75 315.3v11.38a45 45 0 0 1-45 45h-147a45 45 0 0 1-45-45v-11.38c-110.78-61.5-185.75-179.64-185.75-315.3v-11.25a361 361 0 0 1 11.36-90.1z"
              fill="#2dd4bf"
            ></path>
            <path
              d="M602.18 421.11h231.27a361 361 0 0 1 11.36 90.1v11.26c0 135.65-75 253.8-185.75 315.3v11.38a45 45 0 0 1-45 45H495.5v-67.58q135.83-199.65 106.68-405.46z"
              fill="#0d9488"
            ></path>
            <path
              d="M614 919H354.47a65.61 65.61 0 0 1-65.54-65.54v-3.93a380.9 380.9 0 0 1-185.75-327.21v-10.95a382.07 382.07 0 0 1 13.11-99.44l4.08-15.15h727.72l4.08 15.15a382.08 382.08 0 0 1 13.11 99.44v10.94a380.9 380.9 0 0 1-185.74 327.27v3.93A65.61 65.61 0 0 1 614 919zM152.13 437.75a342 342 0 0 0-8 73.62v10.94a340 340 0 0 0 175.22 297.53l10.54 5.85v27.82a24.6 24.6 0 0 0 24.58 24.58H614a24.6 24.6 0 0 0 24.58-24.58V825.7l10.54-5.85a340 340 0 0 0 175.2-297.53v-10.95a342 342 0 0 0-8-73.62z"
              fill=""
            ></path>
            <path
              d="M469.95 406.82a20.48 20.48 0 0 1-12.52-36.7c13.63-10.51 22.79-30.7 22.79-50.24 0-18.05-5.59-39.4-12.46-47.59a20.46 20.46 0 0 1-2.69-4.12c-2.8-5.69-5.9-11.37-9.17-17.39-12.16-22.32-25.95-47.63-25.95-78.56 0-54.87 11.06-81.8 47.33-115.3A20.48 20.48 0 0 1 505.07 87c-27.77 25.64-34.16 41.57-34.16 85.2 0 20.5 10.18 39.18 21 59 3 5.48 6.06 11.12 8.95 16.87 6.59 8.61 11.78 20.06 15.43 34.09a154.27 154.27 0 0 1 4.94 37.73c0 32.09-15.21 64.54-38.74 82.68a20.39 20.39 0 0 1-12.54 4.25zM312.2 406.82a20.48 20.48 0 0 1-12.52-36.7c13.63-10.5 22.79-30.7 22.79-50.24 0-18.05-5.59-39.4-12.46-47.59a20.48 20.48 0 0 1-2.69-4.12c-2.8-5.69-5.9-11.37-9.17-17.39-12.15-22.33-25.95-47.64-25.95-78.57 0-54.87 11.06-81.8 47.33-115.3A20.48 20.48 0 0 1 347.32 87c-27.77 25.64-34.16 41.57-34.16 85.2 0 20.5 10.18 39.18 21 59 3 5.48 6.06 11.12 8.95 16.87 6.59 8.61 11.78 20.06 15.43 34.09a154.3 154.3 0 0 1 4.94 37.73c0 32.09-15.21 64.54-38.75 82.68a20.39 20.39 0 0 1-12.53 4.25zM627.7 406.82a20.48 20.48 0 0 1-12.52-36.7c13.63-10.51 22.79-30.7 22.79-50.24 0-18.05-5.59-39.4-12.46-47.59a20.46 20.46 0 0 1-2.69-4.12c-2.8-5.69-5.9-11.37-9.17-17.39-12.16-22.32-25.95-47.63-25.95-78.56 0-54.87 11.06-81.8 47.33-115.3A20.48 20.48 0 0 1 662.82 87c-27.77 25.64-34.16 41.57-34.16 85.2 0 20.5 10.18 39.18 21 59 3 5.48 6.06 11.12 8.95 16.87 6.59 8.61 11.78 20.06 15.43 34.09a154.27 154.27 0 0 1 4.94 37.73c0 32.09-15.21 64.54-38.74 82.68a20.39 20.39 0 0 1-12.54 4.25z"
              fill=""
            ></path>
          </g>
        </motion.svg>
      </div>
    </section>
  );
};

export default Contact;
