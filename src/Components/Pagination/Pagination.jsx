import { Pagination } from "@mui/material";
import React from "react";

export default function MyPagination({ pagesNum, setCurrPage }) {
  const handelChangePage = (x, numPage) => {
    setCurrPage(numPage);
  };
  return (
    <Pagination
      sx={{ justifyContent: "center", alignContent: "center" }}
      count={pagesNum}
      color="success"
      onChange={handelChangePage}
    />
  );
}
