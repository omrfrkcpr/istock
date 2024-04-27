import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MyButton from "../components/Commons/MyButton";
import PageHeader from "../components/Commons/PageHeader";
import StockModal from "../components/Commons/StockModal";
import ProductForm from "../components/Forms/ProductForm";
import ProductTable from "../components/Tables/ProductTable";
import useStockCall from "../hooks/useStockCall";
import { useTranslation } from "react-i18next";
import { translations } from "../locales/translations";

const Products = () => {
  const { t, i18n } = useTranslation();
  const { getProCatBrand } = useStockCall();
  const { products } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  console.log("products:", products);
  useEffect(() => {
    getProCatBrand();
  }, []);

  return (
    <Container maxWidth={"xl"}>
      <PageHeader text={t(translations.products.title)} />
      <MyButton
        variant="contained"
        onClick={handleOpen}
        title={t(translations.products.button)}
      />
      {open && (
        <StockModal open={open} handleClose={handleClose}>
          <ProductForm handleClose={handleClose} />
        </StockModal>
      )}
      <ProductTable />
    </Container>
  );
};

export default Products;
