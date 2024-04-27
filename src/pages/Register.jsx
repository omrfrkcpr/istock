import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import RegisterForm from "../components/Forms/RegisterForm";
import image from "../assets/security.png";
import AuthHeader from "../components/Commons/AuthHeader";
import AuthImage from "../components/Commons/AuthImage";
import useAuthCall from "../hooks/useAuthCall";
import { SignupSchema } from "../components/Forms/RegisterForm";
import background from "../assets/background.jpg";
import Switch from "../components/Commons/Switch";
import { useTranslation } from "react-i18next";
import { translations } from "../locales/translations";

const Register = () => {
  const { register } = useAuthCall();
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
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          maxHeight: "700px",
          p: 2,
          // pb: 10,
        }}
      >
        <AuthHeader />
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            backgroundColor: "white",
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
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            height: "fit-content",
            padding: "1rem",
            boxShadow: "2px 2px 20px white",
            maxWidth: "500px",
            margin: "auto",
            textAlign: "center  ",
          }}
        >
          <AuthImage image={image} />
          <Typography variant="h5" align="center" mb={2} color="black">
            {t(translations.registerForm.title)}
          </Typography>

          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              register(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>

          <Box sx={{ textAlign: "center", mt: 2, color: "black" }}>
            <Link to="/">{t(translations.registerForm.link)}</Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
