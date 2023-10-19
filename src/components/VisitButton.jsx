import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const VisitButton = ({ to }) => {
  return (
    <button className=" bg-codedragi-blue text-white font-semi-bold rounded-full px-2 py-2 my-auto mx-auto">
      <a  className='flex' href={to}>Visiter en direct <span> <AiOutlineArrowRight size={20} className='ml-2 animate-bounce'/></span></a>
    </button>
  );
};

export default VisitButton;
