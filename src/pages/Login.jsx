// Login.jsx
import { Box } from "@mui/material";
import { Formik } from "formik";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import image from "../assets/securityOpen.png";
import { Link } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import useAuthCall from "../hooks/useAuthCall";
import LoginForm from "../components/LoginForm";
import { SignupSchema } from "../components/LoginForm";
import background from "../assets/background.jpg";

const Login = () => {
  const { login } = useAuthCall();

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

        <Grid
          item
          xs={12}
          sm={10}
          md={12}
          style={{
            height: "fit-content",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "1rem",
            boxShadow: "2px 2px 50px black",
            maxWidth: "500px",
            margin: "auto",
            textAlign: "center  ",
          }}
        >
          <AuthImage image={image} />

          <Typography variant="h5" align="center" color="black">
            SIGN IN
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

          <Box sx={{ textAlign: "center", mt: 2, color: "black" }}>
            <Link to="/register">Don't have an account? Sign Up</Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
