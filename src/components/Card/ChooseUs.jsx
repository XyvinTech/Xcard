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
import image1 from "../../assets/images/Home/mob.png";
import scan from "../../assets/images/Home/image3.png";
import icon from "../../assets/images/Button.png";
import image from "../../assets/images/net.webp";

const ChooseUs = () => {
  const ref = useRef(null);
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const inView = useInView(ref, { once: false });
  const firstCol = [
    {
      title: "Instant Sharing",
      description1:
        "Share your contact information, social media profiles, websites, and more with just a tap, scan, or send.",
    },
    {
      title: "NFC Technology",
      description1:
        "Experience the convenience of NFC technology for seamless and quick connections.",
    },
    {
      title: "Effortless Saving",
      description1:
        "Recipients can easily save your contact information by scanning the QR code on your  digital card.",
    },
    {
      title: "Eco-Friendly",
      description1:
        "By eliminating the need for physical business cards, visitingcard.store promotes environmental sustainability and reduces paper waste.",
    },
  ];
  const secondCol = [
    {
      title: "Effortless Saving",
      description1:
        "Recipients can easily save your contact information by scanning the QR code on your  digital card.",
    },

    {
      title: "Account Options",
      description1:
        "Choose between an individual or team account to cater to your specific networking needs.",
    },
    {
      title: "Security and Trust",
      description1:
        "Rest assured that your information is secure and protected with state-of-the-art encryption and data protection measures.",
    },
    {
      title: "Multiple Templates",
      description1:
        "Choose from a wide range of professionally designed templates to create a visually appealing and impactful digital card that suits your branding and industry.",
    },
  ];
  return (
    <Grid
      container
      spacing={2}
      padding={{ xs: 5, md: 10, sm: 5 }}
      mt={2}
      justifyContent="flex-start"  style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "fill",
      }}
    >
      <Grid item md={12} sm={12} display={"flex"} justifyContent={"center"}>
        <Typography
          fontSize={{ xs: "32px", md: "44px" }}
          fontWeight={700}
          textAlign={"center"}
        >
          Why Choose Us ?
        </Typography>
      </Grid>
      <Grid item lg={5} sm={12} display="flex" justifyContent="center">
        <Box
          sx={{
            transform: "rotate(330deg)",
            transformOrigin: "center",
            display: "flex",
            flexDirection: "column",justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            ref={ref}
            variants={slideIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ zIndex: 2, position: "absolute" }}
          >
            <Box
              component="img"
              src={image1}
              alt="mobile image"
              sx={{
                objectFit: "fill",
                width: { xs: "70%", sm: "80%", md: "70%", lg: "312px" },
                height: { xs: "auto", lg: "195px" },
                // top: { xs: 60, sm: 60, md: 80, lg: 150 },
                left: { xs: 60, sm: 100, md: 80, lg: 150 },
                
                position: "relative",
              }}
            />
          </motion.div>

          <motion.div
            ref={ref}
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ zIndex: 1 }}
          >
            <Box
              component="img"
              src={scan}
              alt="background"
              sx={{
                ml:{xs:4},
                objectFit: "fill",
                width: {
                  xs: "50%",
                  lg: "227px",
                  md: "100%",
                  sm: "90%",
                },
                height: {
                  xs: "auto",
                  lg: "468px",
                  md: "100%",
                  sm: "90%",
                },
              }}
            />
          </motion.div>
        </Box>
      </Grid>

      <Grid
        item
        md={3.5}
        sm={6}
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
                    <Typography variant="h6" fontWeight={600}>
                      {feature?.title}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="h5" mt={1}>
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
        md={3.5}
        sm={6}
        lg={3.5}
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
                    <Typography variant="h6" fontWeight={600}>
                      {feature?.title}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="h5" mt={1}>
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

export default ChooseUs;
