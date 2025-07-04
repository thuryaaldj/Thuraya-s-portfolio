import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import skills from "../skills.json";

const WhatIDo = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? skills.skills : skills.skills.slice(0, 8);

  return (
    <section id="whatido" className="whatido-section">
      <div className="whatido-header text-center mb-6">
        <h2 className="whatido-title">What I do</h2>
        <p className="whatido-subtitle">
          as a front end developer
        </p>
      </div>

      <div className="skills-wrapper">
        {visibleSkills.map(({ id, name, img }) => (
          <motion.div
            key={id}
            className="skill-card group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: id * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              <img
                src={img}
                alt={name}
                className="w-20 h-20 object-contain mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
              />
              <p className="skill-title">{name}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        {showAll ? (
          <motion.button
            onClick={() => setShowAll(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2 bg-gray-200 text-black rounded-full shadow-md hover:bg-gray-300 transition mx-auto"
          >
            <span>See Less</span>
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <FiChevronUp className="w-5 h-5" />
            </motion.span>
          </motion.button>
        ) : (
          <motion.button
            onClick={() => setShowAll(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition mx-auto"
          >
            <span>See More</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <FiChevronDown className="w-5 h-5" />
            </motion.span>
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default WhatIDo;
