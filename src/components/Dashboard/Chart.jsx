import React from "react";
import { Grid } from "@mui/material";
import { AreaChart } from "@tremor/react";

const dataFormatter = (number) =>
  `€ ${Intl.NumberFormat("us").format(number).toString()}`;

const Chart = ({ data, categoryName, color }) => (
  <Grid item xs={12} md={6}>
    <AreaChart
      className="h-80"
      data={data}
      index="date"
      categories={[categoryName]}
      colors={[color]}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
    />
  </Grid>
);

export default Chart;
