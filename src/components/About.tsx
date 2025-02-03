import React from "react";
import profiel from "../assets/images/profielfoto_enhanced.png";

const About = () => {
  return (
    <section className=" css-cut  ">
      <h2 className="text-center font-montserrat font-bold  text-5xl text-white py-10 mt-20 ">
        Over mij
      </h2>
      <div className=" pb-20 pt-14 pl-48  ">
        <div className="grid grid-cols-2 justify-center">
          <img src={profiel} alt="profielfoto" />
          <p>lala</p>
        </div>
      </div>
    </section>
  );
};

export default About;
