import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { UserAuth } from "../../Config/AuthContext";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ReactApexChart from "react-apexcharts";
import { FaPlus } from "react-icons/fa6";

import avatar from "../../assets/avatar.jpg";
import Button from "../../components/ui/Button";

const Dashboard = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const [portfolioData, setPortfolioData] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

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
  return (
    <div className="md:h-screen h-full">
      {/* Section gauche */}
      <div className="flex md:flex-row flex-col-reverse py-20 text-white p-2 text-center">
        {/* Partie nombre de portfolios */}
        <div className="p-2 md:w-1/3">
          <div className="bg-gray-900 h-1/2 rounded-sm p-4 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-codedragi-blue mb-4">
              Nombre de portfolios
            </h1>
            <h2 className="text-8xl font-bold">{portfolioData.length}</h2>
          </div>
        </div>
        {/* Partie graphique portfolio */}
        <div className="p-2 md:w-1/3">
          <div className="bg-gray-900 h-1/2 rounded-sm p-4 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-codedragi-blue mb-4">
              Répartition des types de portfolios
            </h1>
            <ReactApexChart
              type="donut"
              series={generateChartData().series}
              options={generateChartData().options}
            />
          </div>
        </div>
        {/* Partie Dernier portfolio*/}
        <div className="p-2 md:w-1/3">
          <div className="bg-gray-900 h-1/2 rounded-sm p-4 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-codedragi-blue mb-4">
              Dernier portfolio
            </h1>
            <p className="text-4xl font-bold">12 Janvier 2023</p>
          </div>
        </div>
        {/* Section Droite */}
        <div className="p-2 md:w-1/3">
          {/* Partie carte utilisateur */}
          <div className="bg-gray-900 h-1/2 rounded-sm p-4 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-codedragi-blue mb-4">
              CodeDragi
            </h1>
            <img
              src={avatar}
              className="w-36 h-36  object-cover rounded-full border-2 border-white mb-2"
            />
            <Button text="Déconnexion" onClick={handleLogout} />
          </div>
          {/* Partie date */}
          <div className="bg-gray-900  rounded-sm p-4 flex flex-col items-center justify-center mt-4">
            <h1 className="text-xl font-bold text-codedragi-blue mb-4">
              Nous sommes le :
            </h1>
            <div className="bg-[#02050a] p-2 rounded-md">
              <p className="font-bold text-xl">{currentDate}</p>
            </div>
          </div>
          {/* Partie heure */}
          <div className="bg-gray-900  rounded-sm p-4 flex flex-col items-center justify-center mt-4">
            <h1 className="text-xl font-bold text-codedragi-blue mb-4">
              Il est :
            </h1>
            <div className="bg-[#02050a] p-2 rounded-md">
              <p className="font-bold text-xl">{currentTime}</p>
            </div>
          </div>

          {/* Partie ajouter un portfolio */}
          <div className="bg-gray-900  rounded-sm p-4 flex flex-col items-center justify-center mt-4">
            <h1 className="text-2xl font-bold text-codedragi-blue">
              Ajouter une note
            </h1>
          </div>

          <div className=" p-4 flex flex-col items-center justify-center mt-4">
            <button className="bg-codedragi-gray p-4 rounded-full">
              <FaPlus className="text-codedragi-blue font-bold" size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
