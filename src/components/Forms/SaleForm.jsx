import Box from "@mui/material/Box";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useStockCall from "../../hooks/useStockCall";
import MyButton from "../Commons/MyButton";
import MyTextField from "../TextFields/MyTextField";
import SelectControl from "../Commons/SelectControl";
import { useTranslation } from "react-i18next";
import { translations } from "../../locales/translations";

export default function SaleForm({ handleClose, initialState }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [info, setInfo] = useState(initialState);
  const { postStockData, putStockData } = useStockCall();
  const { products, brands } = useSelector((state) => state.stock);

  const purSalefields = [
    {
      label: t(translations.purchases.table.col5),
      id: "quantity",
      name: "quantity",
      type: "number",
      InputProps: { inputProps: { min: 0 } },
      required: true,
    },
    {
      label: t(translations.purchases.table.col6),
      id: "price",
      name: "price",
      type: "number",
      InputProps: { inputProps: { min: 0 } },
      required: true,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  console.log(info);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (info._id) {
      putStockData("sales", info);
    } else {
      postStockData("sales", info);
    }

    handleClose();
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      component="form"
      onSubmit={handleSubmit}
    >
      <SelectControl
        label={t(translations.purchases.table.col3)}
        items={brands}
        name="brandId"
        value={info?.brandId?._id || info?.brandId || ""}
        onNavigate={() => navigate("/stock/brands/")}
        onChange={handleChange}
      />

      <SelectControl
        label={t(translations.purchases.table.col4)}
        items={products}
        name="productId"
        value={info?.productId?._id || info?.productId || ""}
        onNavigate={() => navigate("/stock/products")}
        onChange={handleChange}
      />
      {purSalefields.map((item) => (
        <MyTextField
          key={item.id}
          {...item}
          onChange={handleChange}
          value={info[item.id]}
        />
      ))}
      <MyButton
        type="submit"
        variant="contained"
        size="large"
        title={
          info?._id
            ? t(translations.sales.form.editBtn)
            : t(translations.sales.form.submitBtn)
        }
      />
    </Box>
  );
}
