import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../firebase';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [portfolioCount, setPortfolioCount] = useState(0); // Pour stocker le nombre de portfolios
  const [currentDateTime, setCurrentDateTime] = useState(new Date()); // Date et heure actuelles

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // Maintenant que l'utilisateur est authentifié, récupérons le nombre total de portfolios
        fetchPortfolioCount();
      } else {
        setUser(null);
      }
    });

    // Mettre à jour la date et l'heure actuelles toutes les secondes
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      unsubscribe();
      clearInterval(intervalId);
    };
  }, []);

  const fetchPortfolioCount = async () => {
    // Effectuez une requête pour obtenir le nombre de documents dans la collection "portfolio"
    const portfolioCollection = collection(db, 'portfolio');
    const querySnapshot = await getDocs(portfolioCollection);
    const count = querySnapshot.size; // Nombre de documents dans la collection
    setPortfolioCount(count);
  };

  if (!user) {
    return (
      <div>
        <p>Vous n'êtes pas autorisé.</p>
      </div>
    );
  }

  return (
    <div className='max-w-screen-md mx-auto p-4 h-screen py-20'>
      <h1 className='text-center text-codedragi-pink text-2xl font-bold'>Bienvenue CodeDragi</h1>
      <p className='text-white font-bold text-center'>
        Nous sommes le : {currentDateTime.toLocaleString()}
      </p>
      <p className='text-white font-bold text-center'>
        Nombre Total de portfolio : {portfolioCount} portfolios au total
      </p>
    </div>
  );
}

export default AdminDashboard;
