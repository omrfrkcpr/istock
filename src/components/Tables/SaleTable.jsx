import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { GridActionsCellItem } from "@mui/x-data-grid";
import React from "react";
import { useSelector } from "react-redux";
import useStockCall from "../../hooks/useStockCall";
import { deleteBtnStyle, editBtnStyle } from "../../styles/globalStyle";
import DataTable from "../Commons/DataTable";
import { useTranslation } from "react-i18next";
import { translations } from "../../locales/translations";

const SaleTable = ({ handleOpen, setInitialState }) => {
  const { t, i18n } = useTranslation();
  const { deleteStockData } = useStockCall();
  const { sales } = useSelector((state) => state.stock);
  const columns = [
    {
      field: "createdAt",
      headerName: t(translations.purchases.table.col1),
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      valueGetter: (value) => {
        return new Date(value).toLocaleString("de-DE");
      },
    },

    {
      field: "brandId",
      headerName: t(translations.purchases.table.col3),
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      valueGetter: (value) => {
        return value?.name ?? "-No Brand-";
      },
    },
    {
      field: "productId",
      headerName: t(translations.purchases.table.col4),
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      valueGetter: (value) => {
        return value?.name ?? "-No Product-";
      },
    },
    {
      field: "quantity",
      headerName: t(translations.purchases.table.col5),
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: t(translations.purchases.table.col6),
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "amount",
      headerName: t(translations.purchases.table.col7),
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: t(translations.purchases.table.col8),
      minWidth: 40,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { brandId, price, quantity, productId, _id } }) => {
        return [
          <GridActionsCellItem
            key={"edit"}
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              handleOpen();
              setInitialState({ brandId, price, quantity, productId, _id });
            }}
            sx={editBtnStyle}
          />,
          <GridActionsCellItem
            key={"delete"}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => deleteStockData("sales", _id)}
            sx={deleteBtnStyle}
          />,
        ];
      },
    },
  ];
  return <DataTable rows={sales} columns={columns} />;
};

export default SaleTable;
