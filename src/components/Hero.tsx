import React from "react";

const Hero = () => {
  return (
    <section className="p-52 max-w-[1400px]">
      <h1 className="font-montserrat font-bold  text-6xl text-gray-800 leading-tight tracking-tighter">
        Hoi, ik ben <span className="text-teal-300"> Quincy.</span>
        <br />
        Een frontend developer |
      </h1>
      <p className="mt-12 max-w-[520px] text-xl">
        Ik ben een gepassioneerde webontwikkelaar gespecialiseerd in het maken
        van visueel aantrekkelijke websites. Ik hou van het oplossen van
        problemen en met behulp van code creatieve ideeën tot leven brengen!
      </p>
    </section>
  );
};

export default Hero;
