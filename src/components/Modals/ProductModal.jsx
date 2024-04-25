import FormTextField from "../TextFields/FormTextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import useStockCall from "../../../hooks/useStockCall";
import { flexColumn, modalStyle } from "../../../styles/globalStyle";
import { useSelector } from "react-redux";
import FormControlSelect from "../TextFields/FormControlSelect";

export default function ProductModal({ open, handleClose }) {
  const [info, setInfo] = React.useState({
    categoryId: "",
    brandId: "",
    name: "",
  });
  const { postStockData } = useStockCall();
  const { categories, brands } = useSelector((state) => state.stock);

  const selectors = [categories, brands];

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postStockData("products", info);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box component="form" onSubmit={handleSubmit} sx={flexColumn}>
            {selectors.map((selector, index) => {
              const label = selector === categories ? "Category" : "Brand";
              const name = label.toLowerCase() + "Id";
              const value = info[name];
              return (
                <FormControlSelect
                  key={index}
                  label={label}
                  id={
                    Array.isArray(selector) &&
                    selector.map((item) => item._id).join("")
                  }
                  name={name}
                  value={value}
                  onChange={handleChange}
                  options={selector}
                />
              );
            })}
            <FormTextField
              label="Product Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained">
              {info._id ? "Update Product" : "Submit Product"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
