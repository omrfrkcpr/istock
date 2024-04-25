import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


const getIcon = (name) => `/assets/navbar/${name}.svg`;

const links = [
  {
    title: "Dashboard",
    url: "/stock",
    icon: getIcon("ic_analytics"),
  },
  {
    title: "Purchases",
    url: "/stock/purchases",
    icon: getIcon("purchase"),
  },
  {
    title: "Sales",
    url: "/stock/sales",
    icon: getIcon("sales"),
  },
  {
    title: "Firms",
    url: "/stock/firms",
    icon: getIcon("firms"),
  },
  {
    title: "Brands",
    url: "/stock/brands",
    icon: getIcon("brand"),
  },
  {
    title: "Products",
    url: "/stock/products",
    icon: getIcon("ic_cart"),
  },
];

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

  return (
    <div>
      <Toolbar />
      <List
        sx={{
          position: "relative",
          backgroundColor: "background.main",
          height: `calc(100vh - 4rem)`,
        }}
      >
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
      </List>
    </div>
  );
};

export default MenuListItems;
