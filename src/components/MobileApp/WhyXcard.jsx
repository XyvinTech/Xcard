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
import headerImage2 from "../../assets/images/MobileApp/Header7.webp";
import icon from "../../assets/images/Button.png";
import image1 from "../../assets/images/Home/mob.webp";
import scan from "../../assets/images/Home/image3.png";
import {motion, useInView } from "framer-motion";
const WhyXcard = () => {
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
  const features = [
    {
      title: "Save Money and Time",
      description1: "Eliminate the costs of traditional paper business cards.",
      description2:
        "Streamline your networking processes and reduce administrative overhead.",
    },
    {
      title: "Stay Connected and Grow Your Business",
      description1:
        "Automatically capture leads and nurture them for conversions.",
      description2:
        "Maximize your networking efforts and drive business growth.",
    },
    {
      title: "Environmental Benefits:",
      description1:
        "By eliminating the need for paper business cards, you're contributing to a more sustainable planet.",
      description2:
        "Buziness Connect is committed to environmental sustainability and responsible business practices",
    },
    {
      title: "Easy of Use",
      description1:
        "Our user-friendly interface makes it simple to create and manage your digital business cards.",
    },
  ];

  return (
    <Grid
      container
      spacing={4}
      padding={{ xs: 5, md: 10, sm: 5 }}
      paddingLeft={{ xs: 5, md: 15, sm: 5 }}
      paddingRight={{ xs: 5, md: 15, sm: 5 }}
      mt={2}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item md={6} sm={6} display={"flex"} justifyContent={"center"}>
        <Stack spacing={2}>
          <Typography fontSize={{ xs: "32px", md: "44px" }} fontWeight={700}>
            Why Choose Buziness Connect?
          </Typography>

          <List>
            {features?.map((feature, index) => (
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
                      <Typography variant="h5" mt={1} color="text.secondary">
                        {feature?.description1}
                      </Typography>
                      <Typography variant="h5" mt={1} color="text.secondary">
                        {feature?.description2}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Stack>
      </Grid>{" "}
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
    </Grid>
  );
};

export default WhyXcard;
