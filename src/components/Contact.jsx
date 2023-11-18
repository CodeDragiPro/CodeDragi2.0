import React, { useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

import TitlesCategory from "./ui/TitlesCategory";
import avatar from '../assets/avatar.jpg';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const userID = import.meta.env.VITE_EMAIL_USER_ID;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm(serviceID, templateID, form.current, userID).then(
      function (response) {
        console.log("E-mail envoyé", response);
        toast.success('E-mail envoyé avec succès');
      },
      function (error) {
        console.error("Erreur lors de l'envoi de l'e-mail", error);
        toast.error('Erreur lors de l\'envoi de l\'e-mail');
      }
    );
  };
  
  useEffect(() => {
    emailjs.init(userID);
  }, []);

  return (
    <div className="text-white py-8 md:flex p-4 flex-col items-center justify-center text-center" id="contact">
      <div></div>
      <div className="w-full  mb-4 ">
        <div className="py-8 text-4xl">
          <TitlesCategory text="Contact" exponent="5" />
        </div>
        <p className="font-bold">
          Prêt à discuter de votre prochain projet ? Contactez-moi pour échanger des idées et faire de votre vision une réalité numérique.
        </p>
        <div>
          <h2 className="text-xl font-bold py-4">Mes informations personnelles :</h2>
          <div className="bg-gray-900 p-4 rounded-lg text-center">

          <img
            src={avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-white"
          />
          <div className="text-xl">
          <p className="">codedragipro@gmail.com</p>
          <p className="mb-4">07.62.26.61.95</p>
          </div>
       
       </div>
        </div>
      </div>
      <div className="w-full ">
        <div>
          <form ref={form} id="contact-form" onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="user_name" className="block text-codedragi-blue font-bold mb-2 text-left">
                Nom:
              </label>
              <input
                type="text"
                id="user_name"
                name="from_name"
                className="w-full p-2 bg-gray-900 text-white border border-codedragi-blue rounded outline-none"
                placeholder="Votre nom"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-codedragi-blue font-bold mb-2 text-left">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full p-2 bg-gray-900 text-white border border-codedragi-blue rounded outline-none"
                placeholder="Votre email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-codedragi-blue font-bold mb-2 text-left">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 bg-gray-900 text-white border border-codedragi-blue rounded outline-none"
                placeholder="Votre message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-codedragi-blue text-white font-bold py-2 px-4 rounded hover-bg-codedragi-blue-dark transition duration-300"
            >
              Envoyer
            </button>
          </form>
          <ToastContainer position="top-right" autoClose={3000} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
