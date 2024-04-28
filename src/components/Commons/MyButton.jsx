import { Button } from "@mui/material";
import React from "react";

const MyButton = (props) => {
  return (
    <Button {...props} sx={{ marginTop: "1rem" }}>
      {props.title}
    </Button>
  );
};

export default MyButton;
