import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FormControlSelect = ({ label, id, name, value, onChange, options }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={`demo-simple-${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`demo-simple-${id}-label`}
        id={id}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option._id} value={option._id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FormControlSelect;
