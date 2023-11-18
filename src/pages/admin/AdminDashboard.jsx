import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../Config/firebase';
import { useNavigate, Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [portfolioCount, setPortfolioCount] = useState(0); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        fetchPortfolioCount();
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const fetchPortfolioCount = async () => {
    const portfolioCollection = collection(db, 'portfolio');
    const querySnapshot = await getDocs(portfolioCollection);
    const count = querySnapshot.size; 
    setPortfolioCount(count);
  };

  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      l
      navigate('/login'); 
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  };
  

  if (!user) {
    return (
      <div>
        <p>Vous n'êtes pas autorisé.</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-md mx-auto p-4 h-screen py-20">
      <div className="text-codedragi-pink text-2xl font-bold mb-4 text-center">
        Tableau de bord de l'administrateur
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-2xl font-bold text-codedragi-pink text-center mb-4">
          Bienvenue, {user.displayName || 'CODEDRAGI'}
        </p>
        <p className="text-center text-gray-600 mb-4">
          Vous êtes connecté en tant qu'administrateur.
        </p>
        <div className="text-center">
          <p className="text-3xl font-bold text-codedragi-blue">{portfolioCount}</p>
          <p className="text-gray-600">Portfolios au total</p>
        </div>
        <div className="mt-6">
          <div className="flex justify-center">
            <Link to="/admin/new" className="text-codedragi-blue hover:underline mr-4">
              Ajouter un nouveau portfolio
            </Link>
            <Link to="/admin/list" className="text-codedragi-blue hover:underline">
              Liste des Portfolios
            </Link>
          </div>
          <button
            className="bg-codedragi-blue text-white p-2 rounded hover:bg-blue-600 block mx-auto mt-4"
            onClick={handleSignOut}
          >
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
