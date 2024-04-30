import React from "react";
import logo from "/assets/logo.png";
import Switch from "../components/Commons/Switch";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useTranslation } from "react-i18next";
import { translations } from "../locales/translations";
import MailIcon from "@mui/icons-material/Mail";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="bg-gradient-to-b from-orange-100 to-orange-300 flex flex-col justify-start items-center relative overflow-hidden">
      <div className="absolute left-4 top-5 lg:left-6">
        <Link to="/">
          <HomeIcon
            sx={{
              fontSize: { sm: "2rem", md: "2.5rem", lg: "3rem" },
              color: "#476A7E",
              boxShadow: "2px 2px 10px black",
              "&:hover": {
                color: "white",
                cursor: "pointer",
                backgroundColor: "orange",
              },
            }}
          />
        </Link>
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.4rem",
          right: "1.4rem",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Switch />
      </div>
      <div className="w-[90%] mx-auto mt-5">
        <img src={logo} alt="" className="w-[100px] mx-auto" />
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 text-center mt-8">
          IStock
        </h1>
        <p className="text-sm md:text-md lg:text-lg text-gray-800 mb-10">
          {t(translations.aboutPage.info)}
        </p>
      </div>

      <div className="w-[90%] mx-auto">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 underline">
          {t(translations.aboutPage.doc.title)}
        </h1>
        <p className="text-sm md:text-md lg:text-lg text-gray-800 mb-8">
          {t(translations.aboutPage.doc.info)}
        </p>
      </div>

      <div className="w-[90%] mx-auto">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 underline">
          {t(translations.aboutPage.overview.title)}
        </h1>
        <ul className="text-sm md:text-md lg:text-lg text-gray-800 mb-8">
          <li>
            <i>{t(translations.aboutPage.overview.label1)}</i>{" "}
            {t(translations.aboutPage.overview.info1)}
          </li>
          <li>
            <i>{t(translations.aboutPage.overview.label2)}</i>{" "}
            {t(translations.aboutPage.overview.info2)}
          </li>
          <li>
            <i>{t(translations.aboutPage.overview.label3)}</i>{" "}
            {t(translations.aboutPage.overview.info3)}
          </li>
          <li>
            <i>{t(translations.aboutPage.overview.label4)}</i>{" "}
            {t(translations.aboutPage.overview.info4)}
          </li>
        </ul>
      </div>

      <div className="w-[90%] mx-auto">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 underline">
          {t(translations.aboutPage.support.title)}
        </h1>
        <p className="text-sm md:text-md lg:text-lg text-gray-800 mb-8">
          {t(translations.aboutPage.support.info)}
        </p>
      </div>

      <div className="w-[90%] mx-auto">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 underline">
          {t(translations.aboutPage.help.title)}
        </h1>
        <p className="text-sm md:text-md lg:text-lg text-gray-800 mb-8">
          {t(translations.aboutPage.help.info)}
          <MailIcon
            onClick={() => window.open("mailto:	omerrfarukcapur@gmail.com")}
            sx={{
              marginBottom: "0.2rem",
              cursor: "pointer",
              "&:hover": { color: "white" },
            }}
          />
        </p>
      </div>

      <div className="w-[90%] mx-auto mt-5 mb-10">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
          {t(translations.aboutPage.footer)}
        </h3>
      </div>
    </section>
  );
};

export default About;
