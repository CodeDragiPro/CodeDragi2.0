import React from 'react';
import BackgroundVideo from '../assets/backgroundVideo.mp4';
import { AiFillPhone } from 'react-icons/ai'; // Importez l'icône de téléphone
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="object-cover w-full h-full absolute top-0 left-0 z-10"
        autoPlay
        loop
        muted
        poster={BackgroundVideo}
      >
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold z-20">
        <div className="max-w-screen-xl p-4">
          <h1 className="text-8xl lg:text-9xl font-Montserrat">CODE DRAGI</h1>
          <p className="mt-4 text-xl lg:text-2xl text-code">GRAPHISTE // DEVELOPPEUR WEB & FRONT-END</p>
          <button className="mt-8 flex items-center text-white text-lg p-2 border-codedragi-blue border-2 rounded-3xl mx-auto">
            <AiFillPhone className="mr-2" />
            <a href="tel:+123456789" className="text-white">07.62.26.61.95</a> 
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-center font-bold z-20 w-full">
        <FaArrowDown className="animate-bounce mx-auto mb-10 text-2xl" />
      </div>
    </div>
  );
};

export default Hero;
