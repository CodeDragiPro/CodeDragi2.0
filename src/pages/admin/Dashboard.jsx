import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { UserAuth } from "../../Config/AuthContext";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ReactApexChart from "react-apexcharts";
import { FaPlus, FaUsers } from "react-icons/fa6";
import avatar from "../../assets/avatar.jpg";
import Button from "../../components/ui/Button";
import NoteModal from "../../components/ui/NoteModale";
import { RiGalleryUploadFill } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";

const Dashboard = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const [portfolioData, setPortfolioData] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const db = getFirestore();
        const portfolioCollection = collection(db, "portfolio");
        const portfolioSnapshot = await getDocs(portfolioCollection);

        const data = [];
        portfolioSnapshot.forEach((doc) => {
          data.push(doc.data());
        });

        setPortfolioData(data);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      }
    };

    const updateDateTime = () => {
      const now = new Date();

      const formattedDate = format(now, "dd MMMM yyyy", { locale: fr });

      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");

      const formattedTime = `${hours}:${minutes}:${seconds}`;

      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    };

    const intervalId = setInterval(updateDateTime, 1000);

    fetchPortfolioData();

    return () => clearInterval(intervalId);
  }, []);

  const generateChartData = () => {
    if (!portfolioData || portfolioData.length === 0) {
      return {
        series: [],
        options: {
          labels: [],
          colors: ["#FF6384", "#36A2EB", "#FFCE56"],
          legend: {
            show: false,
          },
        },
      };
    }

    const typeCounts = {};
    const typeNames = {};

    portfolioData.forEach((portfolio) => {
      const types = portfolio.selectedTypes || [];
      types.forEach((type) => {
        typeCounts[type] = (typeCounts[type] || 0) + 1;
        typeNames[type] = type;
      });
    });

    const chartLabels = Object.keys(typeCounts);

    return {
      series: chartLabels.map((label) => typeCounts[label]),
      options: {
        labels: chartLabels.map((label) => typeNames[label]),
        colors: ["#FF6384", "#36A2EB", "#FFCE56"],
        legend: {
          show: false,
        },
      },
    };
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/signin");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="md:h-screen h-full  mx-4 md:flex text-white mt-20">
      {/* CONTAINER DROITE */}
      <div className=" flex flex-col md:w-full">
        {/* Carte utilisateur */}
        <div className=" flex flex-col items-center md:pr-4  text-center">
          <div className="bg-codedragi-gray rounded-md w-full h-full  md:mx-2 my-2 flex flex-col items-center mt-4 ">
            <div className="p-2">
              <h1 className="text-2xl font-bold text-codedragi-blue mb-4">
                CodeDragi
              </h1>
              <img
                src={avatar}
                className="w-36 h-36  object-cover rounded-full border-2 border-white mb-2"
              />
              <Button text="Déconnexion" onClick={handleLogout} />
            </div>
          </div>

          {/* Date */}
          <div className="bg-codedragi-gray rounded-md w-full md:mx-2 my-2 p-2">
            <h1 className="text-xl font-bold text-codedragi-blue ">
              Nous sommes le :
            </h1>
            <p className="font-bold text-2xl">{currentDate}</p>
          </div>

          {/* Heure */}
          <div className="bg-codedragi-gray rounded-md w-full md:mx-2 my-2 p-2">
            <h1 className="text-xl font-bold text-codedragi-blue ">Il est :</h1>
            <p className="font-bold text-2xl">{currentTime}</p>
          </div>

          {/* Ajouter une note */}
          <div className="bg-codedragi-gray rounded-md w-full md:mx-2 my-2 p-2">
            <h1 className="text-2xl font-bold text-codedragi-blue">
              Ajouter une note
            </h1>
          </div>

          {/* Bouton ajouter une note */}
          <div className=" rounded-md w-full md:mx-2 my-2 p-2">
            <button
              className="bg-codedragi-gray p-4 rounded-full"
              onClick={openModal}
            >
              <FaPlus className="text-codedragi-blue font-bold" size={24} />
            </button>
          </div>
          <NoteModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>

      {/* CONTAINER GAUCHE */}
      <div className=" flex flex-col w-full h-full md:order-first">
        <div className=" md:flex block items-center justify-center text-center  md:p-2">
          {/* Nombre de portfolio */}
          <div className="bg-codedragi-gray rounded-md md:w-64 w-full h-64 flex flex-col items-center justify-evenly md:mx-2 my-2">
            <h1 className="text-xl font-bold text-codedragi-blue mb-4">
              Nombre de portfolios
            </h1>
            <h2 className="text-8xl font-bold">{portfolioData.length}</h2>
          </div>

          {/* Statistique portfolio */}
          <div className="bg-codedragi-gray rounded-md md:w-64 w-full md:h-64 p-4 h-full md:mx-2 my-2 flex flex-col items-center justify-evenly">
            <h1 className="text-xl font-bold text-codedragi-blue">
              Répartition des types de portfolios
            </h1>
            <ReactApexChart
              type="donut"
              series={generateChartData().series}
              options={generateChartData().options}
            />
          </div>

          {/* Dernier portfolio */}
          <div className="bg-codedragi-gray rounded-md md:w-64 w-full h-64 flex flex-col items-center justify-evenly md:mx-2 my-2">
            <h1 className="text-xl font-bold text-codedragi-blue mb-4">
              Dernier portfolio
            </h1>
            <p className="text-2xl font-bold">12 Janvier 2023</p>
          </div>
        </div>

        <div className=" md:flex block items-center justify-between text-center px-2">
          {/* Ajouter un nouveau portfolio */}
          <div className="bg-codedragi-gray rounded-md md:w-64 w-full h-64 flex flex-col items-center justify-evenly md:mx-2 my-2">
            <h1 className="text-xl font-bold text-codedragi-blue mb-4">
              Ajouter un portfolio
            </h1>
            <Link to="/dashboard/new" className="bg-[#1e1e1e] rounded-full p-4">
              <RiGalleryUploadFill className="text-codedragi-blue text-6xl" />
            </Link>
          </div>

          <div className="bg-codedragi-gray rounded-md md:w-64 w-full h-64 flex flex-col items-center justify-evenly md:mx-2 my-2">
            <h1 className="text-xl font-bold text-codedragi-blue mb-4">
              Liste des portfolios
            </h1>
            <Link
              to="/dashboard/list"
              className="bg-[#1e1e1e] rounded-full p-4"
            >
              <FaClipboardList className="text-codedragi-blue text-6xl" />
            </Link>
          </div>

          <div className="bg-codedragi-gray rounded-md md:w-64 w-full h-64 flex flex-col items-center justify-evenly md:mx-2 my-2">
            <h1 className="text-xl font-bold text-codedragi-blue mb-4">
              Liste des clients
            </h1>
            <Link
              to="/dashboard/list"
              className="bg-[#1e1e1e] rounded-full p-4"
            >
              <FaUsers className="text-codedragi-blue text-6xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
