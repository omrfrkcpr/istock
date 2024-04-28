// Login.jsx
import { Box } from "@mui/material";
import { Formik } from "formik";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import image from "../assets/securityOpen.png";
import { Link } from "react-router-dom";
import AuthHeader from "../components/Commons/AuthHeader";
import AuthImage from "../components/Commons/AuthImage";
import useAuthCall from "../hooks/useAuthCall";
import LoginForm from "../components/Forms/LoginForm";
import { SignupSchema } from "../components/Forms/LoginForm";
import background from "../assets/background.jpg";
import Switch from "../components/Commons/Switch";
import { useTranslation } from "react-i18next";
import { translations } from "../locales/translations";

const Login = () => {
  const { login } = useAuthCall();
  const { t, i18n } = useTranslation();

  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <Grid
        justifyContent="center"
        sx={{
          height: "100vh",
          maxHeight: "850px",
          p: 2,
        }}
      >
        <AuthHeader />
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            backgroundColor: "white",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Switch />
        </div>

        <Grid
          item
          xs={12}
          sm={10}
          md={12}
          style={{
            height: "fit-content",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "1rem",
            boxShadow: "2px 2px 20px white",
            maxWidth: "500px",
            margin: "auto",
            textAlign: "center  ",
          }}
        >
          <AuthImage image={image} />

          <Typography variant="h5" align="center" color="black">
            {t(translations.loginForm.title)}
          </Typography>

          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              console.log(values);
              login(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <LoginForm {...props} />}
          ></Formik>

          <Box
            sx={{
              textAlign: "center",
              mt: 2,
              color: "#3a9cff",
              "&:hover": { textDecoration: "underline", opacity: "0.5" },
            }}
          >
            <Link to="/register">{t(translations.loginForm.link)}</Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
