import React from "react";
import pulsefit from "../assets/images/pulse-fit.png";

const Projects = () => {
  return (
    <section className="px-48">
      <h2 className="text-center font-montserrat font-bold  text-5xl text-gray-800 py-10 ">
        Projecten
      </h2>
      {/* project 1 */}
      <div className="grid grid-cols-2 h-[360px] mt-16">
        {/* informatie project */}
        <div className="">
          <h4 className="text-gray-800 font-bold uppercase text-3xl font-montserrat">
            Pulse-Fit
          </h4>
          <div className="flex py-5 gap-4">
            <div className="bg-teal-700 px-4 py-2 font-semibold text-white font-barlow uppercase text-lg">
              Next.js
            </div>
            <div className="bg-teal-700 px-4 py-2 font-semibold text-white font-barlow uppercase text-lg">
              React
            </div>
            <div className="bg-teal-700 px-4 py-2 font-semibold text-white font-barlow uppercase text-lg">
              Typescript
            </div>
            <div className="bg-teal-700 px-4 py-2 font-semibold text-white font-barlow uppercase text-lg">
              Tailwind
            </div>
          </div>
          <p>omschrijving</p>

          <div className="flex">
            <button>live website</button>
            <button>Github</button>
          </div>
        </div>
        {/* afbeelding */}
        <img
          src={pulsefit}
          alt="image for gym website project"
          className="w-full h-full shadow-md  box-shadow"
        />
      </div>
    </section>
  );
};

export default Projects;
