import { Box, CardMedia } from "@mui/material";
import MyButtons from "../Buttons/MyButtons";
import { useNavigate } from "react-router-dom";

export default function BackToSchool() {
  let img =
    "https://res.cloudinary.com/dkbnpozos/image/upload/q_auto,f_auto/v1691997299/lacoste/back%20to%20work/hp-starter-back-to-work-en-desk.jpg";
  const img2 =
    "https://res.cloudinary.com/dkbnpozos/image/upload/q_auto,f_auto/v1692000317/lacoste/back%20to%20work/hp-starter-back-to-work-en-mob.jpg";
  const navigate = useNavigate();
  return (
    <Box sx={{ position: "relative", mt: "70px" }}>
      <CardMedia
        component={"img"}
        src={img}
        sx={{ display: { md: "block", xs: "none" } }}
      />
      <CardMedia
        component={"img"}
        src={img2}
        sx={{ display: { md: "none", xs: "block", height: "400px" } }}
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          position: "absolute",
          bottom: "30%",
          left: "5%",
        }}
      >
        <MyButtons
          click={() => navigate("man/Clothing/Bestsellers")}
          context={"Back to Work"}
        />
        <MyButtons
          click={() => navigate("man/Clothing/Knitwear")}
          context={"Back to School"}
        />
      </Box>
    </Box>
  );
}
