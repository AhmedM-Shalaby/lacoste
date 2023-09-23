import * as React from "react";
import "./DashbordStyle.css";
import { Avatar } from "@mui/material";
import ActionsProducts from "./ActionsProducts";
import DataGridTable from "./DataGridTable";
import MyButtons from "../Buttons/MyButtons";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import Error from "../../Pages/Error";
export default function ConfigProducts() {
  const products = useSelector((state) => state.data.products);
  const isLoading = useSelector((state) => state.data.isLoading);
  const isError = useSelector((state) => state.data.isError);
  if (isLoading) <Loading />;
  if (isError) <Error />;
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "img",
      headerName: "Avater",
      renderCell: (params) => <Avatar src={params.row.img} />,
      width: 100,
    },
    { field: "title", headerName: "Title", width: 300 },
    { field: "categoryType", headerName: "Type" },
    { field: "category", headerName: "Category" },
    { field: "sub", headerName: "Sub Category", flex: 1 },
    { field: "price", headerName: "price " },
    {
      field: "sale",
      headerName: "sale ",
      type: "boolean",
    },
    { field: "color", headerName: "color" },
    {
      field: "action",
      headerName: "Actions",
      type: "action",
      width: 200,
      renderCell: (params) => <ActionsProducts {...{ ...params }} />,
    },
  ];
  const PerPage = [5, 10, 20, 25, 50];
  return (
    <>
      <MyButtons link={"/addProducts"} context={"Add Product"} mb={"20px"} />
      <DataGridTable columns={columns} rows={products} PerPage={PerPage} />
    </>
  );
}
