import React from "react";
import TitlesCategory from "./TitlesCategory";

const Contact = () => {
  return (
    <div className=" text-white py-8 md:flex p-4">
      <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
        <div className="py-8 text-4xl md:text-left text-center">
          <TitlesCategory text="Contact" exponent="4" />
        </div>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          omnis fuga necessitatibus veritatis molestiae vitae molestias, quas ea
          sapiente perspiciatis qui voluptatibus animi asperiores numquam iusto
          recusandae explicabo esse ducimus?
        </p>
        <div>
          <h2 className="text-xl font-bold py-4">
            Mes informations personnelles :
          </h2>
          <div className="border-2 rounded border-codedragi-blue mt-2">
            <input
              type="text"
              className="w-full bg-black p-2  text-codedragi-blue  rounded mb-2 outline-none"
              value="codedragipro@gmail.com"
              readOnly
            />
            <input
              type="text"
              className="w-full bg-black p-2  text-codedragi-blue  rounded mb-2 outline-none"
              value="0762266195"
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:pl-4">
        <div>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-codedragi-blue font-bold mb-2"
              >
                Nom:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 bg-gray-900 text-white border border-codedragi-blue rounded outline-none"
                placeholder="Votre nom"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-codedragi-blue font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 bg-gray-900 text-white border border-codedragi-blue rounded outline-none"
                placeholder="Votre email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-codedragi-blue font-bold mb-2"
              >
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
              className="bg-codedragi-blue text-white font-bold py-2 px-4 rounded hover:bg-codedragi-blue-dark transition duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
