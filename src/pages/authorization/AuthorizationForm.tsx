import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "./validationSchema";

const AuthorizationForm: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      navigate("/home");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            label="Электронная почта"
            variant="outlined"
            fullWidth
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>

        <Grid item>
          <TextField
            label="Пароль"
            variant="outlined"
            type="password"
            fullWidth
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>

        <Grid item>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={!(formik.isValid && formik.dirty)}
          >
            Войти
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AuthorizationForm;
