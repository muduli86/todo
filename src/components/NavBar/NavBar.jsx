import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/system";

const NavBar = () => {
  return (
    <AppBar sx={{ backgroundColor: "#2FA4FF", position: "static" }}>
      <Toolbar>
        <Box
          sx={{
            color: "#051367",
            flexGrow: 1,
            display: "flex",
          }}
        >
          <IconButton>
            <CalendarTodayIcon />
          </IconButton>
          <Typography variant="h4">What To Do</Typography>
        </Box>
        <Box>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
