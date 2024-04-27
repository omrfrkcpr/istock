import React from "react";
import { MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

const Switch = () => {
  const { t, i18n } = useTranslation();

  // console.log(i18n.language);

  const handleLanguageChange = async (e) => {
    const selectedLanguage = e.target.value;
    await i18n.changeLanguage(selectedLanguage);
  };

  return (
    <Select
      value={i18n.language}
      onChange={handleLanguageChange}
      sx={{
        "& .MuiSelect-select": {
          display: "flex",
          alignItems: "center",
          padding: "0 0.5rem",
          fontSize: "0.7rem",
        },
      }}
    >
      <MenuItem
        value="en"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src="https://flagsapi.com/US/flat/24.png"
          alt="en"
          style={{ marginRight: "5px" }}
        />
        <span style={{ fontSize: ".8rem" }}>EN</span>
      </MenuItem>
      <MenuItem
        value="de"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src="https://flagsapi.com/DE/flat/24.png"
          alt="de"
          style={{ marginRight: "5px" }}
        />
        <span style={{ fontSize: ".8rem" }}>DE</span>
      </MenuItem>
      <MenuItem
        value="tr"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src="https://flagsapi.com/TR/flat/24.png"
          alt="tr"
          style={{ marginRight: "5px" }}
        />
        <span style={{ fontSize: ".8rem" }}>TR</span>
      </MenuItem>
    </Select>
  );
};

export default Switch;
