import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import image from "../assets/security.png";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import useAuthCall from "../hooks/useAuthCall";
import { SignupSchema } from "../components/RegisterForm";
import background from "../assets/background.jpg";

const Register = () => {
  const { register } = useAuthCall();

  return (
    <Box
      // maxWidth="lg"
      sx={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        minHeight: "100vh",
      }}
    >
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100%",
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
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "2rem",
            boxShadow: "2px 2px 50px black",
          }}
        >
          <AuthImage image={image} />
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            SIGN UP
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

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/">Already have an account? Sign In</Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
