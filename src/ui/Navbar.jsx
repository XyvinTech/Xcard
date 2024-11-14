import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StyledButton from "./StyledButton";
import { Collapse } from "@mui/material";
import logo from "../assets/images/Logo.webp";

const pages = [
  { name: "Home", path: "/" },
  { name: "Features", path: "#features" },
  { name: "Products", path: "/products" },
  { name: "Support", path: "/support" },
];

const productSubpages = [
  { name: "Mobile App", path: "/products/app" },
  { name: "NFC Card", path: "/products/card" },
  { name: "QR Stand", path: "/products/qrstand" },
  { name: "Restaurant", path: "/products/restaurant" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElProducts, setAnchorElProducts] = React.useState(null);
  const [openProductsSubmenu, setOpenProductsSubmenu] = React.useState(false); // For Products subnavigation
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    navigate("/", { replace: true });
    setTimeout(() => {
      const featuresElement = document.getElementById("features");
      featuresElement?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenProductsMenu = (event) => {
    setAnchorElProducts(event.currentTarget);
  };

  const handleCloseProductsMenu = () => {
    setAnchorElProducts(null);
  };
  const toggleProductsSubmenu = () => {
    setOpenProductsSubmenu((prevOpen) => !prevOpen);
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        background: `linear-gradient(127deg, black 0%, #1E1E1E 100%)`,
        paddingTop: "20px",
        paddingBottom: "20px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderBottom: "1px #2D2D2D solid",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
         <Box component={"img"} src={logo} alt="logo" width={"160px"} height={"36px"}display={{ xs: "none", md: "flex" }} />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  backgroundColor: "#1E1E1E",
                  borderRadius: "10px",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                  width: "100%",
                  margin: "0 auto",
                },
              }}
            >
              {pages.map((page) =>
                page.name === "Features" ? (
                  <MenuItem
                    key={page.name}
                    onClick={() => {
                      handleCloseNavMenu();
                      scrollToFeatures();
                    }}
                    sx={{
                      padding: "12px 20px",
                      backgroundColor:
                        location.pathname === page.path
                          ? "#333333"
                          : "transparent",
                      "&:hover": {
                        backgroundColor: "#444444",
                      },
                    }}
                  >
                    <Typography sx={{ color: "#8E8E8E", fontSize: "16px" }}>
                      {page.name}
                    </Typography>
                  </MenuItem>
                ) : page.name === "Products" ? (
                  <MenuItem
                    key={page.name}
                    onClick={toggleProductsSubmenu}
                    sx={{
                      padding: "12px 20px",
                      display: "flex",
                      justifyContent: "space-between",
                      backgroundColor: location.pathname.startsWith("/products")
                        ? "#333333"
                        : "transparent",
                      "&:hover": {
                        backgroundColor: "#444444",
                      },
                    }}
                  >
                    <Typography sx={{ color: "#8E8E8E", fontSize: "16px" }}>
                      {page.name}
                    </Typography>
                    <ArrowDropDownIcon
                      sx={{
                        color: "#8E8E8E",
                        transform: openProductsSubmenu
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    />
                  </MenuItem>
                ) : (
                  <MenuItem
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{
                      padding: "12px 20px",
                      backgroundColor:
                        location.pathname === page.path
                          ? "#333333"
                          : "transparent",
                      "&:hover": {
                        backgroundColor: "#444444",
                      },
                    }}
                  >
                    <Link
                      to={page.path}
                      style={{
                        textDecoration: "none",
                        color:
                          location.pathname === page.path
                            ? "#A6A074"
                            : "#8E8E8E",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography>{page.name}</Typography>
                    </Link>
                  </MenuItem>
                )
              )}
              <Collapse in={openProductsSubmenu}>
                {productSubpages.map((subpage) => (
                  <MenuItem
                    key={subpage.name}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(subpage.path);
                    }}
                    sx={{
                      padding: "8px 20px",
                      paddingLeft: "40px",
                      backgroundColor:
                        location.pathname === subpage.path
                          ? "#333333"
                          : "transparent",
                      "&:hover": {
                        backgroundColor: "#444444",
                      },
                      color:
                        location.pathname === subpage.path
                          ? "#A6A074"
                          : "#8E8E8E",
                    }}
                  >
                    {subpage.name}
                  </MenuItem>
                ))}
              </Collapse>
            </Menu>
          </Box>
        
          <Box component={"img"} display={{ xs: "flex", md: "none" }} src={logo} alt="logo" width={"160px"} height={"36px"} />
          <Box
          
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: "30px",
            }}
          >
            {pages.map((page) =>
              page.name === "Features" ? (
                <Typography
                  key={page.name}
                  onClick={scrollToFeatures}
                  sx={{
                    textTransform: "none",
                    color: "#8E8E8E",
                    display: "block",
                    fontSize: "16px",
                    cursor: "pointer",
                    borderBottom: "none",
                    margin: "0 16px",
                  }}
                >
                  {page.name}
                </Typography>
              ) : page.name === "Products" ? (
                <Typography
                  key={page.name}
                  onMouseEnter={handleOpenProductsMenu}
                  sx={{
                    textTransform: "none",
                    color: "#8E8E8E",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "16px",
                    cursor: "pointer",
                    margin: "0 16px",
                  }}
                >
                  {page.name} <ArrowDropDownIcon />
                </Typography>
              ) : (
                <Link
                  key={page.name}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  style={{
                    color:
                      location.pathname === page.path ? "#A6A074" : "#8E8E8E",
                    textDecoration: "none",
                  }}
                >
                  {page.name}
                </Link>
              )
            )}
            <Menu
              anchorEl={anchorElProducts}
              open={Boolean(anchorElProducts)}
              onClose={handleCloseProductsMenu}
              MenuListProps={{
                onMouseLeave: handleCloseProductsMenu,
              }}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "#1E1E1E",
                  borderRadius: "10px",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              {productSubpages.map((subpage) => (
                <MenuItem
                  key={subpage.name}
                  onClick={() => {
                    handleCloseProductsMenu();
                    navigate(subpage.path);
                  }}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#444444",
                    },
                    color:
                      location.pathname === subpage.path
                        ? "#A6A074"
                        : "#8E8E8E",
                  }}
                >
                  {subpage.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <StyledButton name={"Buy Now"}  onClick={() => navigate("/products")}/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
