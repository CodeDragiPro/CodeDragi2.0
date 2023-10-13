import React from 'react';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Expertise />
      <Portfolio />
      <Contact/>
    </div>
  );
};

export default Home;
