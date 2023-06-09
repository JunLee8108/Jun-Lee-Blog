import * as React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import { styled, alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Switch, { SwitchProps } from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function Navbar(props) {
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

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

              <li className="nav-item">
                <div className="nav-darkMode">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <MaterialUISwitch sx={{ m: 1 }} defaultChecked />
                      }
                    />
                  </FormGroup>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  } else {
    return (
      <div mobile-nav-container>
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
      </div>
    );
  }
}

export default Navbar;
