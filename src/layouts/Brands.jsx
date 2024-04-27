import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif";
import BrandCard from "../components/Cards/BrandCard";
import MyButton from "../components/Commons/MyButton";
import PageHeader from "../components/Commons/PageHeader";
import BrandForm from "../components/Forms/BrandForm";
import useStockCall from "../hooks/useStockCall";
import StockModal from "../components/Commons/StockModal";
import { useTranslation } from "react-i18next";
import { translations } from "../locales/translations";

const Brands = () => {
  const { t, i18n } = useTranslation();
  const { getStockData } = useStockCall();
  const { brands, loading } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      name: "",
      image: "",
    });
  };
  const [initialState, setInitialState] = useState({
    name: "",
    image: "",
  });
  // console.log("brands:", brands);
  // console.log("brands:", initialState);
  useEffect(() => {
    getStockData("brands");
  }, []);

  return (
    <Container maxWidth={"xl"}>
      <PageHeader text={t(translations.brands.title)} />
      <MyButton
        variant="contained"
        onClick={handleOpen}
        title={t(translations.brands.button)}
      />
      <Grid container spacing={2} mt={3}>
        {loading ? (
          <img src={loadingGif} alt="loading..." height={500} />
        ) : (
          brands.map((brand) => (
            <Grid item xs={12} md={6} lg={4} xl={3} key={brand._id}>
              <BrandCard
                {...brand}
                handleOpen={handleOpen}
                setInitialState={setInitialState}
              />
            </Grid>
          ))
        )}
      </Grid>
      {open && (
        <StockModal open={open} handleClose={handleClose}>
          <BrandForm handleClose={handleClose} initialState={initialState} />
        </StockModal>
      )}
    </Container>
  );
};

export default Brands;
