import * as Yup from "yup";

export const validationSchema = Yup.object({
    email: Yup.string()
    .email("Неверный формат электронной почты")
    .required("Поле обязательно для заполнения"),
    password: Yup.string()
    .min(6, "Пароль должен содержать минимум 6 символов")
    .required("Поле обязательно для заполнения"),
})