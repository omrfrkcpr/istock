import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const AuthHeader = () => {
  return (
    <Grid item xs={12} mb={3} style={{ textAlign: "center" }}>
      <Typography
        variant="heading"
        color="primary.white"
        style={{ marginTop: "2rem" }}
      >
        Stock Management App
      </Typography>
    </Grid>
  );
};

export default AuthHeader;
