import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const AuthHeader = () => {
  return (
    <Grid item xs={12} mb={3} style={{ textAlign: "center" }}>
      <Typography
        sx={{
          fontSize: "1.5rem",
          "@media (min-width:400px)": {
            fontSize: "2.4rem",
          },
          "@media (min-width:600px)": {
            fontSize: "3rem",
          },
          "@media (min-width:900px)": {
            fontSize: "4rem",
          },
          md: { marginTop: "2rem" },
        }}
        color="white"
      >
        Stock Management App
      </Typography>
    </Grid>
  );
};

export default AuthHeader;
