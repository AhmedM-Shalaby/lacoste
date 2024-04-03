import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ListIcon from "@mui/icons-material/List";
import MyAccordion from "./MyAccoordion";
import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function MobileDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <ListIcon sx={{ color: "#000" }} fontSize="large" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
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
                    sx={{
                      fontWeight: "600",
                    }}
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
            <MyAccordion />
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}
