import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Chart from "./Chart";
import { useTranslation } from "react-i18next";
import { translations } from "../../locales/translations";

const getData = (data, categoryName) => {
  return data.map((item) => ({
    date: new Date(item.createdAt).toLocaleString(),
    [categoryName]: item.amount,
  }));
};

const Charts = () => {
  const { t, i18n } = useTranslation();
  const { sales, purchases } = useSelector((state) => state.stock);

  const salesData = getData(sales, t(translations.sales.title));
  const purchasesData = getData(purchases, t(translations.purchases.title));

  return (
    <Grid container spacing={3}>
      <Chart
        data={salesData}
        categoryName={t(translations.sales.title)}
        color="indigo"
      />
      <Chart
        data={purchasesData}
        categoryName={t(translations.purchases.title)}
        color="rose"
      />
    </Grid>
  );
};

export default Charts;
