import React, { useEffect, useState } from "react";
import { collection, getDocs, query, doc, deleteDoc } from "firebase/firestore/lite";
import { db } from "../../firebase";
import { FaTrash, FaEdit } from "react-icons/fa";
import PortfolioEditModal from '../../components/PortfolioEditModale';
import { confirmAlert } from 'react-confirm-alert'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css'; 

const AdminList = () => {
  const [data, setData] = useState([]);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
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
    };

    fetchData();
  }, []);

  const handleDeleteDocument = async (documentId) => {
    confirmAlert({
      title: 'Confirmer la suppression',
      message: 'Êtes-vous sûr de vouloir supprimer ce portfolio ?',
      buttons: [
        {
          label: 'Oui',
          onClick: async () => {
            try {
              const documentReference = doc(db, "portfolio", documentId);
              await deleteDoc(documentReference);
              setData((prevData) => prevData.filter((item) => item.id !== documentId));

              toast.success("Portfolio supprimé avec succès", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000, 
              });
            } catch (error) {
              console.error("Erreur lors de la suppression du document :", error);
            }
          },
        },
        {
          label: 'Non',
          onClick: () => {},
        },
      ],
    });
  };

  const handleEditDocument = (portfolio) => {
    setSelectedPortfolio(portfolio);
  };

  const updatePortfolio = (updatedPortfolio) => {
    setData((prevData) =>
      prevData.map((portfolio) =>
        portfolio.id === updatedPortfolio.id ? updatedPortfolio : portfolio
      )
    );
    setSelectedPortfolio(null);
  
    toast.success("Portfolio modifié avec succès", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000, 
    });
  };

  return (
    <div className="h-screen text-white py-20">
      <table className="bg-gray-900 text-center">
        <thead>
          <tr>
            <th className="w-1/12 border border-codedragi-blue">ID</th>
            <th className="w-1/12 border border-codedragi-blue">Titre</th>
            <th className="w-1/12 border border-codedragi-blue">Client</th>
            <th className="w-1/12 border border-codedragi-blue">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-codedragi-blue font-semibold">
              <td className="border border-codedragi-blue">{item.id}</td>
              <td className="border border-codedragi-blue">{item.title}</td>
              <td className="border border-codedragi-blue">{item.client}</td>
              <td className="border border-codedragi-blue">
                <button onClick={() => handleEditDocument(item)}>
                  <FaEdit className="text-codedragi-blue mr-4" />
                </button>
                <button onClick={() => handleDeleteDocument(item.id)}>
                  <FaTrash className="text-codedragi-blue" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedPortfolio && (
        <PortfolioEditModal
          portfolio={selectedPortfolio}
          closeModal={() => setSelectedPortfolio(null)}
          updatePortfolio={updatePortfolio}
        />
      )}
       <ToastContainer />
    </div>
  );
};

export default AdminList;
