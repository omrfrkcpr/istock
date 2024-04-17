import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./app/store";
import { CssBaseline } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#454F5B",
        white: "#fff",
      },
      secondary: {
        main: "#454F5B",
        second: "#161C24",
      },
      tertiary: {
        main: "#828280",
      },
      background: {
        main: "#9fb1b5",
      },
    },
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
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
