import React from "react";
import Profile from "../Components/Profile/Profile";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { registerSchema } from "../Models/ValidationSchema";
import { UploadData } from "../Hooks/useUploadData";
import { baseUrl } from "../Api/httpService";
import { ButtonStyle } from "../Layout/PublicStyle";
import axios from "axios";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();
  const url = `${baseUrl}/users`;
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      values.cart = [];
      values.role = "user";
      const url = `${baseUrl}/users?email=${values.email}`;
      const GetUser = async () => {
        const User = (await axios.get(url)).data[0];
        if (User) {
          toast.error(" Sorry This Account Is Not Available ", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          delete values.passwordConfirm;
          UploadData(url, values);
          navigate("/login");
        }
      };
      GetUser();
    },
  });

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    formik;
  return (
    <Profile>
      <Stack
        sx={{
          maxWidth: "600px",
          backgroundColor: "#ececec",
          margin: "120px auto",
        }}
      >
        <Box sx={{ padding: "20px" }}>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            borderBottom={"2px solid #333"}
            pb={2}
          >
            Refister
          </Typography>
          <Grid container spacing={4}>
            <Grid
              item
              sm={12}
              sx={{
                marginTop: "32px",
              }}
            >
              <Typography component="p" fontWeight={"600"}>
                1. Enter your personal information
              </Typography>
              <Box component={"form"} onSubmit={handleSubmit}>
                <TextField
                  color="success"
                  sx={{ width: "100%", m: "10px 0" }}
                  type="text"
                  variant="filled"
                  label="first Name "
                  size="small"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.firstName && touched.firstName
                      ? errors.firstName
                      : null
                  }
                  error={Boolean(errors.firstName) && touched.firstName}
                />
                <TextField
                  color="success"
                  sx={{ width: "100%", m: "10px 0" }}
                  type="text"
                  variant="filled"
                  label="last Name"
                  size="small"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.lastName && touched.lastName ? errors.lastName : null
                  }
                  error={Boolean(errors.lastName) && touched.lastName}
                />
                <TextField
                  color="success"
                  sx={{ width: "100%", m: "10px 0" }}
                  type="email"
                  variant="filled"
                  label="Enter Your Email"
                  size="small"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.email && touched.email ? errors.email : null
                  }
                  error={Boolean(errors.email) && touched.email}
                />
                <TextField
                  color="success"
                  sx={{ width: "100%", m: "10px 0" }}
                  type="password"
                  variant="filled"
                  label="Enter Your password"
                  size="small"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.password && touched.password ? errors.password : null
                  }
                  error={Boolean(errors.password) && touched.password}
                />
                <TextField
                  color="success"
                  sx={{ width: "100%", m: "10px 0" }}
                  type="password"
                  variant="filled"
                  label="confirm Password"
                  size="small"
                  name="passwordConfirm"
                  value={values.passwordConfirm}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.passwordConfirm && touched.passwordConfirm
                      ? errors.passwordConfirm
                      : null
                  }
                  error={
                    Boolean(errors.passwordConfirm) && touched.passwordConfirm
                  }
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    sx={{ ...ButtonStyle }}
                  >
                    {" "}
                    Submit
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ ...ButtonStyle }}
                  >
                    <Link to={"/login"}>I Have Account</Link>
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Profile>
  );
}
