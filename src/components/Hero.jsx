
import HeroImage from "../assets/Hero.png";
import { FaTimes } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { useRef , useState} from "react";

 function Hero(){

  const heroRef = useRef(null);
  const [showAbout, setShowAbout] = useState(false);

  useGSAP(() => {
    gsap.from(".hero-title", {
      x: -50,          
      opacity: 0,       
      duration: 1,       
      ease: "power2.out",  
    });

    gsap.from(".hero-description",{
      y:30,
      opacity:0,
      duration:1,
      delay:0.5,
      ease:"power2.out",
    })

  gsap.fromTo(
  ".hero-button",
  {
    x: 50,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1,
    delay: 1,
    ease: "power2.out",
  }
);
  }, []);
  return (
    <section ref={heroRef} className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <p className="hero-greeting">Hi, my name is Thuraya</p>
          {/* <h1 className="hero-title">Front-End Developer</h1> */}
          <h1 className="hero-title ">
        Hi, I'm Thuraya
      </h1>
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
              friendly web applications using HTML, CSS, JavaScript, and React. Skilled in working with REST APIs, Axios, and modern 
              UI libraries such as Tailwind CSS and shadcn/ui. Proven ability to work effectively in a team, meet deadlines, 
              and adapt to new technologies. Strong attention to detail and a commitment to delivering clean, maintainable 
              code. Continuously improving through self-learning and real-world projects.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
