import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MyButton from "../components/Commons/MyButton";
import PageHeader from "../components/Commons/PageHeader";
import StockModal from "../components/Commons/StockModal";
import ProductForm from "../components/Forms/ProductForm";
import ProductTable from "../components/Tables/ProductTable";
import useStockCall from "../hooks/useStockCall";

const Products = () => {
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
      <PageHeader text="Products" />
      <MyButton variant="contained" onClick={handleOpen} title="New Product" />
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
