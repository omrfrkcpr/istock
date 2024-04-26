import React from "react";
import { MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

const Switch = () => {
  const { t, i18n } = useTranslation();

  console.log(i18n.language);

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
          src="https://flagsapi.com/US/flat/32.png"
          alt="en"
          style={{ marginRight: "10px" }}
        />
        <span>EN</span>
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
          src="https://flagsapi.com/DE/flat/32.png"
          alt="de"
          style={{ marginRight: "10px" }}
        />
        <span>DE</span>
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
          src="https://flagsapi.com/TR/flat/32.png"
          alt="tr"
          style={{ marginRight: "10px" }}
        />
        <span>TR</span>
      </MenuItem>
    </Select>
  );
};

export default Switch;
