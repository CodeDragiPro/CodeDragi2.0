import React from "react";
import { Helmet } from "react-helmet";

import PageTransition from "../components/Design/PageTransition";

import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Experience from "../components/Experience";



const HomePage = () => {
  return (
    <PageTransition>
      <Helmet>
        <meta charset="UTF-8" />
        <title>Page d'accueil</title>
        <meta
          name="description"
          content="Présentation des différents services proposé par codedragi"
        />
        <meta
          name="keywords"
          content="développeur, designer, codedragi, CodeDragi, React, front-end,firebase,React Js,web developper,developper, portfolio,portfolio developpeur, portfolio developper"
        />
        <meta name="author" content="CodeDragi" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Hero />
      <div className="md:px-20">
        <Expertise />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    </PageTransition>
  );
};

export default HomePage;
