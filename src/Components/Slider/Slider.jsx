import MyCard from "../MyCard/MyCard";
import * as React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Box, Stack } from "@mui/material";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import "./SliderStyle.css";
import { baseUrl } from "../../Api/httpService";
import { GetData } from "../../Hooks/HookApi";

export default function Slider() {
  const url = `${baseUrl}/products?categoryType=man&sub=Bestsellers`;

  const [data] = GetData(url);
  return (
    <Box
      sx={{
        width: {
          xs: 1,
        },
        mt: "50px",
      }}
    >
      <Stack
        sx={{
          padding: "20px 25px",
          overflow: "hidden",
        }}
      >
        <Box
          component={Splide}
          className="products_slider department_products_slider"
          hasTrack={false}
          width="100%"
          sx={{
            padding: "20px 0",
            zIndex: "5",
          }}
          options={{
            perPage: 4,
            perMove: 1,
            arrows: true,
            autoplay: false,
            margin: "0 auto",
            breakpoints: {
              1800: {
                perPage: 4,
                type: "slide",
                gap: "15px",
              },
              1200: {
                perPage: 4,
                type: "slide",
                gap: "15px",
              },
              992: {
                perPage: 3,
                type: "slide",
                gap: "15px",
              },
              768: {
                perPage: 2,
                type: "slide",
                gap: "15px",
              },
              600: {
                perPage: 1,
                type: "slide",
              },
            },
          }}
        >
          <SplideTrack>
            {data.map((item) => (
              <Box component={SplideSlide} key={item.id}>
                <MyCard item={item} />
              </Box>
            ))}
          </SplideTrack>
        </Box>
      </Stack>
    </Box>
  );
}
