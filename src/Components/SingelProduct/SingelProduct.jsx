import {
  Box,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./singelProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../Api/httpService";
import { GetProduct } from "../../Hooks/useGetProduct";
import { headingSectionStyle } from "../../Layout/PublicStyle";
import MyButtons from "../Buttons/MyButtons";
import Slider from "../Slider/Slider";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Store/Slices/Cart";
import { toast } from "react-toastify";
export default function SingelProduct() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const [imgSlide, setImgSlide] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const url = `${baseUrl}/products/${id}`;
  const [product] = GetProduct(url);
  const HandelAddProduct = () => {
    dispatch(addItem(product));
    toast.success(" Success Adding");
  };
  return (
    <Container maxWidth={"xl"} sx={{ mt: "100px" }}>
      <Typography component={"h1"} sx={{ ...headingSectionStyle }}>
        Shopping Cart
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Stack sx={{ position: "relative" }}>
            <Box>
              <CardMedia
                component={"img"}
                sx={{
                  objectFit: "contain",
                  animation: " myAnim 0.8s linear 0s 1 normal forwards ",
                }}
                src={imgSlide ? imgSlide : product.img}
              />
            </Box>
            {product.moreImage !== undefined ? (
              <Typography
                component={"ul"}
                sx={{
                  zIndex: "1",
                  height: "100%",
                  position: "absolute",
                  left: "5px",
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px",
                  flexDirection: "column",
                }}
              >
                {product.moreImage.map((item) => (
                  <Typography
                    key={item}
                    component={"li"}
                    sx={{ width: "30px" }}
                    className={imgSlide == item ? "active" : null}
                  >
                    <CardMedia
                      component={"img"}
                      src={item}
                      sx={{ borderRadius: "10px", cursor: "pointer" }}
                      onClick={() => setImgSlide(item)}
                    />
                  </Typography>
                ))}
              </Typography>
            ) : null}
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          {product.sale && product.sale && (
            <Typography
              component={"span"}
              sx={{
                backgroundColor: "#004526",
                color: "#fff",
                width: "fit-content",
                padding: "2px",
                borderRadius: "5px",
                fontSize: "12px",
              }}
            >
              {product.PercentSale} % off
            </Typography>
          )}
          <Typography
            component={"h1"}
            sx={{ ...headingSectionStyle, fontSize: "24px", mt: "30px" }}
          >
            {product.title}
          </Typography>
          <Typography
            component={"p"}
            sx={{ fontSize: "18px", fontWeight: "700", mb: "20px" }}
          >
            Price : {product.price} Egp
          </Typography>
          {product.sale && (
            <Typography
              component={"del"}
              sx={{
                fontWeight: "600",
                color: "#c8c8c8",
                display: "block",
                mb: "20px",
              }}
            >
              {product.priceSale} EGP
            </Typography>
          )}

          <MyButtons
            mb={"20px"}
            click={() => {
              isAuth ? HandelAddProduct() : navigate("/login");
            }}
            colorVainat="#105a33"
            context={" Add To Cart "}
          />
        </Grid>
      </Grid>
      <Slider />
    </Container>
  );
}
