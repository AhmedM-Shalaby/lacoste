import * as yup from "yup";

export const registerSchema = yup.object({
  firstName: yup
    .string()
    .min(5, "must be at least 5 characters")
    .max(20)
    .required("This Fild Is Required"),
  lastName: yup.string().min(5).max(20).required("This Fild Is Required"),
  email: yup
    .string()
    .email(() => "inValid Email")
    .required(),
  password: yup.string().min(6).max(20).required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "password Don't Match")
    .required(),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .email(() => "inValid Email")
    .required(),
  password: yup.string().min(6).max(20).required(),
});

export const addProductSchema = yup.object({
  title: yup
    .string()
    .min(5, "must be at least 5 characters")
    .max(50)
    .required("This Fild Is Required"),
  categoryType: yup.string().required("This Fild Is Required"),
  category: yup.string().required("This Fild Is Required"),
  sub: yup.string().required("This Fild Is Required"),
  price: yup
    .number()
    .positive("Price Is Not Positive")
    .required("This Fild Is Required"),
  priceSale: yup
    .number()
    .positive("Price Is Not Positive")
    .required("This Fild Is Required"),
});
