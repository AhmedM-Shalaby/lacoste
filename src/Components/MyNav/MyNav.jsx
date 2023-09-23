import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import CategoriesMenu from "./CategoryMenu";
import { baseUrl } from "../../Api/httpService";
import { GetData } from "../../Hooks/HookApi";
import { Link, useNavigate } from "react-router-dom";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import MobileDrawer from "./MobileDrwar";
import { useDispatch, useSelector } from "react-redux";
import { ButtonStyle } from "../../Layout/PublicStyle";
import { logout } from "../../Store/Slices/Auth";
import Swal from "sweetalert2";
export default function MyNav() {
  const url = `${baseUrl}/categoriesNav`;
  const navigate = useNavigate();
  const [data] = GetData(url);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const role = useSelector((state) => state.auth.role);
  const totalItems = useSelector((state) => state.shopCart.totalItems);
  const dispatch = useDispatch();
  const HandelLogout = () => {
    Swal.fire({
      title: "Are You Sure To Do This ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log Out!",
    }).then((data) => {
      if (data.isConfirmed) {
        dispatch(logout());
        navigate("/");
      }
    });
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "white", color: "#000", padding: "5px" }}
    >
      <Toolbar sx={{ direction: "row", justifyContent: "space-between" }}>
        <Box>
          <Link to={"/"}>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                component={"h5"}
                sx={{ display: { xs: "none", sm: "block" }, fontWeight: "600" }}
              >
                LACOSTE
              </Typography>
              <Avatar
                alt="logo"
                src="https://logowik.com/content/uploads/images/lacoste-crocodile6472.logowik.com.webp"
              />
            </Box>
          </Link>
        </Box>

        <Box flexGrow={"1"} sx={{ display: { xs: "none", md: "block" } }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"20px"}
          >
            {data.map((item) => {
              return <CategoriesMenu key={item.id} item={item} />;
            })}
          </Stack>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {role == "admin" ? (
            <PersonOutlineOutlinedIcon
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/Dashboard")}
            />
          ) : null}
          {isAuth ? (
            <LogoutIcon sx={{ cursor: "pointer" }} onClick={HandelLogout} />
          ) : (
            <Button
              variant="contained"
              size="small"
              sx={{ ...ButtonStyle }}
              onClick={() => navigate("login")}
            >
              login
            </Button>
          )}
          <Badge badgeContent={isAuth ? totalItems : 0} color="success">
            <LocalMallOutlinedIcon
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/ShopCart")}
            />
          </Badge>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <MobileDrawer data={data} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
