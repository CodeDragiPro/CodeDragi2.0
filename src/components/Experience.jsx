import React from 'react';
import { FaReact, FaCss3, FaDatabase, FaHtml5, FaJs, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator, SiFirebase, SiMysql } from "react-icons/si";
import IconSkills from './IconSkills'; 
import TitlesCategory from './TitlesCategory';

const skills = [
  { icon: <FaHtml5 className="text-codedragi-blue" size="3rem" />, text: 'HTML5' },
  { icon: <FaCss3 className="text-codedragi-blue" size="3rem" />, text: 'CSS' },
  { icon: <FaJs className="text-codedragi-blue" size="3rem" />, text: 'JavaScript' },
  { icon: <FaReact className="text-codedragi-blue" size="3rem" />, text: 'React' },
  { icon: <FaNodeJs className="text-codedragi-blue" size="3rem" />, text: 'Node.js' },
  { icon: <FaDatabase className="text-codedragi-blue" size="3rem" />, text: 'MongoDB' },
  { icon: <SiMysql className="text-codedragi-blue" size="3rem" />, text: 'MySql' },
  { icon: <SiFirebase className="text-codedragi-blue" size="3rem" />, text: 'Firebase' },
  { icon: <SiAdobephotoshop className="text-codedragi-blue" size="3rem" />, text: 'Photoshop' },
  { icon: <SiAdobeillustrator className="text-codedragi-blue" size="3rem" />, text: 'Illustrator' },
  { icon: <FaFigma className="text-codedragi-blue" size="3rem" />, text: 'Figma' },
];

const Experience = () => {
  return (
    <div className="py-8 text-white text-justify p-4" id="skills">
      <div className=' py-8 text-4xl text-center'>
        <TitlesCategory text="Skills" exponent="5"/>
      </div>
      <p className="font-bold md:w-1/2 w-full mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab
            nesciunt pariatur incidunt dolor placeat dignissimos vero
            praesentium qui magni aperiam quam, provident quas assumenda. Quas
            ducimus amet impedit debitis!
          </p>
      <div className="flex flex-wrap justify-center items-center">
        {skills.map((skill, index) => (
          <IconSkills key={index} icon={skill.icon} text={skill.text} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
