import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./app/store";
import { ToastContainer } from "react-toastify";
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
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <AppRouter />
        </Provider>

        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
