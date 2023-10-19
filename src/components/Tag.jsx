import React from 'react';

const Tag = ({ text }) => {
  return (
    <span className="bg-codedragi-blue text-white font-semi-bold rounded-full px-2 py-1 my-auto">
      {text}
    </span>
  );
};

export default Tag;
