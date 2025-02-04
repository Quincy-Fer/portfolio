import React from "react";
import Button from "./Button";
import ButtonBorder from "./ButtonBorder";
import { motion } from "framer-motion";

// animation

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.7, // Delay between each element
    },
  },
};

const itemVariants = {
  hidden: { x: "-100vw", opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className=" p-16  lg:p-48  background-pattern " id="home">
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <motion.h1
          className="bg-white lg:max-w-[600px] font-montserrat font-bold text-4xl  lg:text-6xl text-gray-800 
          leading-tight tracking-tighter max-sm:mt-10"
          variants={itemVariants}
        >
          Hi, ik ben <span className="text-teal-400"> Quincy.</span>
          <br />
          Frontend developer |
        </motion.h1>
        <motion.p
          className="bg-white mt-6 lg:mt-10 lg:max-w-[520px] font-barlow text-base  lg:text-xl leading-relaxed
          tracking-wide text-gray-700 "
          variants={itemVariants}
        >
          Ik ben een gepassioneerde webontwikkelaar gespecialiseerd in het maken
          van visueel 🎨 aantrekkelijke websites. Ik hou van het oplossen van
          problemen 🧩 en met behulp van code 👨‍💻 creatieve ideeën tot leven
          brengen!
        </motion.p>
        <motion.div className="flex gap-20 mt-6  lg:mt-12 " variants={itemVariants}>
          <Button />
          <div className="hidden md:flex">
            <ButtonBorder />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
