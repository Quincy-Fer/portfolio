import React from "react";
import pulsefit from '../assets/images/pulse-fit .png'

const Projects = () => {
  return (
    <section className="px-48">
      <h2 className="text-center font-montserrat font-bold  text-5xl text-gray-800 py-10 ">
        Projecten
      </h2>
      {/* project 1 */}
      <div className="flex justify-evenly gap-20">
        <div>
          <h4>lala</h4>
          <p>lala</p>
        </div>
        <img src={pulsefit} alt="" />
        
      </div>
    </section>
  );
};

export default Projects;
