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
import { Link, useLocation } from "react-router-dom"; 
import Logo from "../assets/images/Logo.png";
import StyledButton from "./StyledButton";

const pages = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Team", path: "/team" },
  { name: "Mobile App", path: "/mobile-app" },
  { name: "Shop", path: "/shop" },
  { name: "Support", path: "/support" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation(); // Get current location

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: `linear-gradient(127deg, black 0%, #1E1E1E 100%)`,
        paddingTop: "30px",paddingBottom: "30px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",borderBottom: "1px #2D2D2D solid",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            component="img"
            src={Logo}
            alt="logo"
            sx={{
              width: "99px",
              height: "48px",
              objectFit: "fill",
              display: { xs: "none", md: "flex" },
            }}
          />

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
              sx={{ display: { xs: "block", md: "none" }, }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography color="text.secondary">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="img"
            src={Logo}
            alt="logo"
            sx={{
              width: "99px",
              height: "48px",
              objectFit: "fill",
              display: { xs: "flex", md: "none" },
            }}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: "30px",
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.name}
                to={page.path}
                onClick={handleCloseNavMenu}
                style={{
                  textTransform: "none",
                  color:
                    location.pathname === page.path ? "#A6A074" : "#8E8E8E", // Active color
                  display: "block",
                  fontSize: "16px",
                  borderRadius: "0px",
                  fontWeight: "500",
                  textDecoration: "none",
                  borderBottom:
                    location.pathname === page.path
                      ? "2px solid #A6A074"
                      : "none", // Active border
                  margin: "0 16px",
                }}
              >
                {page.name}
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <StyledButton name={"Buy Now"} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
