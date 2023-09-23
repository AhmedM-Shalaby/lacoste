import {
  Box,
  Container,
  Grid,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import MyButtons from "../Components/Buttons/MyButtons";
import { Link } from "react-router-dom";
import { HeadFooter, paragraphFooter } from "../Layout/PublicStyle";

export default function Footer() {
  return (
    <Container
      sx={{
        backgroundColor: "#d9d9d9",
        padding: "60px 20px",
      }}
      maxWidth="xl"
    >
      <Stack>
        <Grid container spacing={4} justifyContent={"center"}>
          <Grid item sm={12} md={4} lg={3}>
            <Typography
              component={"h4"}
              sx={{ fontSize: "18px", fontWeight: "600" }}
            >
              LACOSTE NEWSLETTER
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                gap: "50px",
                my: "20px",
                flexDirection: "column",
              }}
            >
              <TextField
                variant="outlined"
                size="small"
                label="Enter Your Email"
                color="success"
                sx={{
                  height: "10px",
                  flexGrow: "1",
                }}
              />
              <MyButtons context={"Sign Up"} />
            </Box>
            <Box>
              <Stack direction={"row"} flexWrap={"wrap"} spacing={4}>
                <i className="bi bi-instagram iconsSo"></i>
                <i className="bi bi-facebook iconsSo"></i>
                <i className="bi bi-twitter iconsSo"></i>
                <i className="bi bi-pinterest iconsSo"></i>
                <i className="bi bi-youtube iconsSo"></i>
              </Stack>
            </Box>
          </Grid>
          <Grid item sm={6} md={4} lg={3}>
            <Typography sx={HeadFooter} component={"h2"}>
              ABOUT LACOSTE{" "}
            </Typography>
            <Typography
              sx={{
                ...paragraphFooter,
                "&:hover": {
                  color: "#105a33",
                  transform: "translateX(10px)",
                },
              }}
              component={"p"}
            >
              The Lacoste Group
            </Typography>
            <Typography
              sx={{
                ...paragraphFooter,
                "&:hover": {
                  color: "#105a33",
                  transform: "translateX(10px)",
                },
              }}
              component={"p"}
            >
              People
            </Typography>
            <Typography
              sx={{
                ...paragraphFooter,
                "&:hover": {
                  color: "#105a33",
                  transform: "translateX(10px)",
                },
              }}
              component={"p"}
            >
              Products
            </Typography>
            <Typography
              sx={{
                ...paragraphFooter,
                "&:hover": {
                  color: "#105a33",
                  transform: "translateX(10px)",
                },
              }}
              component={"p"}
            >
              Commitments
            </Typography>
            <Typography
              sx={{
                ...paragraphFooter,
                "&:hover": {
                  color: "#105a33",
                  transform: "translateX(10px)",
                },
              }}
              component={"p"}
            >
              Brand Protection
            </Typography>
          </Grid>
          <Grid item sm={6} md={4} lg={3}>
            <Typography sx={HeadFooter} component={"h2"}>
              CATEGORIES
            </Typography>
            <Typography
              sx={{
                ...paragraphFooter,
                "&:hover": {
                  color: "#105a33",
                  transform: "translateX(10px)",
                },
              }}
              component={"p"}
            >
              <Link to={"/man"}>Men's Collection</Link>
            </Typography>
            <Typography
              sx={{
                ...paragraphFooter,
                "&:hover": {
                  color: "#105a33",
                  transform: "translateX(10px)",
                },
              }}
              component={"p"}
            >
              <Link to={"/woman"}>Women's Collection</Link>
            </Typography>
            <Typography
              sx={{
                ...paragraphFooter,
                "&:hover": {
                  color: "#105a33",
                  transform: "translateX(10px)",
                },
              }}
              component={"p"}
            >
              <Link to="/Kids">Kids Collection</Link>
            </Typography>
            <Typography
              sx={{
                ...paragraphFooter,
                "&:hover": {
                  color: "#105a33",
                  transform: "translateX(10px)",
                },
              }}
              component={"p"}
            >
              <Link to={"/man/Accessories"}>Man's Accessories</Link>
            </Typography>
            <Typography
              sx={{
                ...paragraphFooter,
                "&:hover": {
                  color: "#105a33",
                  transform: "translateX(10px)",
                },
              }}
              component={"p"}
            >
              <Link to={"/man/Clothing/T-Shirts"}>Man's T-Shirts</Link>
            </Typography>
          </Grid>
          <Grid
            item
            md={3}
            sx={{
              display: {
                lg: "block",
                xs: "none ",
              },
            }}
          >
            <Typography sx={HeadFooter} component={"h2"}>
              HELP & CONTACTS
            </Typography>
            <Typography
              sx={{
                ...paragraphFooter,
                "&:hover": {
                  color: "#105a33",
                  transform: "translateX(10px)",
                },
              }}
              component={"p"}
            >
              FAQ
            </Typography>
            <Typography
              sx={{
                ...paragraphFooter,
                "&:hover": {
                  color: "#105a33",
                  transform: "translateX(10px)",
                },
              }}
              component={"p"}
            >
              BY EMAIL
            </Typography>
            <Typography
              sx={{
                ...paragraphFooter,
                "&:hover": {
                  color: "#105a33",
                  transform: "translateX(10px)",
                },
              }}
              component={"p"}
            >
              BY TELEPHONE
            </Typography>
            <Typography
              sx={{
                ...paragraphFooter,
                "&:hover": {
                  color: "#105a33",
                  transform: "translateX(10px)",
                },
              }}
              component={"p"}
            >
              +2 0224800579 *
            </Typography>
            <Typography
              sx={{
                ...paragraphFooter,
                "&:hover": {
                  color: "#105a33",
                  transform: "translateX(10px)",
                },
              }}
              component={"p"}
            >
              Contact our Guest Relations Team 7 days a week between 10am to
              10pm.
            </Typography>
            <Typography
              sx={{
                ...paragraphFooter,
                "&:hover": {
                  color: "#105a33",
                  transform: "translateX(10px)",
                },
              }}
              component={"p"}
            >
              **local costs apply depending on your phone provider.
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
