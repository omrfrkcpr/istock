import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Required!"),
  password: Yup.string().required("Required!"),
});

const LoginForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  isSubmitting,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            id="username"
            name="username"
            label="Username"
            inputProps={{
              autoComplete: "off",
            }}
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.username && errors.username}
            error={touched.username && Boolean(errors.username)}
          />
          <Box sx={{ position: "relative" }}>
            <TextField
              id="password"
              sx={{ width: "100%" }}
              name="password"
              inputProps={{ "auto-complete": "off" }}
              type={`${showPassword ? "text" : "password"}`}
              label="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <Box sx={{ position: "absolute", top: 15, right: 15 }}>
              {showPassword ? (
                <VisibilityOffIcon
                  size={32}
                  onClick={handlePasswordVisibility}
                />
              ) : (
                <VisibilityIcon size={32} onClick={handlePasswordVisibility} />
              )}
            </Box>
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="success"
            size="large"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Sign In"}
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default LoginForm;
