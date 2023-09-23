import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "../Components/Home/SectionHeading";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CartShop from "../Components/MyCard/CartShop";
import { Link } from "react-router-dom";
import { removeAll } from "../Store/Slices/Cart";
import { styleCartText } from "../Layout/PublicStyle";
import Swal from "sweetalert2";

export default function ShopCart() {
  const cart = useSelector((state) => state.shopCart.cart);
  const totalItems = useSelector((state) => state.shopCart.totalItems);
  const totalPrice = useSelector((state) => state.shopCart.totalPrice);
  const dispatch = useDispatch();
  const Taxes = totalItems > 3 ? 0 : 500;
  // const getHeight = useRef();
  // const getelement = useRef();
  // const [heightColl, setHeightColl] = useState(0);

  // useEffect(() => {
  //   window.onscroll = () => {
  //     const height =
  //       getHeight?.current.clientHeight -
  //       getHeight?.current.offsetTop -
  //       getelement?.current.clientHeight;
  //     // console.log(height);
  //     console.log(getelement?.current.clientHeight);
  //     setHeightColl(window.scrollY >= height ? height + 85 : window.scrollY);
  //   };
  // }, [window.scrollY]);

  const handelRemoveAll = () => {
    dispatch(removeAll());
  };
  const handelCheck = () => {
    Swal.fire({
      title: "Success Check Out , Look at the Email",
      icon: "success",
    });
    // dispatch(removeAll());
  };
  return (
    <Stack sx={{ mt: "80px", backgroundColor: "#f1f1f1" }}>
      <SectionHeading nameHeading={"Cart Shopping"}>
        <Grid container spacing={4}>
          <Grid item sm={12} md={8}>
            {cart.length > 0 ? (
              cart.map((item) => <CartShop key={item.id} item={item} />)
            ) : (
              <Box>
                Go To Shoping
                <Link to={"/man/Clothing/Shirts"}> Click Here</Link>{" "}
              </Box>
            )}
          </Grid>
          {totalItems > 0 ? (
            <Grid item md={4}>
              <Stack
                sx={{
                  position: "relative",
                  m: "20px 0",
                  mx: "auto",
                  transition: "all 0.3s",
                }}
              >
                <Box
                  // ref={getelement}
                  sx={{
                    // position: "absolute",
                    width: "calc(100% - 20px)",
                    // top: heightColl + "px",
                    backgroundColor: "#fff",
                    padding: "20px",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      maxWidth: "600px",
                      mb: "20px",
                    }}
                  >
                    <Box width={"50%"}>
                      <Typography component={"p"} fontWeight={"700"} mb={2}>
                        {totalItems} Product
                      </Typography>
                      <Typography component={"p"} sx={{ ...styleCartText }}>
                        Shipping
                      </Typography>
                      <Typography component={"p"} sx={{ ...styleCartText }}>
                        Taxes
                      </Typography>
                      <Typography
                        component={"p"}
                        sx={{
                          ...styleCartText,
                          fontWeight: "700",
                          color: "#105a33",
                          fontSize: "16px",
                        }}
                      >
                        TOTAL
                      </Typography>
                    </Box>
                    <Box width={"50%"} textAlign={"end"}>
                      <Typography component={"p"} fontWeight={"700"} mb={2}>
                        {totalPrice} EGP
                      </Typography>
                      <Typography component={"p"} sx={{ ...styleCartText }}>
                        Free
                      </Typography>
                      <Typography component={"p"} sx={{ ...styleCartText }}>
                        {totalItems > 3 ? "Free" : `${Taxes} EGP`}
                      </Typography>
                      <Typography
                        component={"p"}
                        sx={{
                          ...styleCartText,
                          fontWeight: "700",
                          color: "#105a33",
                          fontSize: "16px",
                        }}
                      >
                        {totalPrice + Taxes} Egp
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    sx={{ display: "block", mb: "10px" }}
                    variant="contained"
                    color="success"
                    onClick={handelCheck}
                  >
                    Check Out
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handelRemoveAll}
                  >
                    Delete All Product{" "}
                  </Button>
                </Box>
              </Stack>
            </Grid>
          ) : null}
        </Grid>
      </SectionHeading>
    </Stack>
  );
}
