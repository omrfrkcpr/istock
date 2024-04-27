import Box from "@mui/material/Box";
import * as React from "react";
import useStockCall from "../../hooks/useStockCall";
import { flexColumn } from "../../styles/globalStyle";
import MyButton from "../Commons/MyButton";
import MyTextField from "../TextFields/MyTextField";
import { useTranslation } from "react-i18next";
import { translations } from "../../locales/translations";

export default function BrandForm({ open, handleClose, initialState }) {
  const { t, i18n } = useTranslation();
  const [info, setInfo] = React.useState(initialState);
  const { postStockData, putStockData } = useStockCall();

  const brandFields = [
    {
      label: t(translations.brands.form.label1),
      name: "name",
      id: "name",
      type: "text",
      required: true,
    },
    {
      label: t(translations.brands.form.label2),
      name: "image",
      id: "image",
      type: "url",
      required: false,
    },
  ];

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      //* id varsa edit işlemi
      putStockData("brands", info);
    } else {
      //* id yoksa create işlemi
      postStockData("brands", info);
    }
    handleClose();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={flexColumn}>
      {brandFields.map((item) => (
        <MyTextField
          onChange={handleChange}
          key={item.id}
          value={info[item.id]}
          {...item}
        />
      ))}
      <MyButton
        type="submit"
        variant="contained"
        size="large"
        title={
          info._id
            ? t(translations.brands.form.editBtn)
            : t(translations.brands.form.submitBtn)
        }
      />
    </Box>
  );
}
