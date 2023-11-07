import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logoWeb.png';
import PageTransition from "../../components/PageTransition";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault(); 
  
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Authentification réussie!");
  
        localStorage.setItem("authenticated", "true");
  
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
    <PageTransition>
    <div className="flex items-center justify-center min-h-screen  p-4">
      <div className="max-w-md w-full bg-gray-900 border border-codedragi-blue p-8 rounded shadow-lg">
        <img src={Logo} alt="Logo" className="w-44 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-4 text-codedragi-blue text-center">Authentification</h2>
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            placeholder="Adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded p-2 mb-2 focus:outline-none text-codedragi-blue font-semibold bg-gray-900 border-codedragi-blue border-2"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded p-2 mb-4 focus:outline-none text-codedragi-blue bg-gray-900 border-codedragi-blue border-2"
          />
          <button
            type="submit" 
            className="w-full bg-codedragi-blue text-white rounded p-2 hover-bg-blue-600"
          >
            Se connecter
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <ToastContainer />
      </div>
    </div>
    </PageTransition>
  );
};

export default AdminLogin;
