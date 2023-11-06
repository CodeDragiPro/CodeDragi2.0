import React, { useState } from "react";
import { updateDoc, doc } from "firebase/firestore/lite";
import { db } from "../firebase";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PortfolioEditModal = ({ portfolio, closeModal, updatePortfolio }) => {
  const [updatedPortfolio, setUpdatedPortfolio] = useState({ ...portfolio });
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleUpdatePortfolio = async () => {
    try {
      const portfolioDocRef = doc(db, "portfolio", updatedPortfolio.id);
      const updatedData = {
        title: updatedPortfolio.title,
        client: updatedPortfolio.client,
        brands: updatedPortfolio.brands,
        font: updatedPortfolio.font,
        description: updatedPortfolio.description,
        link: updatedPortfolio.link,
        images: updatedPortfolio.images,
        date: selectedDate,
        selectedCategories: updatedPortfolio.selectedCategories,
        selectedTypes: updatedPortfolio.selectedTypes,
      };

      await updateDoc(portfolioDocRef, updatedData);
      updatePortfolio(updatedData);
      closeModal();
    } catch (error) {
      console.error("Erreur lors de la mise à jour du document :", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg max-w-md overflow-y-scroll max-h-screen">
        <h2 className="text-2xl font-semibold mb-4 text-codedragi-blue text-center">
          Modifier le Portfolio
        </h2>
        <div className="p-2">
          <label
            htmlFor="title"
            className="text-lg font-bold text-codedragi-blue"
          >
            Titre :
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-2 border border-codedragi-blue rounded focus:outline-none bg-gray-900"
            value={updatedPortfolio.title}
            onChange={(e) =>
              setUpdatedPortfolio({
                ...updatedPortfolio,
                title: e.target.value,
              })
            }
          />
        </div>
        <div className="p-2">
          <label
            htmlFor="client"
            className="text-lg font-bold text-codedragi-blue"
          >
            Client :
          </label>
          <input
            type="text"
            id="client"
            className="w-full p-2 border border-codedragi-blue rounded focus:outline-none bg-gray-900"
            value={updatedPortfolio.client}
            onChange={(e) =>
              setUpdatedPortfolio({
                ...updatedPortfolio,
                client: e.target.value,
              })
            }
          />
        </div>
        <div className="p-2">
          <label className="text-lg font-bold text-codedragi-blue">
            Brand :
          </label>
          {updatedPortfolio.brands.map((color, index) => (
            <div key={index} className="flex items-center space-x-2 mt-2">
              <input
                type="text"
                id={`brand-${index}`}
                className="w-20 p-2 border border-codedragi-blue rounded focus:outline-none bg-gray-900"
                value={color}
                onChange={(e) => {
                  const newBrands = [...updatedPortfolio.brands];
                  newBrands[index] = e.target.value;
                  setUpdatedPortfolio({
                    ...updatedPortfolio,
                    brands: newBrands,
                  });
                }}
              />
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: color,
                }}
              ></div>
            </div>
          ))}
        </div>
        <div className="p-2">
          <label
            htmlFor="font"
            className="text-lg font-bold text-codedragi-blue"
          >
            Font :
          </label>
          <input
            type="text"
            id="font"
            className="w-full p-2 border border-codedragi-blue rounded focus:outline-none bg-gray-900"
            value={updatedPortfolio.font}
            onChange={(e) =>
              setUpdatedPortfolio({ ...updatedPortfolio, font: e.target.value })
            }
          />
        </div>
        <div className="p-2">
          <label
            htmlFor="description"
            className="text-lg font-bold text-codedragi-blue"
          >
            Description :
          </label>
          <textarea
            id="description"
            className="w-full p-2 border border-codedragi-blue rounded focus:outline-none bg-gray-900"
            value={updatedPortfolio.description}
            onChange={(e) =>
              setUpdatedPortfolio({
                ...updatedPortfolio,
                description: e.target.value,
              })
            }
          />
        </div>
        <div className="p-2">
          <label
            htmlFor="link"
            className="text-lg font-bold text-codedragi-blue"
          >
            Lien :
          </label>
          <input
            type="text"
            id="link"
            className="w-full p-2 border border-codedragi-blue rounded focus:outline-none bg-gray-900"
            value={updatedPortfolio.link}
            onChange={(e) =>
              setUpdatedPortfolio({ ...updatedPortfolio, link: e.target.value })
            }
          />
        </div>
        <div className="p-2">
          <label className="text-lg font-bold text-codedragi-blue">Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="w-full p-2 border border-codedragi-blue rounded mx-2 focus:outline-none bg-gray-900"
          />
        </div>
        
        <div className="p-2">
          <label className="text-lg font-bold text-codedragi-blue">
            Catégories :
          </label>
          {updatedPortfolio.selectedCategories.map((category, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={category}
                className="w-4 h-4 text-codedragi-blue"
                checked={category}
                onChange={() => {
                  const newCategories = [
                    ...updatedPortfolio.selectedCategories,
                  ];
                  newCategories[index] = !newCategories[index];
                  setUpdatedPortfolio({
                    ...updatedPortfolio,
                    selectedCategories: newCategories,
                  });
                }}
              />
              <label htmlFor={category} className="text-lg text-codedragi-blue">
                {category}
              </label>
            </div>
          ))}
        </div>
        <div className="p-2">
          <label className="text-lg font-bold text-codedragi-blue">
            Type :
          </label>
          {updatedPortfolio.selectedTypes.map((type, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={type}
                className="w-4 h-4 text-codedragi-blue"
                checked={type}
                onChange={() => {
                  const newTypes = [...updatedPortfolio.selectedTypes];
                  newTypes[index] = !newTypes[index];
                  setUpdatedPortfolio({
                    ...updatedPortfolio,
                    selectedTypes: newTypes,
                  });
                }}
              />
              <label htmlFor={type} className="text-lg text-codedragi-blue">
                {type}
              </label>
            </div>
          ))}
        </div>
        <div className="flex space-x-4 mt-4 p-2">
          <button
            onClick={handleUpdatePortfolio}
            className="bg-codedragi-blue text-white p-2 rounded hover:bg-gray-900"
          >
            Enregistrer les modifications
          </button>
          <button
            onClick={closeModal}
            className="bg-red-500 text-white p-2 rounded hover:bg-gray-900"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioEditModal;
