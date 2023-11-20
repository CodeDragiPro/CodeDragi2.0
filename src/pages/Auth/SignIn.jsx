import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Config/AuthContext';

import Button from '../../components/ui/Button';
import Toast from '../../components/ui/Toast';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      // Si la connexion réussit, affichez le toast de succès
      Toast({ type: 'success', message: 'Connexion réussie!' });
      setTimeout(() => {
        // Redirigez l'utilisateur vers la page du compte
        navigate('/dashboard');
      }, 2000);
    } catch (e) {
      // Si la connexion échoue, affichez le toast d'erreur
      Toast({ type: 'error', message: 'Erreur d\'authentification.' });
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className='h-screen flex items-center justify-center'>

      <div className='max-w-[600px] w-full mx-4 bg-codedragi-gray rounded-md text-white'>
        <div className='p-8'>
          <h1 className='text-2xl font-bold py-2 text-codedragi-blue'>Se connecter</h1>
          <form onSubmit={handleSubmit} autoComplete="on" ref={form} id='signIn form'>
            <div className='flex flex-col py-2'>
              <label className='py-2 font-medium'>Addresse Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className='border p-2 focus:outline-none text-codedragi-gray' type='email' required/>
            </div>
            <div className='flex flex-col py-2'>
              <label className='py-2 font-medium'>Mot de passe</label>
              <input onChange={(e) => setPassword(e.target.value)} className='border p-2 focus:outline-none text-codedragi-gray' type='password' required />
            </div>
            <Button text="Connexion"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
