import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import useStockCall from "../../hooks/useStockCall";
import { GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteBtnStyle } from "../../styles/globalStyle";
import { useTranslation } from "react-i18next";
import { translations } from "../../locales/translations";

function getRowId(row) {
  console.log(row);
  return row._id;
}

export default function ProductTable() {
  const { t, i18n } = useTranslation();
  const { products } = useSelector((state) => state.stock);
  const { deleteStockData } = useStockCall();

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      minWidth: 40,
      maxWidth: 70,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "categoryId",
      headerName: t(translations.products.form.label1),
      minWidth: 150,
      editable: false,
      headerAlign: "center",
      align: "center",
      flex: 2,
      valueGetter: (value) => {
        // console.log(value)
        return value?.name ?? "-No Category-";
      },
    },
    {
      field: "brandId",
      headerName: t(translations.products.form.label2),
      minWidth: 150,
      // editable: false,
      headerAlign: "center",
      align: "center",
      flex: 2,
      valueGetter: (value) => {
        // console.log(value)
        return value?.name ?? "-No Brand-";
      },
    },
    {
      field: "name",
      headerName: t(translations.products.form.label3),
      type: "text",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "quantity",
      headerName: t(translations.products.form.label4),
      type: "number",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 0.8,
    },
    {
      field: "actions",
      headerName: t(translations.products.form.label5),
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      minWidth: 40,
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params) => (
        // console.log(params)
        <strong>
          {/* <DeleteOutlineIcon
            onClick={() => deleteStockData("products", params?.id)}
            sx={{
              cursor: "pointer",
              color: "black",
              marginBottom: ".2rem",
              "&:hover": {
                color: "indianred",
                scale: "125%",
              },
            }}
          /> */}
          <GridActionsCellItem
            key={"delete"}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => deleteStockData("products", params._id)}
            sx={deleteBtnStyle}
          />
        </strong>
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%", height: "81.64vh" }} mt={4}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{
          toolbar: GridToolbar,
        }}
        getRowId={getRowId}
        pageSizeOptions={[5, 10, 25]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
