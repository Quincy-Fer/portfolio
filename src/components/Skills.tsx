import React from "react";

const Skills = () => {
  return (
    <section className="bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-300 ">
      <h2 className="text-center font-montserrat font-bold  text-4xl text-white py-10 ">
        Vaardigheden
      </h2>
      <div className="flex flex-col gap-8 px-48 py-10 ">
        <div className="flex">
          <p className="text-white text-xl font-barlow font-bold">
            Programmeertalen:
          </p>
          <p>lala</p>
        </div>
        <div className="flex">
          <p className="text-white text-xl font-barlow font-bold">
            Libraries & Frameworks:
          </p>
          <p>lalala</p>
        </div>
        <div className="flex">
          <p className="text-white text-xl font-barlow font-bold">Tools:</p>
          <p>lalala</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
