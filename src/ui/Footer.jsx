import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import phone from "../assets/images/phone.png";
import Logo from "../assets/images/Logo.webp";
import facebook from "../assets/images/Footer/facebook.webp";
import twitter from "../assets/images/Footer/twitter.webp";
import instagram from "../assets/images/Footer/instagram.webp";
import linkedin from "../assets/images/Footer/linkedin.webp";
import youtube from "../assets/images/Footer/youtube.webp";
import { Link, useNavigate } from "react-router-dom";

const companyItems = [
  {
    label: "Blog",
  },
  {
    label: "Support",
    href: "/support",
  },
];

const quickLinks = [
  { label: "Digital Profiles", href: "/products/digital-profile" },
  { label: "NFC Business Card", href: "/products/nfc-business-card" },
  { label: "Digital Catalogue", href: "/products/digital-catalogue" },
  {
    label: "Digital Restaurant Menu",
    href: "/products/digital-restaurant-menu",
  },
  {
    label: "Membership Management System",
    href: "/products/membership-management-system",
  },
];

const socialIcons = [
  {
    src: facebook,
    alt: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61566585337105&mibextid=ZbWKwL",
  },
  { src: twitter, alt: "Twitter", link: "https://x.com/BuzinesConnect" },
  {
    src: instagram,
    alt: "Instagram",
    link: "https://www.instagram.com/buzinessconnect/?hl=en",
  },
  // { src: linkedin, alt: "LinkedIn", link: "https://www.linkedin.com" },
  {
    src: youtube,
    alt: "YouTube",
    link: "https://www.youtube.com/@buzinessconnect",
  },
];

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const scrollToFeatures = () => {
    navigate("/", { replace: true });
    setTimeout(() => {
      const featuresElement = document.getElementById("features");
      featuresElement?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <Box bgcolor="#000000">
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 4, sm: 4, md: 6, lg: 8 }}
          sx={{
            pt: { xs: 6, sm: 8, md: 10 },
            pb: { xs: 4, sm: 5, md: 6 },
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Stack
              spacing={{ xs: 2, sm: 3, md: 4 }}
              alignItems={{ xs: "center", sm: "flex-start" }}
            >
              <Box
                component="img"
                src={Logo}
                alt="logo"
                sx={{
                  width: { xs: "140px", sm: "150px", md: "160px" },
                  height: "auto",
                  objectFit: "contain",
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                  textAlign: { xs: "center", sm: "left" },
                  color: "#f5f5f5",
                }}
              >
                The all-in-one business card for the modern professional.
                Network smarter, connect deeper, and grow your business faster.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                  fontWeight: 600,
                  textAlign: { xs: "center", sm: "left" },
                  color: "#f5f5f5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                <Box
                  component="img"
                  src={phone}
                  alt="phone icon"
                  sx={{
                    width: "15px",
                    height: "15px",
                    mr: 1,
                  }}
                />
            <span>+91{"  "}7592 888 111, +971 56788 3132</span>
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={5}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 4, sm: 3, md: 4, lg: 8 }}
              justifyContent={{ xs: "center", sm: "flex-start" }}
              alignItems={{ xs: "center", sm: "flex-start" }}
            >
              <Stack
                spacing={2}
                alignItems={{ xs: "center", sm: "flex-start" }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "18px", sm: "20px", md: "22px" },
                    fontWeight: 600,
                    color: "#ffffff",
                  }}
                >
                  Company
                </Typography>
                {companyItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item?.href || "#"}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", sm: "15px", md: "16px" },
                        color: "#aaaaaa",
                        "&:hover": { color: "#ffffff" },
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                ))}
              </Stack>

              <Stack
                spacing={2}
                alignItems={{ xs: "center", sm: "flex-start" }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "18px", sm: "20px", md: "22px" },
                    fontWeight: 600,
                    color: "#ffffff",
                  }}
                >
                  Quick Links
                </Typography>
                {quickLinks.map((item, index) =>
                  item.isScroll ? (
                    <Typography
                      key={index}
                      onClick={scrollToFeatures}
                      sx={{
                        cursor: "pointer",
                        fontSize: { xs: "14px", sm: "15px", md: "16px" },
                        color: "#aaaaaa",
                        "&:hover": { color: "#A6A074" },
                      }}
                    >
                      {item.label}
                    </Typography>
                  ) : (
                    <Link
                      key={index}
                      to={item.href}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "14px", sm: "15px", md: "16px" },
                          color: "#aaaaaa",
                          "&:hover": { color: "#ffffff" },
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Link>
                  )
                )}
              </Stack>
            </Stack>
          </Grid>

          {/* Subscribe Card Section - Commented out in original */}
          {/* <Grid item xs={12} md={4}>
            <SubscribeCard />
          </Grid> */}

          <Grid item xs={12}>
            <Divider sx={{ borderColor: "#A7A7A7", my: { xs: 2, sm: 3 } }} />
          </Grid>

          <Grid item xs={12}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              alignItems="center"
              spacing={{ xs: 3, md: 2 }}
              px={{ xs: 1, sm: 2 }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "14px" },
                  color: "#f5f5f5",
                  textAlign: "center",
                }}
              >
                © {currentYear}. All rights reserved.
              </Typography>

              <Stack
                direction="row"
                spacing={{ xs: 3, sm: 4 }}
                justifyContent="center"
              >
                {socialIcons.map((icon, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={icon.src}
                    alt={icon.alt}
                    onClick={() => window.open(icon.link, "_blank")}
                    sx={{
                      cursor: "pointer",
                      width: { xs: "18px", sm: "20px", md: "22px", lg: "26px" },
                      height: {
                        xs: "18px",
                        sm: "20px",
                        md: "22px",
                        lg: "24px",
                      },
                      transition: "transform 0.2s",
                      "&:hover": { transform: "scale(1.2)" },
                    }}
                  />
                ))}
              </Stack>
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "14px" },
                  color: "#f5f5f5",
                  textAlign: "center",
                }}
              >
                <span style={{ opacity: 0.5 }}>Powered By </span>
                <Link
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#fff",
                  }}
                  to="https://skybertech.com"
                  target="_blank"
                >
                  Skybertech
                </Link>{" "}
                <span style={{ color: "gold" }}>|</span>{" "}
                <span style={{ opacity: 0.5 }}>Developed By</span>
                <Link
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#fff",
                  }}
                  to="https://www.acutendeavors.com/"
                  target="_blank"
                >
                  {" "}
                  Acute Endeavors
                </Link>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
