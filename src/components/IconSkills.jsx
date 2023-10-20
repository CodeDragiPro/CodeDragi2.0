import React from 'react';

const IconSkills = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center p-4">
      {icon}
      <p className="text-white font-bold text-xs mt-2">{text}</p>
    </div>
  );
};

export default IconSkills;
