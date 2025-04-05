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
import image1 from "../../assets/images/products/Profile.webp";
import icon from "../../assets/images/Button.png";
import StyledButton from "../../ui/StyledButton";
import amazon from "../../assets/images/Home/amazon.png";
import flipkart from "../../assets/images/Home/flipkart.png";
import { useNavigate } from "react-router-dom";
const XcardDigitalProfile = () => {
  const navigate = useNavigate();
  const ref = useRef(null);

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const inView = useInView(ref, { once: false });
  const firstCol = [
    {
      description1: "Instant Contact Sharing & networking",
    },

    {
      description1: "Analytics & Scalability ",
    },
    {
      description1: "Social Media Integration",
    },
    {
      description1:
        "Showcase Your Work – List your products, services, portfolio and more for instant visibility",
    },
  ];
  const secondCol = [
    {
      description1: "Multi-Card Support ",
    },

    {
      description1: "Customer Feedback & Reviews",
    },
    {
      description1: "Real-Time Editable Profile",
    },
    {
      description1: "Multi-Device Access",
    },
    {
      description1:
        "Viewers can access your digital profile details without downloading the app",
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
          xCard Digital Profile
          <br /> (No Physical Card Needed!)
        </Typography>
      </Grid>
      <Grid
        item
        lg={5}
        sm={12}
        xs={12}
        md={5}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <motion.div
            ref={ref}
            variants={slideIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
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
        md={3.5}
        sm={6}
        xs={12}
        lg={3.5}
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
      </Grid>
      <Grid
        item
        md={3.5}
        sm={6}
        lg={3.5}
        xs={12}
        display={"flex"}
        justifyContent={"flex-start"}
      >
        <Stack spacing={2}>
          <List>
            {secondCol?.map((feature, index) => (
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
      <Grid item md={6} sm={6} display={"flex"} justifyContent={"end"}></Grid>
      <Grid item md={6} sm={6} display={"flex"} justifyContent={"start"}>
        <Stack width={"fit-content"}>
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <StyledButton
              name={"Read More"}
              onClick={() => navigate("/products/digital-profile")}
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

export default XcardDigitalProfile;
