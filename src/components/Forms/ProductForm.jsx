import Box from "@mui/material/Box";
import * as React from "react";
import { useSelector } from "react-redux";
import useStockCall from "../../hooks/useStockCall";
import { flexColumn } from "../../styles/globalStyle";
import MyButton from "../Commons/MyButton";
import MyTextField from "../TextFields/MyTextField";
import SelectControl from "../Commons/SelectControl";
import { useTranslation } from "react-i18next";
import { translations } from "../../locales/translations";

export default function ProductForm({ handleClose }) {
  const { t, i18n } = useTranslation();
  const [info, setInfo] = React.useState({
    categoryId: "",
    brandId: "",
    name: "",
  });
  const { postStockData } = useStockCall();
  const { categories, brands } = useSelector((state) => state.stock);

  const productFields = [
    {
      label: t(translations.products.form.label3),
      name: "name",
      id: "name",
      type: "text",
    },
  ];

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  console.log(info);
  const handleSubmit = (e) => {
    e.preventDefault();
    postStockData("products", info);
    handleClose();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={flexColumn}>
      <SelectControl
        label={t(translations.products.form.label1)}
        name="categoryId"
        value={info.categoryId}
        items={categories}
        onChange={handleChange}
      />
      <SelectControl
        label={t(translations.products.form.label2)}
        name="brandId"
        value={info.brandId}
        items={brands}
        onChange={handleChange}
      />
      {productFields.map((item) => (
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
        title={t(translations.brands.form.submitBtn)}
      />
    </Box>
  );
}
