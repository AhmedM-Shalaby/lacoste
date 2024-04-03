import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import "./MyNav.css";
import { useSelector } from "react-redux";

export default function CategoriesMenu({ item }) {
  const isLoad = useSelector((state) => state.Nav.isLoad);
  console.log(isLoad);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "#333", fontSize: "12px" }}
      >
        {item.name}
        <KeyboardArrowDownIcon
          sx={{
            transition: "all 0.3s",
            transform: open ? "rotateX(180deg)" : "rotateX(0deg)",
            fontSize: "16px",
          }}
        />
      </Button>
      <Menu
        className="ListNav"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {item.categoryies.map((LinkCat) => (
          <MenuItem
            onClick={handleClose}
            key={LinkCat.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            <Typography component={"h4"} fontWeight={"700"}>
              {LinkCat.name}
            </Typography>
            <Typography component={"p"}>
              {LinkCat.sub.map((LinkSub) => {
                return (
                  <Link
                    key={LinkSub}
                    className="StyleItem"
                    to={`/${item.name}/${LinkCat.name}/${LinkSub}`}
                  >
                    {LinkSub}
                  </Link>
                );
              })}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
