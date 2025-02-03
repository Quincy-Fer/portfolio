import React from "react";
import profiel from "../assets/images/profielfoto_enhanced.png";

const About = () => {
  return (
    <section className=" css-cut ">
      <h2 className="text-center font-montserrat font-bold  text-5xl text-white py-10 mt-20 ">
        Over mij
      </h2>
      <div className=" pb-20 pt-10 pl-48  ">
        <div className="grid grid-cols-2  pb-40 justify-items-start">
          <img
            src={profiel}
            alt="profielfoto"
            className="rounded-full bg-cover w-[580px] h-[580px] border-4 border-white"
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
              en blijf mezelf uitdagen om beter te worden en slimme, creatieve
              oplossingen te bedenken. <br />
              <br />
              Naast coderen ben ik ook een creatieve geest et een passie voor
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
                hover:text-white hover:bg-teal-700  transition-all"
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
