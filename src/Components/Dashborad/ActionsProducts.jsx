import { Box, IconButton } from "@mui/material";
import React from "react";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteIcon from "@mui/icons-material/Delete";
import { DeleteProduct } from "../../Api/DeleteProduct";
import { baseUrl } from "../../Api/httpService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../Store/Slices/Products";
import Swal from "sweetalert2";

export default function ActionsProducts({ id }) {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const handelDeleteProduct = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((data) => {
      if (data.isConfirmed) {
        dispacth(removeProduct(id));
        const url = `${baseUrl}/products/${id}`;
        // DeleteProduct(url);
        toast.success("This Product IS Delete", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    });
  };

  const handelEdit = () => {
    navigate(`/Edit/${id}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <IconButton aria-label="Edit" size="small" onClick={handelEdit}>
        <EditTwoToneIcon fontSize="20px" color="warning" />
      </IconButton>
      <IconButton
        aria-label="delete"
        fontSize="small"
        onClick={handelDeleteProduct}
      >
        <DeleteIcon fontSize="small" color="error" />
      </IconButton>
    </Box>
  );
}
