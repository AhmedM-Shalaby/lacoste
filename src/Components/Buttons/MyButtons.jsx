import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function MyButtons({
  context,
  link,
  colorVainat,
  click,
  ...restProps
}) {
  return (
    <Button
      variant="contained"
      size="small"
      sx={{
        backgroundColor: "#fff",
        border: "none",
        padding: "10px 1.875rem",
        borderRadius: "25px",
        color: "#000",
        "&:hover": {
          backgroundColor: `${colorVainat ? colorVainat : "#292929"}`,
          color: "white",
        },
        ...restProps,
      }}
      onClick={click}
    >
      <Link to={link}>{context}</Link>
    </Button>
  );
}
