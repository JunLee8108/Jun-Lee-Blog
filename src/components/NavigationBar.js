import { Link } from "react-router-dom";
import "./NavigationBar.css";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

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
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

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
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
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
}

export default Navbar;
