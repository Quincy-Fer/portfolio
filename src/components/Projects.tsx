import React from "react";
import pulsefit from '../assets/images/pulse-fit.png'

const Projects = () => {
  return (
    <section className="px-48">
      <h2 className="text-center font-montserrat font-bold  text-5xl text-gray-800 py-10 ">
        Projecten
      </h2>
      {/* project 1 */}
      <div className="grid grid-cols-2 h-[360px]">
        <div>
          <h4>lalalalalalalalalala</h4>
          <p>lala</p>
          <h4>lalalalalalalalalala</h4>
          <h4>lalalalalalalalalala</h4>
          <h4>lalalalalalalalalala</h4>
          <h4>lalalalalalalalalala</h4>
          <h4>lalalalalalalalalala</h4>
          <h4>lalalalalalalalalala</h4>
          <h4>lalalalalalalalalala</h4>
          <h4>lalalalalalalalalala</h4>
          <h4>lalalalalalalalalala</h4>
          <h4>lalalalalalalalalala</h4>
          
        </div>
        <img src={pulsefit} alt="" className="w-full h-full" />
     
        
      </div>
    </section>
  );
};

export default Projects;
