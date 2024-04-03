import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import Profile from "../Components/Profile/Profile";
import { useFormik } from "formik";
import { loginSchema } from "../Models/ValidationSchema";
import { mainColor } from "../Layout/PublicStyle";
import { baseUrl } from "../Api/httpService";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../Store/Slices/Auth";
import { getCartData } from "../Store/Slices/Cart";
import { toast } from "react-toastify";
import MyButtons from "../Components/Buttons/MyButtons";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      const url = `${baseUrl}/users?email=${values.email}&password=${values.password}`;
      const GetUser = async () => {
        const User = (await axios.get(url)).data[0];
        if (User?.block === true) {
          toast.error(" Sorry This Account Is Block ", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (User) {
          dispatch(login(User));
          dispatch(getCartData(User.id));
        } else {
          toast.error(" Sorry This Account Is Not Found ", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
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
          maxWidth: "800px",
          backgroundColor: "#ececec",
          margin: "120px auto",
        }}
      >
        <Box sx={{ padding: "20px" }}>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            borderBottom={"2px solid #333"}
            pb={4}
          >
            Sign in
          </Typography>
          <Grid container spacing={4}>
            <Grid
              item
              sm={6}
              sx={{
                borderRight: { xs: "none", sm: "2px solid #333" },
                marginTop: "30px",
              }}
            >
              <Typography component="p" fontWeight={"600"} fontSize={"20px"}>
                I already have an account
              </Typography>
              <Box component={"form"} onSubmit={handleSubmit}>
                <TextField
                  color="success"
                  sx={{ width: { xs: "100%", sm: "90%" }, m: "20px 0" }}
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
                  sx={{ width: { xs: "100%", sm: "90%" }, m: "20px 0" }}
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
                <MyButtons
                  context={"login"}
                  state={"submit"}
                  colorVainat={mainColor}
                />
              </Box>
            </Grid>
            <Grid item sm={6} mt={4}>
              <Typography component={"p"} fontWeight={"600"} fontSize={"20px"}>
                I'm a new customer
              </Typography>
              <Typography
                component={"p"}
                fontWeight={"400"}
                fontSize={"14px"}
                marginBottom={"30px"}
              >
                Creating a Lacoste account is simple and easy. A Lacoste account
                will allow you to track the delivery of your purchases, manage
                your personal details, benefit from exclusive offers and more.
                Follow the next quick steps to set up your account today
              </Typography>
              <MyButtons
                context={"Create New Account"}
                click={() => navigate("/Register")}
                colorVainat={mainColor}
              />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Profile>
  );
}
