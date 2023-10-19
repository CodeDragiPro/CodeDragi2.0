import React from 'react';
import { FaReact, FaCss3, FaDatabase, FaHtml5, FaJs, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator, SiFirebase, SiMysql } from "react-icons/si";
import IconSkills from './IconSkills'; 

const skills = [
  { icon: <FaHtml5 className="text-codedragi-blue" size="4rem" />, text: 'HTML5' },
  { icon: <FaCss3 className="text-codedragi-blue" size="4rem" />, text: 'CSS' },
  { icon: <FaJs className="text-codedragi-blue" size="4rem" />, text: 'JavaScript' },
  { icon: <FaReact className="text-codedragi-blue" size="4rem" />, text: 'React' },
  { icon: <FaNodeJs className="text-codedragi-blue" size="4rem" />, text: 'Node.js' },
  { icon: <FaDatabase className="text-codedragi-blue" size="4rem" />, text: 'MongoDB' },
  { icon: <SiMysql className="text-codedragi-blue" size="4rem" />, text: 'MySql' },
  { icon: <SiFirebase className="text-codedragi-blue" size="4rem" />, text: 'Firebase' },
  { icon: <SiAdobephotoshop className="text-codedragi-blue" size="4rem" />, text: 'Photoshop' },
  { icon: <SiAdobeillustrator className="text-codedragi-blue" size="4rem" />, text: 'Illustrator' },
  { icon: <FaFigma className="text-codedragi-blue" size="4rem" />, text: 'Figma' },
];

const Experience = () => {
  return (
    <div className="backdrop-blur-sm" id="section-skills">
      <h1 className="mx-auto font-bold font-Montserrat text-4xl text-white text-center pt-4">
        <span className="text-codedragi-blue">05</span> // SKILLS
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        {skills.map((skill, index) => (
          <IconSkills key={index} icon={skill.icon} text={skill.text} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
