import {
  Grid,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import image1 from "../../assets/images/QR/QRStand.webp";
import icon from "../../assets/images/Team/Ellipse.png";
import StyledButton from "../../ui/StyledButton";
import amazon from "../../assets/images/Home/amazon.png";
import flipkart from "../../assets/images/Home/flipkart.png";
import { useNavigate } from "react-router-dom";
const ProductQR = () => {
  const navigate = useNavigate();
  const ref = useRef(null);

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const inView = useInView(ref, { once: false });
  const firstCol = [
    {
      description1:
        "Seamless Digital Connectivity – Display your business details, contact information and social media  with a simple scan.",
    },

    {
      description1:
        "Custom Branding – Fully personalized with your logo, colors, and brand identity for a professional eye catching touch.",
    },
    {
      description1:
        "Durability – For long-lasting use in shops, exhibitions, offices, events, or retail spaces etc.",
    },
    {
      description1:
        " Eco-Friendly Alternative – Eliminate paper brochures, flyers and paper visiting cards while maintaining a sleek digital presence.",
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      padding={{ xs: 5, md: 10, sm: 5 }}
      mt={2}
      justifyContent="flex-start"
    >
      <Grid item md={12} sm={12} display={"flex"} justifyContent={"center"}>
        <Typography
          fontSize={{ xs: "32px", md: "44px" }}
          fontWeight={700}
          textAlign={"center"}
          color="#000"
        >
          Smart QR Display Stands
        </Typography>
      </Grid>
      <Grid
        item
        lg={6}
        sm={12}
        md={6}
        xs={12}
        display={{ lg: "none", sm: "flex" }}
        justifyContent="center"
      >
        <Box
          sx={{
            transformOrigin: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            ref={ref}
            variants={slideIn}
            initial="hidden"
            animate={"visible"}
            //   style={{ zIndex: 2, position: "absolute" }}
          >
            <Box
              component="img"
              src={image1}
              alt="mobile image"
              sx={{
                objectFit: "fill",
                width: { xs: "100%", sm: "80%", md: "70%", lg: "373px" },
                height: { xs: "auto", lg: "228px" },
                position: "relative",
              }}
            />
          </motion.div>
        </Box>
      </Grid>
      <Grid
        item
        md={6}
        sm={12}
        lg={6}
        xs={12}
        display={"flex"}
        justifyContent={"center"}
      >
        <Stack spacing={2}>
          <List>
            {firstCol?.map((feature, index) => (
              <ListItem alignItems="flex-start" key={index}>
                <ListItemIcon sx={{ minWidth: 24, marginTop: 1.5 }}>
                  <img
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                    }}
                    src={icon}
                    alt="icon"
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="h6" fontWeight={600} color="#000">
                      {feature?.description1}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Stack>
      </Grid>{" "}
      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
        md={6}
        display={{ xs: "none", lg: "flex", sm: "none" }}
        justifyContent="center"
      >
        <Box
          sx={{
            transformOrigin: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            ref={ref}
            variants={slideIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            //   style={{ zIndex: 2, position: "absolute" }}
          >
            <Box
              component="img"
              src={image1}
              alt="mobile image"
              sx={{
                objectFit: "fill",
                width: { xs: "100%", sm: "80%", md: "70%", lg: "373px" },
                height: { xs: "auto", lg: "228px" },
                position: "relative",
              }}
            />
          </motion.div>
        </Box>
      </Grid>
      {/* <Grid item md={6} sm={6} display={"flex"} justifyContent={"end"}></Grid> */}
      <Grid item md={6} sm={6} display={"flex"} justifyContent={"start"}>
        <Stack width={"fit-content"}>
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <StyledButton
              name={"Read More"}
              onClick={() => navigate("/products/digitalcatalogue")}
            />
            <StyledButton name="See Demo" secondary />

            <Typography variant="h6" color="#8E8E8E">
              Available on:
            </Typography>
            <Box
              component="img"
              src={amazon}
              width="39px"
              height="39px"
              alt="Amazon"
              sx={{ cursor: "pointer" }}
              onClick={() =>
                (window.location.href = "https://www.amazon.in/dp/B0CNKJMNNX")
              }
            />
            <Box
              component="img"
              src={flipkart}
              width="20px"
              height="25px"
              alt="Flipkart"
              sx={{ cursor: "pointer" }}
              onClick={() =>
                (window.location.href =
                  "https://www.flipkart.com/buzinessconnect-nil-card-display-stand/p/itmf432721b54316?pid=CYDH7VYYVHCX5KQT")
              }
            />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ProductQR;
