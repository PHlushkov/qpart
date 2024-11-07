// src/pages/authorization/Authorization.tsx
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { TextField, Button } from "@mui/material";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

interface AuthorizationProps {
  onLogin: () => void;
}

const Authorization: React.FC<AuthorizationProps> = ({ onLogin }) => {
  const navigate = useNavigate(); 

  return (
    <div className="p-5 max-w-[400px] mx-auto">
      <h2>Авторизация</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Неверный формат email")
            .required("Email обязателен"),
          password: Yup.string()
            .min(6, "Пароль должен быть не менее 6 символов")
            .required("Пароль обязателен"),
        })}
        onSubmit={(values) => {
          onLogin();  
          navigate("/home"); 
        }}
      >
        {() => (
          <Form>
            <div>
              <Field
                name="email"
                type="email"
                label="Email"
                fullWidth
                as={TextField}
                variant="outlined"
                margin="normal"
              />
              <ErrorMessage name="email" component="div" className="text-[red]" />
            </div>
            <div>
              <Field
                name="password"
                type="password"
                label="Пароль"
                fullWidth
                as={TextField}
                variant="outlined"
                margin="normal"
              />
              <ErrorMessage name="password" component="div" className="text-[red]"/>
            </div>
            <div>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Войти
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Authorization;
