import { baseUrl } from "../../Api/httpService";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import { headingSectionStyle } from "../../Layout/PublicStyle";
import MyButtons from "../Buttons/MyButtons";
import { GetData } from "../../Hooks/HookApi";
import Loading from "../Loading/Loading";

export default function LacosteWorld() {
  const url = `${baseUrl}/LacosteWorld`;
  const [data, isLoad] = GetData(url);
  if (isLoad) {
    return <Loading />;
  }
  return (
    <Box>
      <Grid container spacing={6}>
        {data.map((item) => (
          <Grid key={item.id} item sm={6} position={"relative"}>
            <CardMedia component={"img"} src={item.image} />
            <Box
              sx={{
                position: "absolute",
                left: "25%",
                bottom: "15%",
              }}
            >
              <Typography
                component={"p"}
                sx={{ ...headingSectionStyle, color: "#fff" }}
              >
                {item.text}
              </Typography>
              <MyButtons link={item.category} context={item.btn_text} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
