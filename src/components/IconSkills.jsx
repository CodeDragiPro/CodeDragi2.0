import React from 'react';

const IconSkills = ({ icon, text }) => {
  return (
    <div className="px-2 mt-4 text-center">
          {icon}
          <p className="text-white font-bold mt-2">{text}</p>
        </div>
  );
};

export default IconSkills;
