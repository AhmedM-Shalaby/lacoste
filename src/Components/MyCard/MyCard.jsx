import { Box, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyCard({ item }) {
  const navigate = useNavigate();
  return (
    <Box
      spacing={4}
      sx={{ cursor: "pointer" }}
      onClick={() => navigate(`/shop/singleProduct/${item.id}`)}
    >
      <Box>
        <Stack padding={"10px"}>
          <Box position={"relative"}>
            <CardMedia
              src={item.img || "https://placehold.co/600x400"}
              component={"img"}
            />
            {item?.color !== 0 ? (
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
                {item?.color} + color
              </Typography>
            ) : null}
          </Box>
          {item?.sale ? (
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
              {item.PercentSale} % off
            </Typography>
          ) : null}
          <Typography
            component={"h5"}
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {item?.title || "product Title"}
          </Typography>
          <Typography component={"span"} sx={{ fontWeight: "600" }}>
            {item?.price || "0"} EGP
          </Typography>
          {item?.sale ? (
            <Typography
              component={"del"}
              sx={{ fontWeight: "600", color: "#c8c8c8" }}
            >
              {item?.priceSale || "0"} EGP
            </Typography>
          ) : null}
        </Stack>
      </Box>
    </Box>
  );
}
