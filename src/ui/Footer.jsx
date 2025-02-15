import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import phone from "../assets/images/phone.png";
import Logo from "../assets/images/Logo.webp";
import facebook from "../assets/images/Footer/facebook.webp";
import twitter from "../assets/images/Footer/twitter.webp";
import instagram from "../assets/images/Footer/instagram.webp";
import linkedin from "../assets/images/Footer/linkedin.webp";
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
  { label: "Digital Profiles", href: "/products/profile" },
  { label: "NFC Business Card", href: "/products/card" },
  { label: "Digital Catalogue", href: "/products/qrstand" },
  { label: "Digital Restaurant Menu", href: "/products/restaurant" },
  { label: "Membership Management System", href: "/products/membership" },
];

const socialIcons = [
  {
    src: facebook,
    alt: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61566585337105&mibextid=ZbWKwL",
  },
  { src: twitter, alt: "Twitter", link: "https://www.twitter.com" },
  {
    src: instagram,
    alt: "Instagram",
    link: "https://www.instagram.com/buzinessconnect/?hl=en",
  },
  { src: linkedin, alt: "LinkedIn", link: "https://www.linkedin.com" },
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
    <Grid
      container
      bgcolor={"#000000"}
      spacing={2}
      padding={{ xs: 5, md: 10, sm: 5 }}
    >
      <Grid item md={3} sm={3} display={"flex"} justifyContent={"center"}>
        <Stack spacing={2}>
          <img
            src={Logo}
            alt="logo"
            objectFit="fill"
            width={"160px"}
            height={"36px"}
          />
          <Typography variant="h5">
            The all-in-one business card for the modern professional. Network
            smarter, connect deeper, and grow your business faster.
          </Typography>
          <Typography variant="body1" fontWeight={600}>
            <img
              src={phone}
              alt="logo"
              objectFit="fill"
              width={"15px"}
              style={{ paddingRight: "5px" }}
              height={"15px"}
            />{" "}
            +917592888111, +9197156788 3132
          </Typography>
        </Stack>
      </Grid>
      <Grid item md={5} sm={5} display={"flex"} justifyContent={"center"}>
        <Stack direction={"row"} spacing={8}>
          <Stack spacing={2}>
            <Typography variant="h3">Company</Typography>
            {companyItems.map((item, index) => (
              <Link
                key={index}
                to={item?.href}
                style={{ textDecoration: "none" }}
              >
                {" "}
                <Typography key={index} variant="h6" color="text.secondary">
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Stack>
          <Stack spacing={2}>
            <Typography variant="h3">Quick Links</Typography>
            {quickLinks.map((item, index) =>
              item.isScroll ? (
                <Typography
                  key={index}
                  onClick={scrollToFeatures}
                  sx={{
                    cursor: "pointer",
                    color: "text.secondary",
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
                  <Typography variant="h6" color="text.secondary">
                    {item.label}
                  </Typography>
                </Link>
              )
            )}
          </Stack>
        </Stack>
      </Grid>
      {/* <Grid item md={4} sm={4} display={"flex"} justifyContent={"center"}>
        <SubscribeCard />
      </Grid> */}
      <Grid item xs={12}>
        <Divider sx={{ borderColor: "#A7A7A7", mt: 2 }} />
      </Grid>{" "}
      <Grid item xs={12}>
        <Stack padding={2} direction={{ xs: "column", md: "row" }} justifyContent={"space-between"}spacing={{xs:2,md:0}}>
          <Typography>© {currentYear}. All rights reserved.</Typography>
          <Stack spacing={2} direction={"row"}>
            {socialIcons.map((icon, index) => (
              <Box
                key={index}
                component="img"
                src={icon.src}
                alt={icon.alt}
                onClick={() => (window.location.href = icon.link)}
                sx={{
                  cursor: "pointer",
                  width: { xs: "18px", md: "18px", sm: "18px", lg: "24px" },
                  height: { xs: "18px", md: "18px", sm: "18px", lg: "24px" },
                }}
              />
            ))}
          </Stack>{" "}
          <Stack spacing={2} direction={"row"}>
            <Typography>
              <span style={{ opacity: 0.5 }}>Powered By </span>
              <Link
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#fff",
                }}
                to={"https://skybertech.ae"}
                target="_blank"
              >
                Skybertech
              </Link>{" "}
              <span style={{ color: "gold" }}>|</span>{" "}
              <span style={{ opacity: 0.5 }}> Developed By</span>
              <Link
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#fff",
                }}
                to={"https://xyvin.com"}
                target="_blank"
              >
                {" "}
                Xyvin
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Footer;
