import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { headingSectionStyle } from "../Layout/PublicStyle";
import MyTabs from "../Components/Dashborad/MyTabs";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  const backgroundDashboradUrl =
    "https://www.lacoste.com.eg/on/demandware.static/Sites-Lacoste_EG-Site/-/en_EG/v1693989712756/images/desktop-header.png";

  return (
    <Stack>
      <Box
        sx={{
          margin: "70px 0 ",
          padding: "100px 0px ",
          backgroundImage: `url(${backgroundDashboradUrl})`,
          textAlign: "center",
        }}
      >
        <Typography
          component={"h1"}
          sx={{ ...headingSectionStyle, color: "#fff" }}
        >
          Welcome to your account
          <Typography component={"p"}>
            {" "}
            {user?.firstName} {user?.lastName}{" "}
          </Typography>
        </Typography>
      </Box>
      <MyTabs />
    </Stack>
  );
}
