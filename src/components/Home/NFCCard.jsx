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
import image1 from "../../assets/images/Shop/Header9.webp";
import icon from "../../assets/images/Team/Ellipse.png";
import StyledButton from "../../ui/StyledButton";
import amazon from "../../assets/images/Home/amazon.png";
import flipkart from "../../assets/images/Home/flipkart.png";
import { useNavigate } from "react-router-dom";
const NFCCard = () => {
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
        " Tap to Connect – Instantly share your digital profile, contact details, and services by tapping your card to any NFC-enabled device.",
    },

    {
      description1:
        "Modern & Sophisticated – A high-tech alternative to traditional business cards, enhancing your brand’s credibility.",
    },
    {
      description1:
        " Easily Updatable – Change your details in real-time without reprinting, ensuring up-to-date information at all times.",
    },
    {
      description1:
        " Perfect for Professionals & Businesses – Ideal for networking, sales teams, corporate professionals, and entrepreneurs.",
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
          color="white"
        >
          Tap-to-Connect NFC Cards
        </Typography>
      </Grid>
      <Grid item lg={6} sm={12} display="flex" justifyContent="center">
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
            // style={{ zIndex: 2, position: "absolute" }}
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
                    <Typography  variant="h6" fontWeight={600} color="#f2f2f2">
                      {feature?.description1}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Stack>
      </Grid>
      <Grid item md={6} sm={6} display={"flex"} justifyContent={"end"}></Grid>
      <Grid item md={6} sm={6} display={"flex"} justifyContent={"start"}>
        <Stack width={"fit-content"}>
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <StyledButton
              name={"Read More"}
              onClick={() => navigate("/products/card")}
            />

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

export default NFCCard;
