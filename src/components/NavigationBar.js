import * as React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import { styled, alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from "@mui/material/useMediaQuery";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { grey } from "@mui/material/colors";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../components/pages/About";

function Navbar(props) {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      height: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    size: "small",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 0.8),
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 0, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "50px",
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "30px",
        width: "5ch",
        height: "2ch",
        fontSize: "small",
        transition: theme.transitions.create("width"),
        "&:focus": {
          width: "12ch",
        },
      },
    },
  }));

  const drawerWidth = 240;

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function Linkdrawer(props) {
    if (props.name === "Home") {
      return <Link to="/" style={{ textDecoration: "none" }}></Link>;
    }
  }

  const color = grey[50];

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  if (matches) {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <ul className="nav-menu">
              <li className="nav-item">
                <Link
                  to="/"
                  style={{ textDecoration: "none" }}
                  className="nav-links"
                >
                  <div className="navFont">Home</div>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/About"
                  style={{ textDecoration: "none" }}
                  className="nav-links"
                >
                  <div className="navFont">About</div>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Category"
                  style={{ textDecoration: "none" }}
                  className="nav-links"
                >
                  <div className="navFont">Categories</div>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Contact"
                  style={{ textDecoration: "none" }}
                  className="nav-links"
                >
                  <div className="navFont">Contact</div>
                </Link>
              </li>

              <li className="nav-item">
                <div className="nav-search">
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon fontSize="small" />
                    </SearchIconWrapper>
                    <StyledInputBase
                      fontSize="small"
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  } else {
    return (
      <Box sx={{ display: "flex" }}>
        <div className="drawer-icon">
          <IconButton
            color="error"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
            <div className="drawer-icon-font">Menu</div>
          </IconButton>
        </div>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <div className="drawer-header">Jun's Blog</div>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="drawer-links"
          >
            <div>•&nbsp;&nbsp;&nbsp;Home</div>
          </Link>
          <Link
            to="/About"
            style={{ textDecoration: "none" }}
            className="drawer-links"
          >
            <div>•&nbsp;&nbsp;&nbsp;About</div>
          </Link>
          <Link
            to="/Category"
            style={{ textDecoration: "none" }}
            className="drawer-links"
          >
            <div>•&nbsp;&nbsp;&nbsp;Categories</div>
          </Link>
          <Link
            to="/Contact"
            style={{ textDecoration: "none" }}
            className="drawer-links"
          >
            <div>•&nbsp;&nbsp;&nbsp;Contact</div>
          </Link>
        </Drawer>
        <DrawerHeader />
      </Box>
    );
  }
}

export default Navbar;
