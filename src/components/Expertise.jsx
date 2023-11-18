import React from "react";

import TitlesCategory from "./ui/TitlesCategory";
import ExpertiseItem from '../components/ui/ExpertiseItem';

import WebDesignImg from '../assets/WebDesign.jpg';
import WebDevImg from '../assets/DevelopementWeb.jpg';
import SeoImg from '../assets/Seo.jpg';

const Expertise = () => {
  const expertiseItems = [
    {
      title: "MAQUETTE",
      description: "Transformez vos idées en réalité visuelle avec nos maquettes de qualité professionnelle.",
      image: WebDesignImg
    },
    {
      title: "DEVELOPPEMENT",
      description: "Transcendez les codes du numérique avec notre expertise en développement web.",
      image: WebDevImg
    },
    {
      title: "S.E.O",
      description: "Optimisez votre visibilité en ligne, dominez les moteurs de recherche et laissez votre empreinte numérique rayonner.",
      image: SeoImg
    },
  ];

  return (
    <div className="text-white flex flex-col p-4" id="expertise">
      <div className='py-8 text-4xl text-center'>
        <TitlesCategory text="Expertise" exponent="2" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center p-4">
        {expertiseItems.map((item, index) => (
          <ExpertiseItem
            key={index}
            title={item.title}
            description={item.description}
            backgroundImage={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Expertise;
