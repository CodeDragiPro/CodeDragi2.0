import React from "react";
import { Link, useParams } from "react-router-dom";
import portfolioData from "../data/data.json";
import PageTransition from "../components/PageTransition";
import VisitButton from "../components/VisitButton";
import Tag from "../components/Tag";
import BrandGuideline from "../components/BrandGuideline";
import { formatDate } from "../utils/utils";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";

const PortfolioContent = () => {
  const { projectId } = useParams();
  const projectIndex = portfolioData.findIndex(
    (item) => item.id === parseInt(projectId)
  );

  if (projectIndex === -1) {
    return <div>Portfolio non trouvé</div>;
  }
  const project = portfolioData.find((item) => item.id === parseInt(projectId));
  const prevProject = projectIndex > 0 ? portfolioData[projectIndex - 1] : null;
  const nextProject =
    projectIndex < portfolioData.length - 1
      ? portfolioData[projectIndex + 1]
      : null;
  if (!project) {
    return <div>Portfolio non trouvé</div>;
  }

  return (
    <PageTransition>
      <div className="py-20  text-white p-4 ">
        <h1 className="text-4xl font-bold uppercase">{project.title}</h1>
        <hr className="my-2" />
        <div className="lg:flex lg:items-start">
          <div className="lg:w-1/2 lg:pr-4 mt-2">
            <div className="flex justify-between md:w-1/2 py-1">
              <span className=" text-codedragi-blue font-bold">Catégorie</span>
              <p>{project.type}</p>
            </div>

            <div className="flex justify-between md:w-1/2 py-1">
              <span className=" text-codedragi-blue font-bold">Date</span>
              <p>{formatDate(project.date)}</p>
            </div>

            <div className="flex justify-between md:w-1/2 py-1">
              <span className="text-codedragi-blue font-bold flex justify-between">
                Technologie
              </span>
              <div>
                {project.categories.map((category) => (
                  <Tag key={category} text={category} />
                ))}
              </div>
            </div>

            <div className="flex justify-between md:w-1/2 py-1">
              <span className=" text-codedragi-blue font-bold">Client</span>
              <p>{project.client}</p>
            </div>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="flex justify-between">
              <p className="font-bold text-justify">{project.description}</p>
            </div>
            <div className="flex justify-between  p-2">
              <VisitButton to={`https:${project.link}`} />
            </div>
          </div>
        </div>
        <div className="py-8">
          <h1 className="text-2xl font-bold uppercase pb-2">Graphisme</h1>
          <hr className="my-2" />

          <div className="lg:flex lg:items-start">
            <div className="lg:w-1/2 lg:pr-4 mt-2 ">
              <div className="flex justify-between md:w-1/2">
                <span className=" text-codedragi-blue font-bold">Police</span>
                <p>Montserrat</p>
              </div>

              <div className="flex justify-between md:w-1/2">
                <span className=" text-codedragi-blue font-bold">
                  Charte Graphique
                </span>
                <div className="flex">
                  {project.brand.map((brand) => (
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
          {project.images.map((poster, index) => (
            <div key={index} bottom duration={1000 * (index + 1)}>
              <img
                src={poster}
                alt={`Poster ${index}`}
                className="my-4 md:w-3/4 mx-auto"
              />
            </div>
          ))}
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-medium">
            {prevProject ? (
              <Link to={`/portfolio/${prevProject.id}`}>
                {projectIndex === 0 ? (
                  <span className="text-slate-500">Projet Précèdent</span>
                ) : (
                  <>
                    <div className="flex items-center">
                      <BsArrowLeftSquareFill className="text-codedragi-blue" />
                      <p className="mx-2">Projet Précèdent</p>
                    </div>
                  </>
                )}
              </Link>
            ) : (
              <div className="flex items-center text-gray-500">
                <BsArrowLeftSquareFill className="text-gray-500" />
                <p className="mx-2">Projet Précèdent</p>
              </div>
            )}
            {nextProject ? (
              <Link to={`/portfolio/${nextProject.id}`}>
                {projectIndex === portfolioData.length - 1 ? (
                  <span style={{ color: "gray" }}>Projet Suivant</span>
                ) : (
                  <>
                    <div className="flex items-center">
                      <p className="mx-2">Projet Suivant</p>
                      <BsArrowRightSquareFill className="text-codedragi-blue" />
                    </div>
                  </>
                )}
              </Link>
            ) : (
              <div className="flex items-center text-gray-500">
                <p className="mx-2">Projet Suivant</p>
                <BsArrowRightSquareFill className="text-gray-500" />
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PortfolioContent;
