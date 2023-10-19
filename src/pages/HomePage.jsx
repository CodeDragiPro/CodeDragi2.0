import React from 'react';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
   <PageTransition>
      <Hero />
      <Expertise />
      <Portfolio />
      <Contact/>
      <Experience/>
    </PageTransition>
  );
};

export default Home;
