import { Container } from "@mui/material";
import React from "react";

export default function Profile(props) {
  const img =
    "https://www.lacoste.com.eg/on/demandware.static/Sites-Lacoste_EG-Site/-/en_EG/v1693227646283/images/bg_fid_no.png";
  return (
    <Container
      sx={{
        backgroundImage: `url(${img})`,
        overflow: "hidden",
      }}
      maxWidth={"xl"}
    >
      {props.children}
    </Container>
  );
}
