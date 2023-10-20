import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">Erreur 404</h1>
        <p className="text-xl text-white py-4">La page que vous recherchez est introuvable.</p>
        <Link to="/" className="px-6 py-2 bg-codedragi-blue text-black font-bold rounded-full hover:bg-codedragi-blue transition duration-300 ease-in-out">Retour à l'accueil</Link>
      </div>
    </div>
  );
}

export default ErrorPage;
