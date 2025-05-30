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
import image1 from "../../assets/images/Restaurant/Rest.webp";
import icon from "../../assets/images/Button.png";
import StyledButton from "../../ui/StyledButton";
import amazon from "../../assets/images/Home/amazon.png";
import flipkart from "../../assets/images/Home/flipkart.png";
import { useNavigate } from "react-router-dom";
const ProductRestaurant = () => {
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
        "Google Review Integration – Encourage guests to leave reviews effortlessly.",
    },

    {
      description1:
        "Menus, Offers & Specials Listing – Update daily specials, offers, and menus in real time.",
    },
    {
      description1:
        "Interactive & Engaging – Enhance customer experience with digital menus, service showcases, and direct contact options.",
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
      <Grid
        item
        md={12}
        sm={12}
        display={"flex"}
        justifyContent={"center"}
        mb={6}
      >
        <Typography
          fontSize={{ xs: "32px", md: "44px" }}
          fontWeight={700}
          textAlign={"center"}
          color="white"
        >
          Digital Profiles for Restaurants, Hotels & More
        </Typography>
      </Grid>
      <Grid
        item
        lg={6}
        sm={12}
        md={6}
        xs={12}
        display="flex"
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
                    <Typography variant="h6" fontWeight={600} color="#f2f2f2">
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
        <Stack
          width={{ xs: "100%", sm: "auto" }}
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
        >
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems="center"
            gap={{ xs: 2, sm: 2 }}
            flexWrap="wrap"
          >
            <Box display="flex" flexDirection="row" gap={1} flexWrap="wrap">
              <StyledButton
                name="Read More"
                onClick={() => navigate("/products/digital-restaurant-menu")}
              />
              <StyledButton name="See Demo" secondary />
            </Box>
            <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
              <Typography variant="h6" color="#8E8E8E" sx={{ mt: 0 }}>
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
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ProductRestaurant;
