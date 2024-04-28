import React, { useState, useEffect } from "react";
import mainImg from "../assets/main.png";
import posImg from "../assets/pos.png";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-[100vh] min-w-[100vw] h-[100%] w-[100%] bg-gradient-to-b from-orange-100 to-orange-300 relative">
      <div
        className={`absolute top-[10%] right-[30%] w-[120px] md:w-[200px] lg:w-[300px] xl:w-[400px] transition-opacity duration-[2s] ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <img src={mainImg} alt="main-photo" className="w-full h-auto" />
      </div>
      <div
        className={`absolute bottom-0 left-0 w-[300px] md:w-[500px] lg:w-[700px] xl:w-[1200px] transition-transform duration-[2s] ${
          isLoaded ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <img src={posImg} alt="pos" className="w-full h-auto" />
      </div>
      <div
        className={`absolute top-[35%] left-[1rem] w-[90%] mx-auto space-y-4 transition-opacity duration-[2s] ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-orange-950 pt-10">
          IStock
        </h1>
        <p className="text-center text-gray-600 text-md md:text-lg lg:text-xl xl:text-2xl">
          Empowering Businesses Worldwide: A New Dimension in Commerce with
          IStock
        </p>
        <div className="flex space-x-3 justify-center text-[0.8rem] items-center">
          <p className="underline">Currently v1.0.2</p>
          <button className="relative group flex justify-center items-center gap-1 bg-purple-200 p-1 px-2 hover:bg-purple-300 rounded-lg">
            <ImportContactsIcon
              sx={{
                width: "15px",
                color: "purple",
                marginBottom: "0.1rem",
              }}
            />
            <span
              className="text-purple-900 group-hover:text-white"
              onClick={() => navigate("/about")}
            >
              Documentation
            </span>
          </button>
          <span>
            <a
              href="https://github.com/omrfrkcpr/istock"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                sx={{
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                  padding: "0.1rem",
                  marginLeft: "-0.3rem",
                  color: "white",
                  backgroundColor: "black",
                  borderRadius: "0.2rem",
                }}
              />
            </a>
          </span>
        </div>
        <div className="pt-5 flex gap-2 justify-center items-center">
          <button
            className="bg-[#194072] hover:bg-[#486d9e] text-white py-[0.2rem] px-3 rounded-lg"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="bg-[#194072] hover:bg-[#486d9e] text-white py-[0.2rem] px-3 rounded-lg"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
