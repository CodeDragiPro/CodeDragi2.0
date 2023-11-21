import React from 'react';

import IconSkills from './ui/IconSkills'; 
import TitlesCategory from './ui/TitlesCategory';

import { FaReact, FaCss3, FaDatabase, FaHtml5, FaJs, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator, SiFirebase, SiMysql } from "react-icons/si";

const skillsIcons = [
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

const Skills = () => {
  return (
    <div className="py-8 text-white w-full p-4 text-center" id="skills">
      <div className=' py-8 text-4xl '>
        <TitlesCategory text="Skills" exponent="4"/>
      </div>

      <p className="font-bold  ">
      Explorez une mosaïque de technologies modernes avec lesquelles je jongle pour créer des solutions numériques innovantes.
          </p>
      <div className="flex flex-wrap justify-center items-center w-full">
        {skillsIcons.map((skill, index) => (
          <IconSkills key={index} icon={skill.icon} text={skill.text} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
