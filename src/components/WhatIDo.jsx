import reactImg from "../assets/react.svg";
import tailwindImg from "../assets/tailwind.png";
import apiImg from "../assets/restapi.png";
import zustandImg from "../assets/zustand.png";
import responsiveImg from "../assets/responsive.png";

const skills = [
  {
    name: "React",
    img: reactImg,
  },
  {
    name: "Tailwind CSS",
    img: tailwindImg,
  },
  {
    name: "REST API",
    img: apiImg,
  },
  {
    name: "Zustand",
    img: zustandImg,
  },
  {
    name: "Responsive Design",
    img: responsiveImg,
  },
];

const WhatIDo = () => {
  return (
    <section id="whatido" className="whatido-section">
      <div className="whatido-header text-center mb-6">
        <h2 className="whatido-title text-3xl font-bold">What I do</h2>
        <p className="whatido-subtitle text-gray-600">as a front end developer</p>
      </div>

      <div className="skills-wrapper grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col items-center group">
            <img
              src={skill.img}
              alt={skill.name}
              className="w-24 h-24 object-contain mb-2 transition-transform duration-300 group-hover:scale-110"
            />
            <p className="text-center text-base font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
