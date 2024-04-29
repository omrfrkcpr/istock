import React from "react";
import logo from "/assets/logo.png";
import Switch from "../components/Commons/Switch";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const About = () => {
  return (
    <section className="min-h-screen  bg-gradient-to-b from-orange-100 to-orange-300 flex flex-col justify-start items-center relative">
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
          right: "1rem",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Switch />
      </div>
      <div className="max-w-[90%] mx-auto mt-5">
        <img src={logo} alt="" className="w-[100px] mx-auto" />
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 text-center mt-8">
          About
        </h1>
        <p className="text-sm md:text-md lg:text-lg text-gray-800 mb-8">
          iStock is a comprehensive stock management application designed to
          streamline inventory processes for businesses. Upon registration,
          users are greeted with a customizable dashboard where they can monitor
          purchase and sale activities, as well as track their profit and loss
          status. With the ability to input company and brand information, users
          can effortlessly buy and sell products within the system. Every
          transaction is editable and updateable, ensuring accuracy and
          flexibility in inventory management.
        </p>
        <p className="text-sm md:text-md lg:text-lg text-gray-800 mb-8">
          The application boasts a multilingual interface, allowing users to
          seamlessly switch between Turkish and English languages. Additionally,
          users have the option to personalize their experience with both dark
          and light mode themes.
        </p>
      </div>

      <div className="max-w-[90%] mx-auto">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 underline">
          Documentation
        </h1>
        <p className="text-sm md:text-md lg:text-lg text-gray-800 mb-8">
          Getting Started to begin using iStock, simply sign up for an account
          with your email address and create a password. Once logged in, you
          will be directed to the dashboard where you can start managing your
          inventory.
        </p>
      </div>

      <div className="max-w-[90%] mx-auto">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 underline">
          Dashboard Overview
        </h1>
        <ul className="text-sm md:text-md lg:text-lg text-gray-800 mb-8">
          <li>
            <i>Purchase and Sale Tracking:</i> Monitor all buying and selling
            activities in real-time to stay informed about your inventory
            movements.
          </li>
          <li>
            <i>Profit and Loss Analysis:</i> Track your financial performance
            with comprehensive profit and loss reports.
          </li>
          <li>
            <i>Company and Brand Management:</i> Input relevant company and
            brand details to facilitate efficient product management.
          </li>
          <li>
            <i>Transaction Editing:</i> Easily edit and update any transaction
            to maintain accurate inventory records.
          </li>
        </ul>
      </div>

      <div className="max-w-[90%] mx-auto">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 underline">
          Multilingual Support
        </h1>
        <p className="text-sm md:text-md lg:text-lg text-gray-800 mb-8">
          iStock offers support for English, German and Turkish languages,
          allowing users to navigate the application in their preferred
          language.
        </p>
      </div>

      <div className="max-w-[90%] mx-auto">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 underline">
          Need Help?
        </h1>
        <p className="text-sm md:text-md lg:text-lg text-gray-800 mb-8">
          For further assistance or inquiries, please refer to the Help section
          within the application or contact me by email at{" "}
          <a
            href="mailto:omerrfarukcapur@email.com"
            className="text-white underline font-semibold hover:text-gray-200"
          >
            omerrfarukcapur@email.com
          </a>
          .
        </p>
      </div>

      <div className="max-w-[90%] mx-auto mt-5 mb-10">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
          Start optimizing your stock management processes today with iStock!
        </h3>
      </div>
    </section>
  );
};

export default About;
