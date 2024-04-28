import Box from "@mui/material/Box";
import { Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FormTextField from "../../components/TextFields/FormTextField";
import { useTranslation } from "react-i18next";
import { translations } from "../../locales/translations";
import { Button } from "@mui/material";

export const SignupSchema = Yup.object().shape({
  username: Yup.string().min(3).max(15).required("Required!"),
  firstName: Yup.string().min(2).max(50).required("Required"),
  lastName: Yup.string().min(2).max(50).required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .max(50, "Password must be at most 50 characters long")
    .matches(/\d+/, "Password must contain at least one number")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(
      /[@$?!%&*]+/,
      "Password must contain at least one of the following characters: (@$?!%&*)"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const RegisterForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  isSubmitting,
}) => {
  const { t, i18n } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const registerFormFields = [
    {
      name: "username",
      label: t(translations.registerForm.username),
      type: "text",
    },
    {
      name: "firstName",
      label: t(translations.registerForm.firstName),
      type: "text",
    },
    {
      name: "lastName",
      label: t(translations.registerForm.lastName),
      type: "text",
    },
    { name: "email", label: t(translations.registerForm.email), type: "email" },
    {
      name: "password",
      label: t(translations.registerForm.password),
      type: `${showPassword ? "text" : "password"}`,
    },
    {
      name: "confirmPassword",
      label: t(translations.registerForm.confirm),
      type: `${showConfirmPassword ? "text" : "password"}`,
    },
  ];

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
      <Form autoComplete="off">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {registerFormFields.map((field) => (
            <Box sx={{ position: "relative" }}>
              <FormTextField
                id={field.name}
                name={field.name}
                label={field.label}
                autoComplete="off"
                type={field.type}
                value={
                  field.name === "confirmPassword" && isSubmitting
                    ? ""
                    : values[field.name]
                }
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched[field.name] && Boolean(errors[field.name])}
                helperText={touched[field.name] && errors[field.name]}
              />
              {(field.name === "password" ||
                field.name === "confirmPassword") && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 15,
                    right: 15,
                    color: "black",
                    "&:hover": { color: "gray" },
                  }}
                >
                  {field.name === "password" ? (
                    showPassword ? (
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
                    )
                  ) : showConfirmPassword ? (
                    <VisibilityOffIcon
                      size={32}
                      onClick={handleConfirmPasswordVisibility}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <VisibilityIcon
                      size={32}
                      onClick={handleConfirmPasswordVisibility}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </Box>
              )}
            </Box>
          ))}

          <Button
            type="submit"
            variant="contained"
            color="info"
            size="large"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? t(translations.registerForm.loading)
              : t(translations.registerForm.title)}
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default RegisterForm;
