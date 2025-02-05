import React from "react";
import profiel from "../assets/images/profielfoto_enhanced.png";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="css-cut" id="over-mij">
      <motion.h2 className="text-center font-montserrat font-bold text-3xl  lg:text-5xl text-white py-10 mt-20 "
      ref={ref}
      initial={{ y: 100, opacity: 0 }} // Starts below and invisible
      animate={isInView ? { y: 0, opacity: 1 } : {}} // Moves up when in view
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      >
        Over mij
      </motion.h2>
      <div className=" lg:pb-20 pt-10 lg:pl-48 p-16  ">
        <div className="grid grid-cols-1 lg:grid-cols-2  pb-40 md:justify-items-center lg:justify-items-start">
          <img
            src={profiel}
            alt="profielfoto"
            className=" rounded-full bg-cover md:w-[400px] md:h-[400px] lg:w-[580px] lg:h-[580px] border-4 border-white"
          />
          <div>
            {" "}
            <p
              className="text-white mt-10 max-w-[520px] font-montserrat text-lg  
        "
            >
              Ik ben Quincy, een frontend developer met een passie voor het
              maken van mooie en gebruiksvriendelijke websites ! Ik hou ervan om
              te puzzelen met design en functionaliteit totdat het plaatje
              compleet is. Ik ben altijd nieuwsgierig naar nieuwe technologieën
              en blijf mijzelf uitdagen om beter te worden en slimme, creatieve
              oplossingen te bedenken. <br />
              <br />
              Naast coderen ben ik ook een creatieve geest met een passie voor
              gamen, tekenen en lezen. Of ik nu op ga in een virtuele wereld 🎮,
              mijn ideeën tot leven breng op papier 📝 of me verdiep in een goed
              boek 📕 – ik haal inspiratie uit alles om me heen. Werken als
              frontend developer draait voor mij om ontdekken, leren en het
              omzetten van ideeën naar iets tastbaars.
            </p>
            <a
              href="https://www.wikipedia.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="mt-10 font-barlow px-6 py-3 font-semibold bg-white text-teal-400 text-xl
                hover:text-white hover:bg-teal-700  transition-all max-sm:mb-12 "
              >
                Bekijk mijn CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
