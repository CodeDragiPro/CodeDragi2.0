import React from 'react';

import { BsArrowRightSquareFill } from 'react-icons/bs';

const VisitButton = ({ to }) => {
  return (
    <button className=" bg-codedragi-blue text-white font-semi-bold rounded-full px-2 py-2 my-auto mx-auto">
      <a  className='flex' href={to}>Visiter en direct <span> <BsArrowRightSquareFill size={20} className='m-1 animate-bounce'/></span></a>
    </button>
  );
};

export default VisitButton;
