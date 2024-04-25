import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    height: "1.2rem",
  },
});

const FormTextField = ({
  name,
  label,
  type,
  id,
  autoComplete,
  variant,
  value,
  onChange,
  onBlur,
  helperText,
  error,
}) => {
  return (
    <CustomTextField
      name={name}
      label={label}
      type={type}
      id={id}
      inputProps={{
        autoComplete: autoComplete || "off",
      }}
      variant={variant || "outlined"}
      value={value}
      onChange={onChange}
      onBlur={onBlur || undefined}
      helperText={helperText || ""}
      error={error || false}
      sx={{ width: "100%" }}
    />
  );
};

export default FormTextField;
