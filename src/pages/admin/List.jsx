import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  doc,
  deleteDoc,
} from "firebase/firestore/lite";
import { db } from "../../Config/firebase";
import { confirmAlert } from "react-confirm-alert";
import { toast, ToastContainer } from "react-toastify";
import "react-confirm-alert/src/react-confirm-alert.css";
import "react-toastify/dist/ReactToastify.css";
import PortfolioEditModal from "../../components/ui/PortfolioEditModale";
import { FaTrash, FaEdit } from "react-icons/fa";

const List = () => {
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedPortfolioId, setSelectedPortfolioId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "portfolio"));
        const querySnapshot = await getDocs(q);
        const items = [];
        querySnapshot.forEach((doc) => {
          const id = doc.id;
          const documentData = doc.data();
          documentData.id = id;
          items.push(documentData);
        });
        setData(items);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données des portfolios :",
          error
        );
      }
    };
    fetchData();
  }, []);

  const handleDeleteDocument = async (documentId) => {
    confirmAlert({
      title: "Confirmer la suppression",
      message: "Êtes-vous sûr de vouloir supprimer ce portfolio ?",
      buttons: [
        {
          label: "Oui",
          onClick: async () => {
            try {
              const documentReference = doc(db, "portfolio", documentId);
              await deleteDoc(documentReference);
              setData((prevData) =>
                prevData.filter((item) => item.id !== documentId)
              );
              toast.success("Portfolio supprimé avec succès", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
              });
            } catch (error) {
              console.error(
                "Erreur lors de la suppression du document :",
                error
              );
            }
          },
        },
        {
          label: "Non",
          onClick: () => {},
        },
      ],
    });
  };

  const handleEditDocument = (portfolioId) => {
    setSelectedPortfolioId(portfolioId);
  };

  const updatePortfolio = (updatedPortfolio) => {
    setData((prevData) =>
      prevData.map((portfolio) =>
        portfolio.id === updatedPortfolio.id ? updatedPortfolio : portfolio
      )
    );
    setSelectedItems([]);
    toast.success("Portfolio modifié avec succès", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };

  const toggleItem = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const deleteSelectedItems = async () => {
    confirmAlert({
      title: "Confirmer la suppression",
      message:
        "Êtes-vous sûr de vouloir supprimer les portfolios sélectionnés ?",
      buttons: [
        {
          label: "Oui",
          onClick: async () => {
            try {
              const deletePromises = selectedItems.map((itemId) => {
                const documentReference = doc(db, "portfolio", itemId);
                return deleteDoc(documentReference);
              });
              await Promise.all(deletePromises);
              setData((prevData) =>
                prevData.filter((item) => !selectedItems.includes(item.id))
              );
              setSelectedItems([]);
              toast.success("Portfolios supprimés avec succès", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
              });
            } catch (error) {
              console.error(
                "Erreur lors de la suppression des documents :",
                error
              );
            }
          },
        },
        {
          label: "Non",
          onClick: () => {},
        },
      ],
    });
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className=" h-screen mx-auto mt-20 text-white p-2 overflow-x-auto">
      <table className="w-full bg-codedragi-gray text-white text-center">
        <thead>
          <tr className="bg-[#1e1e1e] text-codedragi-blue font-bold">
            <th className="border-2 border-gray-300 p-2">
              <input
                type="checkbox"
                checked={selectedItems.length === currentItems.length}
                onChange={() => {
                  if (selectedItems.length === currentItems.length) {
                    setSelectedItems([]);
                  } else {
                    setSelectedItems(currentItems.map((item) => item.id));
                  }
                }}
              />
            </th>
            {/* <th className="border-2 border-gray-300 p-2">Id</th> */}
            <th className="border-2 border-gray-300 p-2">Titre</th>
            <th className="border-2 border-gray-300 p-2">Client</th>
            <th className="border-2 border-gray-300 p-2">Date</th>
            <th className="border-2 border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id} className="text-codedragi-blue font-semibold">
              <td className="border-2 border-gray-300 p-2">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => toggleItem(item.id)}
                />
              </td>
              {/* <td className="border-2 border-gray-300 p-2">{item.id}</td> */}
              <td className="border-2 border-gray-300 p-2">{item.title}</td>
              <td className="border-2 border-gray-300 p-2">{item.client}</td>
              <td className="border-2 border-gray-300 p-2">
                {item.date.toDate().toLocaleDateString()}
              </td>
              <td className="border-2 border-gray-300 p-2 text-center">
                <button onClick={() => handleEditDocument(item.id)}>
                  <FaEdit className="text-codedragi-blue" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-white text-codedragi-blue font-bold rounded p-2"
          onClick={deleteSelectedItems}
          disabled={selectedItems.length === 0}
        >
          <FaTrash />
        </button>
        <div>
          {selectedPortfolioId && (
            <PortfolioEditModal
              portfolio={data.find((item) => item.id === selectedPortfolioId)}
              closeModal={() => setSelectedPortfolioId(null)}
              updatePortfolio={updatePortfolio}
            />
          )}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                className={`mx-1 py-1 px-3 rounded ${
                  currentPage === page
                    ? "bg-white text-codedragi-blue"
                    : "bg-white text-black"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
