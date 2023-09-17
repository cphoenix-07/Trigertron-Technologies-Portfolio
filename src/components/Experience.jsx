import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { findDOMNode } from "react-dom";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const cardRef = useRef(null);
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const card = findDOMNode(cardRef.current);
    const cardRect = card.getBoundingClientRect();
    const centerX = cardRect.left + cardRect.width / 2;
    const centerY = cardRect.top + cardRect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    cardX.set(mouseX * -0.02);
    cardY.set(mouseY * -0.02);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <motion.div
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
      style={{ borderColor: "#232631", borderWidth: "7px", borderStyle: "solid", width: "calc(33.33% - 20px)", margin: "10px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <motion.div
        style={{ x: cardX, y: cardY }}
      >
        <div className="flex justify-center items-center h-[150px]">
          <motion.img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[100%] h-[100%] object-contain rounded-full"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-2xl font-bold">{experience.title}</h3>
        </div>
        <p className="mt-4 text-base text-gray-400">{experience.points}</p>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What we have to offer
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Our Services.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
