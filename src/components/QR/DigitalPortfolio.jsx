import {
  Grid,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  useMediaQuery,
} from "@mui/material";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import image1 from "../../assets/images/QR/stand.webp";
import scan from "../../assets/images/QR/scan.webp";
import icon from "../../assets/images/Button.png";

const DigitalPortfolio = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: false, threshold: 0.1 });

  const slideAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };
  const firstCol = [
    {
      title: "Professional Networking",
      description1: "Elevate your professional presence and connect with ease.",
    },
    {
      title: "Personalized Experience",
      description1:
        "Customize your digital business card to reflect your unique style.",
    },
    {
      title: "Product Catalogues",
      description1:
        "Showcase your product range with interactive digital catalogs.",
    },
    {
      title: "Social Media Integrations",
      description1:
        "Seamlessly integrate your social media profiles into your digital business card.",
    },
  ];
  const secondCol = [
    {
      title: "Service Showcase",
      description1: "Showcase your services with a single tap.",
    },
    {
      title: "Customer Feedbacks",
      description1:
        "ear from satisfied customers who have experienced the power of our solution.",
    },
    {
      title: "Tap-to-view Feature",
      description1: " Connect instantly with a simple tap.",
    },
  ];
  return (
    <Grid
      container
      spacing={2}
      padding={{ xs: 5, md: 10, sm: 5 }}
      paddingRight={{  xs: 5, md: 15, sm: 5 }}
      paddingLeft={{  xs: 5, md: 15, sm: 5 }}
      mt={2}
      justifyContent="flex-start"
    >
      <Grid item md={12} sm={12} display={"flex"} justifyContent={"center"}>
        <Typography
          fontSize={{ xs: "32px", md: "44px" }}
          color="#000"
          fontWeight={700}
          textAlign={"center"}
        >
          Digital Portfolio- Redefine the art of networking
        </Typography>
      </Grid>
      <Grid item lg={5} sm={12} md={5} xs={12} display={"flex"} justifyContent={"Flex-start"}>
        <>
          <Box
            component="img"
            src={image1}
            display={"block"}
            alt="background"
            sx={{
              objectFit: "fill",
              width: {
                xs: "200px",
                sm: "280px",
                md: "320px",
                lg: "374px",
              },
              height: {
                xs: "230px",
                sm: "300px",
                md: "400px",
                lg: "463px",
              },
              zIndex: 1,
            }}
          />
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideAnimation}
            style={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
            }}
          >
            <Box
              component="img"
              src={scan}
              alt="rotating image"
              sx={{
                objectFit: "fill",
                width: {
                  xs: "120px",
                  sm: "180px",
                  md: "200px",
                  lg: "242px",
                },
                height: {
                  xs: "230px",
                  sm: "300px",
                  md: "350px",
                  lg: "458px",
                },
              }}
            />
          </motion.div>
        </>
      </Grid>

      <Grid
        item
        md={3}
        sm={6}
        lg={3}
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
                      {feature?.title}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="h5" mt={1} color="text.secondary">
                        {feature?.description1}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Stack>
      </Grid>
      <Grid
        item
        md={3}
        sm={6}
        lg={3}
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
                      {feature?.title}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="h5" mt={1} color="text.secondary">
                        {feature?.description1}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default DigitalPortfolio;
