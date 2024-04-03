import {
  Box,
  Breadcrumbs,
  Button,
  CardMedia,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../Api/httpService";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { addProductSchema } from "../../Models/ValidationSchema";
import { GetData } from "../../Hooks/HookApi";
import styled from "@emotion/styled";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { UploadData } from "../../Hooks/useUploadData";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Store/Slices/Products";
import Swal from "sweetalert2";
const VisuallyHiddenInput = styled("input")({
  // input file style
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: "100%",
});

export default function CreationProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const urlData = `${baseUrl}/categoriesNav`;
  const [data] = GetData(urlData);
  const [file, setFile] = useState([]);
  const [error, setError] = useState(false);
  const handelGetImg = (e) => {
    const fileReader = new FileReader();
    setError(false);
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = (e) => {
      setFile([...file, e.target.result]);
      setFieldValue("img", file[0]);
      setFieldValue("moreImage", [...file, e.target.result]);
    };
  };

  const HanelEditProduct = async (url, data) => {
    console.log(data);
    // const response = await axios.patch(url, data);
    // dispatch(updataProduct(data));
    navigate("/Dashboard");
  };

  const HandeAddProduct = async (url, data) => {
    dispatch(addProduct(data));
    const respones = await UploadData(url, data);
    console.log(respones);
    Swal.fire({
      title: "Success Add Prodcut",
      icon: "success",
    });
  };

  const formik = useFormik({
    initialValues: {
      id: Math.random() * 10000000,
      title: "",
      categoryType: "",
      category: "",
      sub: "",
      price: 0,
      priceSale: 0,
      color: 0,
      sale: false,
      img: "",
      moreImage: [],
    },
    validationSchema: addProductSchema,
    onSubmit: (values, { resetForm }) => {
      if (id !== undefined) {
        const url = `${baseUrl}/products/${id}`;
        HanelEditProduct(url, { ...values, PercentSale });
      } else {
        if (file.length > 0) {
          const url = `${baseUrl}/products`;
          HandeAddProduct(url, { ...values, PercentSale });
        } else {
          setError(true);
        }
      }
      resetForm();
      setFile([]);
    },
  });
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
    setValues,
  } = formik;
  const PercentSale = parseInt(
    ((values.priceSale - values.price) / values.priceSale) * 100
  );
  const seleteCat = data.filter((cat) => cat.name === values.categoryType);
  const selectSub = seleteCat[0]?.categoryies.filter(
    (item) => item.name === values.category
  );

  useEffect(() => {
    if (id !== undefined) {
      const url = `${baseUrl}/products/${id}`;
      const fetchData = async () => {
        const response = await axios.get(`${url}`);
        setValues(response.data);
        setFile(response.data.moreImage);
      };
      fetchData();
    }
  }, [id]);

  return (
    <Container maxWidth="xl" sx={{ mt: "100px" }}>
      <Box>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Link to="/Dashboard">Dashboard</Link>
        </Breadcrumbs>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{
          mt: "20px",
        }}
      >
        <Grid item sm={12} md={9} component={"form"} onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item sm={6} md={4} width={"100%"}>
              <TextField
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                label="Title"
                variant="outlined"
                color="success"
                helperText={errors.title && touched.title ? errors.title : null}
                error={Boolean(errors.title) && touched.title}
              />
            </Grid>
            <Grid item sm={6} md={4} width={"100%"}>
              <TextField
                select
                fullWidth
                color="success"
                label="categoryType"
                name="categoryType"
                value={values.categoryType}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.categoryType && touched.categoryType
                    ? errors.categoryType
                    : null
                }
                error={Boolean(errors.categoryType) && touched.categoryType}
              >
                {data?.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item sm={6} md={4} width={"100%"}>
              <TextField
                select
                fullWidth
                color="success"
                label="category"
                name="category"
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.category && touched.category ? errors.category : null
                }
                error={Boolean(errors.category) && touched.category}
              >
                {seleteCat.length > 0 ? (
                  seleteCat?.map((item) => {
                    return item.categoryies?.map((category) => {
                      return (
                        <MenuItem value={category.name}>
                          {category.name}
                        </MenuItem>
                      );
                    });
                  })
                ) : (
                  <MenuItem disabled>Go To Selete Categoies</MenuItem>
                )}
              </TextField>
            </Grid>
            <Grid item sm={6} md={4} width={"100%"}>
              <TextField
                select
                fullWidth
                color="success"
                label="sub"
                name="sub"
                value={values.sub}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.sub && touched.sub ? errors.sub : null}
                error={Boolean(errors.sub) && touched.sub}
              >
                {values.category !== "" ? (
                  selectSub?.map((item) => {
                    return item.sub.map((sub) => {
                      return <MenuItem value={sub}>{sub}</MenuItem>;
                    });
                  })
                ) : (
                  <MenuItem disabled>Go To Selete Categoy</MenuItem>
                )}
              </TextField>
            </Grid>
            <Grid item sm={6} md={4} width={"100%"}>
              <TextField
                name="price"
                type="number"
                value={values.price}
                onChange={(e) =>
                  e.target.value > 0 ? handleChange(e) : undefined
                }
                onBlur={handleBlur}
                fullWidth
                label="price"
                variant="outlined"
                color="success"
                helperText={errors.price && touched.price ? errors.price : null}
                error={Boolean(errors.price) && touched.price}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">EGP</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item sm={6} md={4} width={"100%"}>
              <TextField
                name="priceSale"
                type="number"
                value={values.priceSale}
                onChange={(e) =>
                  e.target.value > 0 ? handleChange(e) : undefined
                }
                onBlur={handleBlur}
                fullWidth
                label="price Sale"
                variant="outlined"
                color="success"
                helperText={
                  errors.priceSale && touched.priceSale
                    ? errors.priceSale
                    : null
                }
                error={Boolean(errors.priceSale) && touched.priceSale}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">EGP</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item sm={6} md={4} width={"100%"}>
              <TextField
                name="color"
                value={values.color}
                onChange={(e) =>
                  e.target.value >= 0 ? handleChange(e) : undefined
                }
                onBlur={handleBlur}
                type="number"
                fullWidth
                label="color"
                variant="outlined"
                color="success"
                helperText={errors.color && touched.color ? errors.color : null}
                error={Boolean(errors.color) && touched.color}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Color</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item sm={6} md={4} width={"100%"}>
              <Button
                color={
                  error ? "error" : id !== undefined ? "warning" : "primary"
                }
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload Image
                <VisuallyHiddenInput
                  type="file"
                  onChange={(e) => {
                    handelGetImg(e);
                  }}
                />
              </Button>
            </Grid>
            <Grid item sm={6} md={4} width={"100%"}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Saleing
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="sale"
                  name="sale"
                  value={values.sale}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Discount"
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="No Discount"
                    onChange={handleChange}
                  />
                </RadioGroup>
              </FormControl>
              {/* name="priceSale" type="number" value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth label="price Sale" variant="outlined" color="success"
              helperText=
              {errors.priceSale && touched.priceSale ? errors.priceSale : null}
              error={Boolean(errors.priceSale) && touched.priceSale} */}
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{ margin: "20px 0" }}
            color={id !== undefined ? "warning" : "primary"}
          >
            {id !== undefined ? "Up Data Product" : "Add Product"}
          </Button>
        </Grid>
        <Grid item sm={4} md={3}>
          <Box>
            <Stack maxWidth={"600px"}>
              <Box position={"relative"}>
                <CardMedia
                  src={file[0] || values.img || "https://placehold.co/600x400"}
                  component={"img"}
                />
                <Typography
                  component={"p"}
                  sx={{
                    position: "absolute",
                    bottom: "10%",
                    left: "5%",
                    fontSize: "12px",
                    padding: "5px",
                    backgroundColor: "#fff",
                    fontWeight: "600",
                  }}
                >
                  {values.color} + color
                </Typography>
              </Box>
              <Typography
                component={"span"}
                sx={{
                  backgroundColor: "#004526",
                  color: "#fff",
                  width: "fit-content",
                  padding: "2px",
                  borderRadius: "5px",
                  fontSize: "12px",
                  m: "10px",
                }}
              >
                {PercentSale || 0} % off
              </Typography>
              <Typography
                component={"h5"}
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {values.title || "product Title"}
              </Typography>
              <Typography component={"span"} sx={{ fontWeight: "600" }}>
                {values.price || 0} EGP
              </Typography>
              <Typography
                component={"del"}
                sx={{ fontWeight: "600", color: "#c8c8c8" }}
              >
                {values.priceSale || "0"} EGP
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
