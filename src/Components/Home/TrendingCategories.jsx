import { CardMedia, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { baseUrl } from "../../Api/httpService";
import { GetData } from "../../Hooks/HookApi";
import Loading from "../Loading/Loading";

export default function TrendingCategories() {
  const url = `${baseUrl}/TrendingCategories`;
  const [data, isLoad] = GetData(url);
  if (isLoad) {
    return <Loading />;
  }
  return (
    <Grid container spacing={8}>
      {data.map((product) => {
        return (
          <Grid key={product.id} item md={4} sm={6}>
            <CardMedia component={"img"} src={product.img} />
            <NavLink className="Trending__Categories" to={product.category}>
              {product.link_category}
            </NavLink>
          </Grid>
        );
      })}
    </Grid>
  );
}
