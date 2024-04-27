import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import PageHeader from "../components/Commons/PageHeader";
import KpiCards from "../components/Dashboard/KpiCards";
import Charts from "../components/Dashboard/Charts";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { translations } from "../locales/translations";

const Home = () => {
  const { t, i18n } = useTranslation();
  const { getPurcSales } = useStockCall();
  const { loading } = useSelector((state) => state.stock);

  useEffect(() => {
    getPurcSales();
  }, []);
  if (loading) return <h2>{t(translations.registerForm.loading)}</h2>;
  return (
    <Container maxWidth={"xl"}>
      <PageHeader text={t(translations.dashboard.title)} />
      <KpiCards />
      <Charts />
    </Container>
  );
};

export default Home;
