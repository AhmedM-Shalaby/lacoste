import { Alert, Box } from "@mui/material";
import React from "react";

export default function Error() {
  return (
    <Box
      sx={{
        m: "100px 0",
        padding: "50px",
        textAlign: "center",
        backgroundColor: "#ff8a8a",
        fontSize: "42px",
        fontWeight: "700",
        color: "#fff",
      }}
    >
      Not Found 404
    </Box>
  );
}
