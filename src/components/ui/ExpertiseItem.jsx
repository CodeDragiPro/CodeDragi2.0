import React from 'react';

const ExpertiseItem = ({ title, description, backgroundImage }) => {
  return (
    <div className="w-60 h-60 md:w-80 md:h-80 bg-black border border-white mx-2 md:mx-4 my-4 text-center flex flex-col justify-center relative hover:opacity-70">
      <div className="object-cover w-full h-full" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="text-white absolute inset-0 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-codedragi-blue">{title}</h2>
        <p className='p-4'>{description}</p>
      </div>
    </div>
  );
};

export default ExpertiseItem;
