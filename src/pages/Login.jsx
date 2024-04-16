// Login.jsx
import { Box } from "@mui/material";
import { Formik } from "formik";
import Container from "@mui/material/Container";
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
    <Container
      maxWidth="lg"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "80vh",
          p: 2,
          pb: 10,
        }}
      >
        <AuthHeader />

        <Grid
          item
          xs={12}
          sm={10}
          md={6}
          style={{
            height: "850px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "2rem",
            boxShadow: "2px 2px 50px black",
            maxWidth: "500px",
          }}
        >
          <AuthImage image={image} />

          <Typography variant="h4" align="center" mb={4} color="secondary.main">
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

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/register">Don't have an account? Sign Up</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
