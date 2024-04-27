import Box from "@mui/material/Box";
import * as React from "react";
import useStockCall from "../../hooks/useStockCall";
import { flexColumn } from "../../styles/globalStyle";
import MyButton from "../Commons/MyButton";
import MyTextField from "../TextFields/MyTextField";
import { useTranslation } from "react-i18next";
import { translations } from "../../locales/translations";

export default function FirmForm({ open, handleClose, initialState }) {
  const { t, i18n } = useTranslation();
  const [info, setInfo] = React.useState(initialState);
  const { postStockData, putStockData } = useStockCall();

  const firmFields = [
    {
      label: t(translations.firms.form.label1),
      name: "name",
      id: "name",
      type: "text",
    },
    {
      label: t(translations.firms.form.label2),
      name: "address",
      id: "address",
      type: "text",
    },
    {
      label: t(translations.firms.form.label3),
      name: "phone",
      id: "phone",
      type: "text",
    },
    {
      label: t(translations.firms.form.label4),
      name: "email",
      id: "email",
      type: "email",
    },
    {
      label: t(translations.firms.form.label5),
      name: "image",
      id: "image",
      type: "text",
    },
  ];

  const handleChange = (e) => {
    console.log(e.target.id);
    console.log(e.target.name);
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  console.log(info);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", info);

    if (info._id) {
      //* id varsa edit işlemi
      putStockData("firms", info);
    } else {
      //* id yoksa create işlemi
      postStockData("firms", info);
    }
    handleClose();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      // sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      sx={flexColumn}
    >
      {firmFields.map((item) => (
        <MyTextField
          key={item.id}
          onChange={handleChange}
          value={info[item.id]}
          {...item}
        />
      ))}
      <MyButton
        type="submit"
        variant="contained"
        title={
          info._id
            ? t(translations.firms.form.editBtn)
            : t(translations.firms.form.submitBtn)
        }
      />
    </Box>
  );
}
