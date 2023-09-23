import { Box, CardMedia, IconButton, Stack, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../Store/Slices/Cart";
import { useDispatch } from "react-redux";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
export default function CartShop({ item }) {
  const dispatch = useDispatch();
  const handelDeleteItem = () => {
    dispatch(removeItem(item.id));
  };
  const handelincreaseQuantity = () => {
    dispatch(increaseQuantity(item.id));
  };
  const handeldecreaseQuantity = () => {
    dispatch(decreaseQuantity(item.id));
  };
  return (
    <Stack
      direction={"row"}
      sx={{
        justifyContent: "space-between",
        gap: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "10px",
        position: "relative",
        m: "20px 0",
        backgroundColor: "#fff",
      }}
    >
      <Box flexBasis={"150px"}>
        <CardMedia
          component={"img"}
          src={item.img}
          sx={{ borderRadius: "10px" }}
        />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          component={"p"}
          sx={{ fontSize: "14px", width: "80%", fontWeight: "600" }}
        >
          {item.title}
        </Typography>
        <Typography
          component={"p"}
          sx={{ fontSize: "14px", fontWeight: "500", mt: "5px", mb: "5px" }}
        >
          one pieces : {item.price} Egp
        </Typography>
        <Box
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
          }}
        >
          total Product:
          <Box>
            <IconButton
              variant="contained"
              color="success"
              size="small"
              onClick={handelincreaseQuantity}
            >
              <AddBoxIcon />
            </IconButton>
            <Typography component={"span"}>{item.quantity}</Typography>
            <IconButton
              variant="contained"
              color="success"
              size="small"
              onClick={handeldecreaseQuantity}
            >
              <IndeterminateCheckBoxIcon />
            </IconButton>
          </Box>{" "}
          pieces
        </Box>

        <Typography
          component={"p"}
          sx={{ fontSize: "14px", fontWeight: "500", mt: "5px" }}
        >
          total price: {item.quantity * item.price} Egp
        </Typography>
      </Box>
      <IconButton
        sx={{ position: "absolute", top: "0", right: "0" }}
        onClick={handelDeleteItem}
      >
        <CancelIcon />
      </IconButton>
    </Stack>
  );
}
