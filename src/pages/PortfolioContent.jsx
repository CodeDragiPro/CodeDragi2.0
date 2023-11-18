import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  query,
  getDocs,
} from "firebase/firestore/lite";
import { db } from "../Config/firebase";
import { Helmet } from "react-helmet";

import Tag from "../components/ui/Tag";
import VisitButton from "../components/ui/VisitButton";
import BrandGuideline from "../components/ui/BrandGuideline";
import PageTransition from '../components/Design/PageTransition';


const PortfolioContent = () => {
  const { id } = useParams(); 
  const [portfolio, setPortfolio] = useState(null);
  const [prevProject, setPrevProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const portfolioDoc = doc(db, "portfolio", id);
        const portfolioSnapshot = await getDoc(portfolioDoc);
        if (portfolioSnapshot.exists()) {
          const portfolioData = {
            id: portfolioSnapshot.id,
            ...portfolioSnapshot.data(),
          };
          setPortfolio(portfolioData);

          const projectsQuery = query(collection(db, "portfolio"));
          const projectsSnapshot = await getDocs(projectsQuery);
          const projects = [];
          projectsSnapshot.forEach((projectDoc) => {
            const projectData = {
              id: projectDoc.id,
              ...projectDoc.data(),
            };
            projects.push(projectData);
          });

          const currentIndex = projects.findIndex(
            (project) => project.id === id
          );

          if (currentIndex > 0) {
            setPrevProject(projects[currentIndex - 1]);
          }
          if (currentIndex < projects.length - 1) {
            setNextProject(projects[currentIndex + 1]);
          }
        } else {
          console.error("Le portfolio avec l'ID spécifié n'existe pas.");
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de Firebase:",
          error
        );
      }
    };
    fetchPortfolio();
  }, [id]);

  return (
    <PageTransition>
       <Helmet>
    <meta charset="UTF-8"/>
    <title>Portfolio</title>
    <meta name="description" content="Portfolio de CodeDragi" />
    <meta name="keywords" content="développeur, designer, codedragi, CodeDragi, React, front-end,firebase,React Js,web developper,developper, portfolio,portfolio developpeur, portfolio developper"/>
    <meta name="author" content="CodeDragi"/>
    <meta name="robots" content="index, follow"/>
      </Helmet>
    <div className="py-20 md:mx-20  text-white p-4 ">
      {portfolio ? (
        <div>
          <p className="text-4xl font-bold uppercase">{portfolio.title}</p>
          <hr className="my-2" />
          <div className="flex justify-between md:w-1/2 py-1">
            <span className=" text-codedragi-blue font-bold">Catégorie</span>
            <p>{portfolio.selectedTypes}</p>
          </div>
          <div className="flex justify-between md:w-1/2 py-1">
            <span className=" text-codedragi-blue font-bold">Date</span>
            <p>{portfolio.date.toDate().toLocaleDateString()}</p>
          </div>
          <div className="flex justify-between md:w-1/2 py-1">
            <span className="text-codedragi-blue font-bold flex justify-between">
              Technologie
            </span>
            <div>
              {portfolio.selectedCategories.map((category, index) => (
                <Tag key={index} text={category} />
              ))}
            </div>
          </div>
          <div className="flex justify-between md:w-1/2 py-1">
            <span className=" text-codedragi-blue font-bold">Client</span>
            <p>{portfolio.client}</p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="flex justify-between">
              <p className="font-bold text-justify">{portfolio.description}</p>
            </div>
            <div className="flex justify-between  p-2">
              <VisitButton to={`https:${portfolio.link}`} />
            </div>
          </div>
          <div className="py-8">
            <h1 className="text-2xl font-bold uppercase pb-2">Graphisme</h1>
            <hr className="my-2" />
            <div className="lg:flex lg:items-start">
              <div className="lg:w-1/2 lg:pr-4 mt-2 ">
                <div className="flex justify-between md:w-1/2">
                  <span className=" text-codedragi-blue font-bold">Police</span>
                  <p>{portfolio.font}</p>
                </div>
                <div className="flex justify-between md:w-1/2">
                  <span className=" text-codedragi-blue font-bold">
                    Charte Graphique
                  </span>
                  <div className="flex">
                    {portfolio.brands.map((brand) => (
                      <BrandGuideline key={brand} color={brand} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8">
            <h1 className="text-2xl font-bold uppercase">Captures</h1>
            <hr className="my-2" />
            {portfolio.images.map((poster, index) => (
              <div key={index}>
                <img
                  src={poster}
                  alt={`Poster ${index}`}
                  className="my-4 md:w-3/4 mx-auto"
                />
              </div>
            ))}
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-medium">
            {prevProject ? (
              <Link to={`/portfolio/${prevProject.id}`}>
                <span className="text-white">Projet Précédent</span>
              </Link>
            ) : (
              <span className="text-gray-500">Projet Précédent</span>
            )}
            {nextProject ? (
              <Link to={`/portfolio/${nextProject.id}`}>
                <span>Projet Suivant</span>
              </Link>
            ) : (
              <span className="text-gray-500">Projet Suivant</span>
            )}
          </div>
        </div>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
    </PageTransition>
  );
};

export default PortfolioContent;
