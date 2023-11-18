import React from "react";

const TitlesCategory = ({ text, exponent }) => {
  return (
    <p className="relative inline-block font-bold  text-white">
      <span>{text}</span>
      <sup className="absolute top-[-0.1em] right-[-0.5em]  text-codedragi-blue">
        {exponent}
      </sup>
    </p>
  );
};

export default TitlesCategory;
