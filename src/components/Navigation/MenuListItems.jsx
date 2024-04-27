import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Switch from "../../components/Commons/Switch";
import logo from "../../../public/assets/logo.png";
import { useTranslation } from "react-i18next";
import { translations } from "../../locales/translations";

const getIcon = (name) => `/assets/navbar/${name}.svg`;

const iconStyle = {
  color: "secondary.main",
  borderRadius: "1rem",
  "&:hover": {
    backgroundColor: "primary.secondary",
    color: "white",
  },
  gap: 1,
};
const selectedStyle = {
  backgroundColor: "background.secondary",
  borderRadius: "1rem",
  "&:hover": {
    backgroundColor: "background.tertiary",
    color: "secondary.secondary",
  },
  color: "text.tertiary",
  gap: 1,
};

const MenuListItems = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  const links = [
    {
      title: t(translations.dashboard.title),
      url: "/stock",
      icon: getIcon("ic_analytics"),
    },
    {
      title: t(translations.purchases.title),
      url: "/stock/purchases",
      icon: getIcon("purchase"),
    },
    {
      title: t(translations.sales.title),
      url: "/stock/sales",
      icon: getIcon("sales"),
    },
    {
      title: t(translations.firms.title),
      url: "/stock/firms",
      icon: getIcon("firms"),
    },
    {
      title: t(translations.brands.title),
      url: "/stock/brands",
      icon: getIcon("brand"),
    },
    {
      title: t(translations.products.title),
      url: "/stock/products",
      icon: getIcon("ic_cart"),
    },
  ];

  return (
    <div>
      <Toolbar />
      <List
        sx={{
          position: "relative",
          backgroundColor: "background.main",
          height: `calc(100vh - 4rem)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          {links.map(({ title, url, icon }, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => navigate(url)}
                sx={pathname === url ? selectedStyle : iconStyle}
              >
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    mask: `url(${icon}) no-repeat center / contain`,
                    bgcolor: "currentcolor",
                  }}
                />
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        </div>
        <div>
          <img
            src={logo}
            alt=""
            style={{
              width: "150px",
              margin: "1rem auto",
            }}
          />
          {window.innerWidth < 600 && (
            <div
              style={{
                display: "flex",
                marginTop: "2rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Switch />
            </div>
          )}
        </div>
      </List>
    </div>
  );
};

export default MenuListItems;
