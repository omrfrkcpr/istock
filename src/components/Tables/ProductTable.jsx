import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import useStockCall from "../../hooks/useStockCall";

function getRowId(row) {
  console.log(row);
  return row._id;
}
export default function ProductTable() {
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
      headerName: "Category",
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
      headerName: "Brand",
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
      headerName: "Name",
      type: "text",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "quantity",
      headerName: "Stock",
      type: "number",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 0.8,
    },
    {
      field: "actions",
      headerName: "Actions",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      minWidth: 40,
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params) => (
        // console.log(params)
        <strong>
          <DeleteOutlineIcon
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
