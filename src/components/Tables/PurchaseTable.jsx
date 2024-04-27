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

const PurchaseTable = ({ handleOpen, setInitialState }) => {
  const { t, i18n } = useTranslation();
  const { purchases } = useSelector((state) => state.stock);
  const { deleteStockData } = useStockCall();

  const columns = [
    {
      field: "createdAt",
      headerName: t(translations.purchases.table.col1),
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return new Date(row.createdAt).toLocaleString("de-DE");
      },
    },
    {
      field: "firmId",
      headerName: t(translations.purchases.table.col2),
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return row?.firmId?.name ?? "-No Firm-";
      },
    },

    {
      field: "brandId",
      headerName: t(translations.purchases.table.col3),
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return row?.brandId?.name ?? "-No Brand-";
      },
    },
    {
      field: "productID",
      headerName: t(translations.purchases.table.col4),
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return row?.productId?.name ?? "-No Product-";
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
      renderCell: ({
        row: { brandId, productId, quantity, price, firmId, _id },
      }) => {
        return [
          <GridActionsCellItem
            key={"edit"}
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              handleOpen();
              setInitialState({
                _id,
                brandId,
                productId,
                quantity,
                price,
                firmId,
              });
            }}
            sx={editBtnStyle}
          />,
          <GridActionsCellItem
            key={"delete"}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => deleteStockData("purchases", _id)}
            sx={deleteBtnStyle}
          />,
        ];
      },
    },
  ];
  return <DataTable rows={purchases} columns={columns} />;
};

export default PurchaseTable;
