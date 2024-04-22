import Box from "@mui/material/Box";
import { Button, CircularProgress } from "@mui/material";
import { Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useSelector } from "react-redux";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FormTextField from "../components/ui/TextFields/FormTextField";

export const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Required!"),
  password: Yup.string().required("Required!"),
});

const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { loading } = useSelector((state) => state.auth);

  const loginFormFields = [
    { name: "username", label: "Username", type: "text" },
    {
      name: "password",
      label: "Password",
      type: `${showPassword ? "text" : "password"}`,
    },
  ];

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Form autoComplete="off">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {loginFormFields.map((field) => (
            <Box sx={{ position: "relative" }}>
              <FormTextField
                id={field.name}
                name={field.name}
                label={field.label}
                autoComplete="off"
                type={field.type}
                value={values[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched[field.name] && Boolean(errors[field.name])}
                helperText={touched[field.name] && errors[field.name]}
              />
              {field.name === "password" && (
                <Box
                  color="primary.main"
                  sx={{ position: "absolute", top: 15, right: 15 }}
                >
                  {showPassword ? (
                    <VisibilityOffIcon
                      size={32}
                      onClick={handlePasswordVisibility}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <VisibilityIcon
                      size={32}
                      onClick={handlePasswordVisibility}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </Box>
              )}
            </Box>
          ))}
          {!loading ? (
            <Button
              variant="contained"
              type="submit"
              color="success"
              size="large"
            >
              Sign In
            </Button>
          ) : (
            <Button
              variant="contained"
              disabled={loading}
              color="error"
              size="large"
            >
              <CircularProgress />
            </Button>
          )}
        </Box>
      </Form>
    </div>
  );
};

export default LoginForm;
