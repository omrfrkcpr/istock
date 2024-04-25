import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Chart from "./Chart";


const getData = (data, categoryName) => {
  return data.map((item) => ({
    date: new Date(item.createdAt).toLocaleString(),
    [categoryName]: item.amount,
  }));
};

const Charts = () => {
  const { sales, purchases } = useSelector((state) => state.stock);

  const salesData = getData(sales, "Sales");
  const purchasesData = getData(purchases, "Purchases");

  return (
    <Grid container spacing={3}>
      <Chart data={salesData} categoryName="Sales" color="indigo" />
      <Chart data={purchasesData} categoryName="Purchases" color="rose" />
    </Grid>
  );
};

export default Charts;
