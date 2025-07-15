import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useEffect, useRef } from "react";
import gsap from "gsap";
// import "./styles.css";

const MyProjectCard = ({ image, title, description, githubLink, liveLink }) => {
  const cardRef = useRef(null);
  const githubRef = useRef(null);
  const liveRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    const github = githubRef.current;
    const live = liveRef.current;

    tl.set([github, live], { opacity: 0, y: 20 });

    tl.to([github, live], {
      opacity: 1,
      y: 0,
      duration: 0.4,
      // ease: "power3.out",
      stagger: 0.1,
    });

    const card = cardRef.current;
    // const onEnter = () => tl.play();
    // const onLeave = () => tl.reverse();

    // card.addEventListener("mouseenter", onEnter);
    // card.addEventListener("mouseleave", onLeave);
    card.addEventListener("mouseenter", () => tl.play());
    card.addEventListener("mouseleave", () => tl.reverse());


    return () => {
      // card.removeEventListener("mouseenter", onEnter);
      // card.removeEventListener("mouseleave", onLeave);
      card.removeEventListener("mouseenter", () => tl.play());
      card.removeEventListener("mouseleave", () => tl.reverse());
    };
  }, []);

  return (
    <div ref={cardRef} className="my-project-card">
      <img src={image} alt={title} className="my-project-card-image" />

      <div className="p-6 flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <div className="project-icons">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          ref={githubRef}
          className="project-icon"
        >
          <FiGithub size={20} />
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          ref={liveRef}
          className="project-icon"
        >
          <FiExternalLink size={20} />
        </a>
      </div>
    </div>
  );
};

export default MyProjectCard;
