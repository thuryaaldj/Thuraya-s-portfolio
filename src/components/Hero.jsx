import { useState } from "react";
import HeroImage from "../assets/Hero.png";
import { FaTimes } from "react-icons/fa";

const Hero = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <section className="hero-section">
      <div className="hero-container">

        <div className="hero-text">
          <p className="hero-greeting">Hi, my name is thuraya</p>
          <h1 className="hero-title">Front-End Developer</h1>
          <p className="hero-description">
            I love crafting beautiful web experiences and responsive interfaces 
          </p>
          <button className="hero-button" onClick={() => setShowAbout(true)}>
            About Me
          </button>
        </div>

        <div className="hero-image-container">
          <img
            src={HeroImage}
            alt="Developer"
            width={440}
            height={679}
            className="hero-image"
          />
        </div>
      </div>

      {showAbout && (
        <div className="modal-overlay">
          <div className="modal-content about">
            <button className="close-button" onClick={() => setShowAbout(false)}>
              <FaTimes />
            </button>
            <h3 className="modal-title">About Me</h3>
            <p className="modal-description">
              Motivated and passionate front-end developer with solid experience in building responsive and user
friendly web  
applications using HTML, CSS, JavaScript, and React. Skilled in working with REST APIs, Axios, and modern 
UI  
libraries such as Tailwind CSS and shadcn/ui. Proven ability to work effectively in a team, meet deadlines, 
and adapt to  
new technologies. Strong attention to detail and a commitment to delivering clean, maintainable 
code. Continuously improving through self-learning and real-world projects.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
