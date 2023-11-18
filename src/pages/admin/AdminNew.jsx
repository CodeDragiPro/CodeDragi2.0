import React, { useRef, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../Config/firebase";
import { addDoc, collection } from "firebase/firestore/lite";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminNew = () => {
  const titleRef = useRef();
  const clientRef = useRef();
  const brandRefs = useRef(Array(3).fill(null).map(() => React.createRef()));
  const fontRef = useRef();
  const descriptionRef = useRef();
  const linkRef = useRef();
  const imageRef = useRef();

  
  const types = ["Développement web", "Web Design", "Graphisme"];
  const typeRefs = types.map(() => useRef());

  const categories = ["Javascript", "React Js", "Tailwind Css"];
  const categoryRefs = categories.map(() => useRef());

  const [selectedDate, setSelectedDate] = useState(null);
  const [brandColors, setBrandColors] = useState(Array(3).fill(""));

  const handleBrandColorChange = (index) => {
    const newColor = brandRefs.current[index].current.value;
    const updatedColors = [...brandColors];
    updatedColors[index] = newColor;
    setBrandColors(updatedColors);
  };

  const submitPortfolio = (e) => {
    e.preventDefault();
    toast.info("Envoi des données en cours", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000, 
    });
    const title = titleRef.current.value;
    const client = clientRef.current.value;
    const brands = brandColors;
    const font = fontRef.current.value;
    const description = descriptionRef.current.value;
    const link = linkRef.current.value;
    const images = imageRef.current.files;
    const date = selectedDate;


    const selectedCategories = categoryRefs
      .map((ref, index) => ({
        ref: ref,
        category: categories[index],
      }))
      .filter((category) => category.ref.current.checked)
      .map((category) => category.category);

    const selectedTypes = typeRefs
      .map((ref, index) => ({
        ref: ref,
        type: types[index],
      }))
      .filter((type) => type.ref.current.checked)
      .map((type) => type.type);

    const imageUploadPromises = [];
    for (const image of images) {
      const storageRef = ref(storage, `portfolio/${image.name}`);
      const uploadPromise = uploadBytes(storageRef, image);
      imageUploadPromises.push(uploadPromise);
    }

    Promise.all(imageUploadPromises)
      .then((snapshots) => {
        const downloadUrls = snapshots.map((snapshot) =>
          getDownloadURL(snapshot.ref)
        );
        return Promise.all(downloadUrls);
      })
      .then((downloadUrls) => {
        const imageUrls = downloadUrls.map((url) => url);
        savePortfolio({
          title,
          client,
          brands,
          font,
          description,
          link,
          images: imageUrls,
          date,
          selectedCategories,
          selectedTypes,
        });
       
      
      })
      
      .catch((error) => {
        console.error(error);
        savePortfolio({
          title,
          client,
          brands,
          font,
          description,
          link,
          images: [],
          date,
          resume,
          selectedCategories,
          selectedTypes,
        });
       
      });
  };

  const savePortfolio = async (portfolio) => {
    try {
      await addDoc(collection(db, "portfolio"), portfolio);
      setTimeout(() => {
        navigate('/admin/list');
      }, 500); 
      toast.success("Données envoyées avec succès", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Failed to add portfolio", error);
      toast.error("Une erreur s'est produite lors de l'envoi", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="max-w-screen-md mx-auto py-20 p-4">
      <h1 className="text-codedragi-blue text-center font-bold py-2 text-2xl">Ajouter un Portfolio</h1>
      <form onSubmit={submitPortfolio} className="space-y-4  bg-gray-900 border border-codedragi-blue p-8 rounded">
        <div>
          <label htmlFor="title" className="text-lg font-bold text-codedragi-blue">
            Titre :
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-2  rounded focus:outline-none bg-gray-900 border-codedragi-blue border-2 text-white"
            ref={titleRef}
          />
        </div>
        <div>
          <label htmlFor="client" className="text-lg font-bold text-codedragi-blue">
            Client :
          </label>
          <input
            type="text"
            id="client"
            className="w-full p-2 rounded focus:outline-none bg-gray-900 border-codedragi-blue border-2 text-white"
            ref={clientRef}
          />
        </div>
        <div>
          <label className="text-lg font-bold text-codedragi-blue">Charte Graphique :</label>
          {brandColors.map((color, index) => (
            <div key={index} className="flex items-center space-x-2 mt-2">
              <input
                type="text"
                id={`brand-${index}`}
                className="w-20 p-2 rounded focus:outline-none bg-gray-900 border-codedragi-blue border-2 text-white"
                ref={brandRefs.current[index]}
                placeholder="#FFFFFF"
                onChange={() => handleBrandColorChange(index)}
              />
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: color,
                }}
              ></div>
            </div>
          ))}
        </div>
        <div>
          <label htmlFor="font" className="text-lg font-bold text-codedragi-blue">
            Font :
          </label>
          <input
            type="text"
            id="font"
            className="w-full p-2 rounded focus:outline-none bg-gray-900 border-codedragi-blue border-2 text-white"
            ref={fontRef}
          />
        </div>
        <div>
          <label htmlFor="description" className="text-lg font-bold text-codedragi-blue">
            Description :
          </label>
          <textarea
            id="description"
            className="w-full p-2 rounded focus:outline-none bg-gray-900 border-codedragi-blue border-2 text-white"
            ref={descriptionRef}
          />
        </div>
        <div>
          <label htmlFor="images" className="text-lg font-bold text-codedragi-blue">
            Images :
          </label>
          <input
            type="file"
            id="images"
            className="w-full p-2 border-2 border-codedragi-blue rounded text-white focus:outline-none bg-gray-900"
            ref={imageRef}
            multiple
          />
        </div>
        <div>
          <label htmlFor="link" className="text-lg font-bold text-codedragi-blue">
            Lien :
          </label>
          <input
            type="text"
            id="link"
            className="w-full p-2 rounded focus:outline-none bg-gray-900 border-codedragi-blue border-2 text-white"
            ref={linkRef}
          />
        </div>
        <div>
          <label className="text-lg font-bold text-codedragi-blue">Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Sélectionner une date"
            className="w-full p-2 rounded mx-2 focus:outline-none bg-gray-900 border-codedragi-blue border-2 text-white"
          />
        </div>
        <div>
          <label className="text-lg font-bold text-codedragi-blue">Catégories :</label>
          {categories.map((category, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={category}
                ref={categoryRefs[index]}
                className="w-4 h-4 text-codedragi-blue"
              />
              <label htmlFor={category} className="text-lg text-codedragi-blue">
                {category}
              </label>
            </div>
          ))}
        </div>
        <div>
          <label className="text-lg font-bold text-codedragi-blue">Type :</label>
          {types.map((type, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={type}
                ref={typeRefs[index]}
                className="w-4 h-4 text-codedragi-blue"
              />
              <label htmlFor={type} className="text-lg text-codedragi-blue">
                {type}
              </label>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-codedragi-blue text-white p-2 rounded hover:bg-gray-900 hover:border-codedragi-blue"
        >
          Envoyer
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default AdminNew;
