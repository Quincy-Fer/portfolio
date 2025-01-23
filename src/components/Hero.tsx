import React from "react";
import Button from "./Button";
import ButtonBorder from "./ButtonBorder";

const Hero = () => {
  return (
    <section className="p-48  background-pattern  ">
      <h1
        className="bg-white max-w-[600px] font-montserrat font-bold  text-6xl text-gray-800 
      leading-tight tracking-tighter"
      >
        Hoi, ik ben <span className="text-teal-400"> Quincy.</span>
        <br />
        Frontend developer |
      </h1>
      <p
        className="bg-white mt-10 max-w-[520px] font-barlow text-xl leading-relaxed
       tracking-wide text-gray-700 "
      >
        Ik ben een gepassioneerde webontwikkelaar gespecialiseerd in het maken
        van  visueel 🎨 aantrekkelijke websites. Ik hou van het oplossen van
        problemen 🧩 en met behulp van code 👨‍💻 creatieve ideeën tot leven
        brengen!
      </p>
      <div className="flex gap-20 mt-12 ">
        <Button />
        <ButtonBorder />
      </div>
    </section>
  );
};

export default Hero;
