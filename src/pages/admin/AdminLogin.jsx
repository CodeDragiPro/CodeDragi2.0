import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Logo from'../../assets/logoWeb.png';

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleSignIn = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Authentification réussie!");
        toast.success('Authentification réussie !', { position: toast.POSITION.BOTTOM_RIGHT });
        setTimeout(() => {
          navigate('/admin');
        }, 2000); 
      })
      .catch((error) => {
        setError(error.message); 
        toast.error(`Erreur d'authentification : ${error.message}`, { position: toast.POSITION.BOTTOM_RIGHT });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
    <img src={Logo}/>
        <h2 className="text-2xl font-semibold mb-4 text-center">Authentification</h2>
        <input
          type="text"
          placeholder="Adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded p-2 mb-2 focus:outline-none text-codedragi-pink font-semibold"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded p-2 mb-4 focus:outline-none text-codedragi-pink"
        />
        <button
          className="w-full bg-codedragi-pink text-white rounded p-2 hover:bg-blue-600"
          onClick={handleSignIn}
        >
          Se connecter
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <ToastContainer />
      </div>
    </div>
  );
};

export default AdminLogin;
