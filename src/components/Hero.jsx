import HeroImage from "../assets/Hero.png"; 
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        

        <div className="hero-text">
          <p className="hero-greeting">Hi, my name is THURAYA</p>
          <h1 className="hero-title">Front-End Developer</h1>
          <p className="hero-description">
            I love crafting beautiful web experiences and responsive interfaces 
          </p>
          <button className="hero-button">About Me</button>
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
    </section>
  );
};

export default Hero;
