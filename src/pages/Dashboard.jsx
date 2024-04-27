import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router-dom";
import useAuthCall from "../hooks/useAuthCall";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuListItems from "../components/Navigation/MenuListItems";
import { useMediaQuery } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import Switch from "../components/Commons/Switch";
import { containerStyle } from "../styles/globalStyle";

const drawerWidth = 200;

const getDesignTokens = (mode) => ({
  typography: {
    heading: {
      fontSize: "1.5rem",
      "@media (min-width:400px)": {
        fontSize: "2.4rem",
      },
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
      "@media (min-width:900px)": {
        fontSize: "4rem",
      },
    },
    text: {
      fontSize: "1rem",
      "@media (min-width:400px)": {
        fontSize: "1.4rem",
      },
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.5rem",
      },
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#3D8B5B",
            secondary: "#969696",
          },
          secondary: {
            main: "#121212",
            secondary: "#ffffff",
          },
          tertiary: {
            main: "#ffffff",
            secondary: "#abba9b",
          },
          background: {
            main: "#cde0ba",
            secondary: "#59664b",
            tertiary: "#2a2d27",
          },
          text: {
            primary: "#000000",
            secondary: "#2a2d27",
            tertiary: "#ffffff",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#5c6d49",
            secondary: "#969696",
          },
          secondary: {
            main: "#ffffff",
            secondary: "#ffffff",
          },
          tertiary: {
            main: "#6b6b6b",
            secondary: "white",
          },
          background: {
            main: "#333333",
            secondary: "#6b6b6b",
            tertiary: "#2a2d27",
          },
          text: {
            primary: "#ffffff",
            secondary: "#e8e8e8",
            tertiary: "#000000",
          },
        }),
  },
});

function Dashboard(props) {
  const { t, i18n } = useTranslation();

  const [mode, setMode] = React.useState("light");
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          const htmlElement = document.documentElement;
          htmlElement.classList.remove(prevMode);
          htmlElement.classList.add(newMode);
          return newMode;
        });
      },
    }),
    []
  );

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const { logout } = useAuthCall();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const toggleBtnStyle = {
    position: "fixed",
    top: isSmallScreen ? "9px" : "13px",
    padding: "7px",
    [isSmallScreen ? "left" : "right"]: isSmallScreen ? "45px" : "115px",
    // border: `.5px solid ${mode === "light" ? "#abba9b" : "#6B6B6B"}`,
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100%)` },
            ml: { sm: `${drawerWidth}px` },
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "background.main",
            color: "secondary.main",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                height: "50px",
                display: "flex",
                alignItems: "center",
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
                marginLeft: { xs: "40px", sm: "0px" },
              }}
            >
              <span
                style={{
                  backgroundColor: "#E6E6E6",
                  padding: "0.2rem .5rem",
                  color: "black",
                  borderRadius: "10px",
                }}
              >
                IStock
              </span>
            </Typography>
            {isSmallScreen && (
              <IconButton
                sx={toggleBtnStyle}
                onClick={colorMode.toggleColorMode}
                color="black"
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            )}
            {isSmallScreen && (
              <Button
                color="inherit"
                onClick={logout}
                sx={{
                  gap: 1,
                  display: "flex",
                  minWidth: "115px",
                  fontSize: ".7rem",
                  alignItems: "center",
                  justifyContent: "end",
                  marginRight: "-10px",
                  marginTop: "3px",
                }}
              >
                <span
                  style={{
                    "&:hover": {
                      backgroundColor: "secondary.second",
                      color: "text.secondary",
                    },
                  }}
                >
                  {t("logout")}
                </span>{" "}
                <LogoutIcon
                  style={{
                    width: "15px",
                  }}
                />
              </Button>
            )}

            {!isSmallScreen && (
              <div style={containerStyle}>
                <Button
                  color="inherit"
                  onClick={logout}
                  sx={{
                    gap: 1,
                    minWidth: "150px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                  }}
                >
                  <span
                    style={{
                      "&:hover": {
                        backgroundColor: "secondary.second",
                        color: "text.secondary",
                      },
                    }}
                  >
                    {t("logout")}
                  </span>{" "}
                  <LogoutIcon />
                </Button>
                <IconButton
                  sx={toggleBtnStyle}
                  onClick={colorMode.toggleColorMode}
                  color="black"
                >
                  {theme.palette.mode === "dark" ? (
                    <Brightness7Icon />
                  ) : (
                    <Brightness4Icon />
                  )}
                </IconButton>
                <Switch />
              </div>
            )}
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
          }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <MenuListItems />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            <MenuListItems />
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            minHeight: "100vh",
            maxHeight: "100%",
            p: 3,
            width: {
              sm: `calc(100% - ${drawerWidth}px)`,
            },
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;
