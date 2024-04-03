import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MyCard from "../Components/MyCard/MyCard";
import { Box, Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import { headingSectionStyle } from "../Layout/PublicStyle";
import Slider from "../Components/Slider/Slider";
import { useSelector } from "react-redux";
import Loading from "../Components/Loading/Loading";
import Error from "./Error";
import MyPagination from "../Components/Pagination/Pagination";

export default function Shop() {
  const { catType, category, sub } = useParams();
  const [currPage, setCurrPage] = useState(1);
  const products = useSelector((state) => state.data.products);
  const isLoading = useSelector((state) => state.data.isLoading);
  const isError = useSelector((state) => state.data.isError);
  const data = products.filter((item) => {
    return catType && category && sub
      ? item.categoryType.toLowerCase() === catType?.toLowerCase() &&
          item.category.toLowerCase().trim() ===
            category?.toLowerCase().trim() &&
          item.sub.toLowerCase().trim() ===
            sub?.toLowerCase().trim().split(" ").join("")
      : catType && category
      ? item.categoryType.toLowerCase() === catType?.toLowerCase() &&
        item.category.toLowerCase().trim() === category.toLowerCase().trim()
      : catType
      ? item.categoryType.toLowerCase() === catType.toLowerCase()
      : null;
  });

  const PRODUCTS_PER_PAGE = 8;
  const pagesNum = Math.ceil(data.length / PRODUCTS_PER_PAGE);
  const start = (currPage - 1) * PRODUCTS_PER_PAGE;
  const end = currPage * PRODUCTS_PER_PAGE - 1;

  if (isLoading) <Loading />;
  if (isError) <Error />;
  return (
    <Container maxWidth={"xl"} sx={{ mt: 10 }}>
      <Typography
        component={"h1"}
        sx={{ ...headingSectionStyle, mt: "100px", mb: "10px" }}
      >
        {sub
          ? sub
          : category
          ? `All products for ${category}`
          : catType
          ? `All Products for ${catType}`
          : ""}
      </Typography>
      <Box mb={"10px"}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Link to={`/${catType}`}>{catType}</Link>
          {category && <Link to={`/${catType}/${category}`}>{category}</Link>}
        </Breadcrumbs>
      </Box>
      <Typography component={"p"}>
        {data.slice(start, end + 1).length} results
      </Typography>
      <Grid container spacing={2}>
        {data.slice(start, end + 1).map((item) => {
          return (
            <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
              <MyCard item={item} />
            </Grid>
          );
        })}
      </Grid>
      <MyPagination pagesNum={pagesNum} setCurrPage={setCurrPage} />
      <Slider />
    </Container>
  );
}
