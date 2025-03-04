import React from "react";
import pulsefit from "../assets/images/pulse-fit.png";
import harmony from "../assets/images/harmony-hero.png";
import bliss from "../assets/images/bliss-hero.png";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  // fade in animation ref

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="lg:px-48 px-16 lg:pb-16 " id="projecten">
      <motion.h2
        className="text-center font-montserrat font-bold text-3xl  lg:text-5xl text-gray-800 py-10 "
        ref={ref}
        initial={{ y: 100, opacity: 0 }} // Starts below and invisible
        animate={isInView ? { y: 0, opacity: 1 } : {}} // Moves up when in view
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Projecten
      </motion.h2>
      {/* project 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2  max-sm:mt-4 lg:mt-16">
        {/* informatie project */}
        <div className="">
          <h4 className="text-gray-800 font-bold uppercase text-xl lg:text-3xl font-montserrat">
            Pulse-Fit
          </h4>
          <div className="grid grid-cols-2 lg:flex py-5 gap-1 lg:gap-4">
            <div className="bg-teal-700 px-4 py-2 font-semibold text-white font-barlow uppercase text-sm  lg:text-lg">
              Next.js
            </div>
            <div className="bg-teal-700 px-4 py-2 font-semibold text-white font-barlow uppercase text-sm lg:text-lg">
              React
            </div>
            <div className="bg-teal-700 px-4 py-2 font-semibold text-white font-barlow uppercase text-sm lg:text-lg">
              Typescript
            </div>
            <div className="bg-teal-700 px-4 py-2 font-semibold text-white font-barlow uppercase text-sm lg:text-lg">
              Tailwind
            </div>
          </div>
          {/* beschrijving */}
          <p
            className="bg-white lg:mt-6 max-w-[520px] font-barlow text-sm lg:text-lg leading-relaxed
              tracking-wide text-gray-700"
          >
            Een visueel aantrekkelijke website voor een moderne Gym! Bevat
            meerdere uitgebreide subpaginas gemaakt met Next.js. Het design is
            zelf ontworpen en de site is geheel responsief voor het bekijken op
            mobiel, tablet of desktop.
          </p>
          {/* links */}
          <div className="md:flex  gap-10">
            <div className="flex max-sm:mt-4 md:mt-10">
              <a
                href="https://pulse-fit-kappa.vercel.app/"
                target="_blank"
                className="bg-teal-400  text-white px-8 py-4 lg:text-xl
             font-barlow font-bold hover:bg-teal-500 transition-all flex gap-2 lg:pb-6 "
              >
                Live Site
                <svg
                  className="w-8"
                  viewBox="-1.92 -1.92 67.84 67.84"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke-width="3.84"
                  stroke="#ffffffff"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"></path>
                    <path d="M37.86,51.1A47,47,0,0,1,32,56.7"></path>
                    <path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"></path>
                    <path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"></path>
                    <line x1="10.37" y1="19.9" x2="53.75" y2="19.9"></line>
                    <line x1="32" y1="6.99" x2="32" y2="56.7"></line>
                    <line x1="11.05" y1="45.48" x2="37.04" y2="45.48"></line>
                    <line x1="7.14" y1="32.46" x2="56.86" y2="31.85"></line>
                    <path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"></path>
                  </g>
                </svg>
              </a>
            </div>
            <div className="flex max-sm:mt-4 md:mt-10">
              <a
                href="https://github.com/Quincy-Fer/pulse-fit"
                target="_blank"
                className="text-teal-400 bg-white border-4 border-teal-400 px-8 py-4 lg:text-xl 
             font-barlow font-bold hover:bg-teal-800 hover:text-teal-200 transition-all flex gap-2"
              >
                Bekijk Code
                <svg
                  className="w-8"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#2dd4bf"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>github [#142]</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-140.000000, -7559.000000)"
                        fill="#2dd4bf"
                      >
                        {" "}
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          {" "}
                          <path
                            d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                            id="github-[#142]"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* afbeelding */}
        <img
          src={pulsefit}
          alt="image for gym website project"
          className="max-sm:w-[800px] max-sm:h-[150px] mt-6 
          lg:w-full lg:h-full shadow-md border border-black  box-shadow"
        />
      </div>
      {/* project 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2  mt-16 lg:mt-48">
        {/* informatie project */}
        <div className="">
          <h4 className="text-gray-800 font-bold uppercase text-xl lg:text-3xl font-montserrat">
            Harmony
          </h4>
          <div className="grid grid-cols-2 lg:flex py-5 gap-1 lg:gap-4">
            <div className="bg-teal-700 px-4 py-2 font-semibold text-white font-barlow uppercase text-sm lg:text-lg">
              React.js
            </div>
            <div className="bg-teal-700 px-4 py-2 font-semibold text-white font-barlow uppercase text-sm lg:text-lg">
              Tailwind
            </div>

            <div className="bg-teal-700 px-4 py-2 font-semibold text-white font-barlow uppercase text-sm lg:text-lg">
              javascript
            </div>
          </div>
          {/* beschrijving */}
          <p
            className="bg-white lg:mt-6 max-w-[520px] font-barlow max-sm:text-sm lg:text-lg leading-relaxed
              tracking-wide text-gray-700"
          >
            Een kalmerende website gemaakt voor een therapie kliniek. React is
            gebruik voor het bouwen van de UI en interactieve elementen. Het
            design is zelf ontworpen en met behulp van Tailwind.css is de
            website geheel responsief op alle apparaten
          </p>
          {/* links */}
          <div className="md:flex  gap-10">
            <div className="flex max-sm:mt-4 md:mt-10">
              <a
                href="https://quincy-fer.github.io/Harmony-Therapy-Website/"
                target="_blank"
                className="bg-teal-400  text-white px-8 py-4 lg:text-xl 
             font-barlow font-bold hover:bg-teal-500 transition-all flex gap-2 lg:pb-6"
              >
                Live Site
                <svg
                  className="w-8"
                  viewBox="-1.92 -1.92 67.84 67.84"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke-width="3.84"
                  stroke="#ffffffff"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"></path>
                    <path d="M37.86,51.1A47,47,0,0,1,32,56.7"></path>
                    <path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"></path>
                    <path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"></path>
                    <line x1="10.37" y1="19.9" x2="53.75" y2="19.9"></line>
                    <line x1="32" y1="6.99" x2="32" y2="56.7"></line>
                    <line x1="11.05" y1="45.48" x2="37.04" y2="45.48"></line>
                    <line x1="7.14" y1="32.46" x2="56.86" y2="31.85"></line>
                    <path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"></path>
                  </g>
                </svg>
              </a>
            </div>
            <div className="flex max-sm:mt-4 md:mt-10">
              <a
                href="https://github.com/Quincy-Fer/Harmony-Therapy-Website"
                target="_blank"
                className="text-teal-400 bg-white border-4 border-teal-400 px-8 py-4 lg:text-xl 
             font-barlow font-bold hover:bg-teal-800 hover:text-teal-200 transition-all flex gap-2"
              >
                Bekijk Code
                <svg
                  className="w-8"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#2dd4bf"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>github [#142]</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-140.000000, -7559.000000)"
                        fill="#2dd4bf"
                      >
                        {" "}
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          {" "}
                          <path
                            d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                            id="github-[#142]"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* afbeelding */}
        <img
          src={harmony}
          alt="image for gym website project"
          className="max-sm:w-[800px] max-sm:h-[150px] mt-6 
          lg:w-full lg:h-full shadow-md border border-black  box-shadow"
        />
      </div>
      {/* project 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 lg:mt-48">
        {/* informatie project */}
        <div className="">
          <h4 className="text-gray-800 font-bold uppercase text-xl lg:text-3xl font-montserrat">
            Bliss
          </h4>
          <div className="grid grid-cols-2 lg:flex py-5 gap-1 lg:gap-4">
            <div className="bg-teal-700 px-4 py-2 font-semibold text-white font-barlow uppercase text-sm lg:text-lg">
              HTML
            </div>
            <div className="bg-teal-700 px-4 py-2 font-semibold text-white font-barlow uppercase text-sm lg:text-lg">
              CSS
            </div>
            <div className="bg-teal-700 px-4 py-2 font-semibold text-white font-barlow uppercase text-sm lg:text-lg">
              Javascript
            </div>
            <div className="bg-teal-700 px-4 py-2 font-semibold text-white font-barlow uppercase text-sm lg:text-lg">
              Bootstrap
            </div>
          </div>
          {/* beschrijving */}
          <p
            className="bg-white lg:mt-6 max-w-[520px] font-barlow text-sm lg:text-lg leading-relaxed
              tracking-wide text-gray-700"
          >
            Een website gemaakt voor een lokale restaurant. Gebouwd met enkel
            HTML, CSS en Bootstrap. Bootstrap's grid systeem is gebruikt om de
            site responsief te maken en Bootstrap componenten zijn gebruikt om
            interactieve elementen aan de site toe te voegen.
          </p>
          {/* links */}
          <div className="md:flex  gap-10">
            <div className="flex mt-4 lg:mt-10">
              <a
                href="https://quincy-fer.github.io/Bliss---Restaurant/"
                target="_blank"
                className="bg-teal-400  text-white px-8 py-4 lg:text-xl 
             font-barlow font-bold hover:bg-teal-500 transition-all flex gap-2 lg:pb-6"
              >
                Live Site
                <svg
                  className="w-8"
                  viewBox="-1.92 -1.92 67.84 67.84"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke-width="3.84"
                  stroke="#ffffffff"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"></path>
                    <path d="M37.86,51.1A47,47,0,0,1,32,56.7"></path>
                    <path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"></path>
                    <path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"></path>
                    <line x1="10.37" y1="19.9" x2="53.75" y2="19.9"></line>
                    <line x1="32" y1="6.99" x2="32" y2="56.7"></line>
                    <line x1="11.05" y1="45.48" x2="37.04" y2="45.48"></line>
                    <line x1="7.14" y1="32.46" x2="56.86" y2="31.85"></line>
                    <path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"></path>
                  </g>
                </svg>
              </a>
            </div>
            <div className="flex mt-4 lg:mt-10">
              <a
                href="https://github.com/Quincy-Fer/Bliss---Restaurant"
                target="_blank"
                className="text-teal-400 bg-white border-4 border-teal-400 px-8 py-4 lg:text-xl 
             font-barlow font-bold hover:bg-teal-800 hover:text-teal-200 transition-all flex gap-2"
              >
                Bekijk Code
                <svg
                  className="w-8"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#2dd4bf"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>github [#142]</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-140.000000, -7559.000000)"
                        fill="#2dd4bf"
                      >
                        {" "}
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          {" "}
                          <path
                            d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                            id="github-[#142]"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* afbeelding */}
        <img
          src={bliss}
          alt="image for gym website project"
          className="max-sm:w-[800px] max-sm:h-[150px] mt-6 
          lg:w-full lg:h-full shadow-md border border-black  box-shadow"
        />
      </div>
    </section>
  );
};

export default Projects;
