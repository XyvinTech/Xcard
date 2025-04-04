import {
  Grid,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Container,
} from "@mui/material";
import React, { useRef } from "react";
import icon from "../../assets/images/Button.png";
import image1 from "../../assets/images/Home/mob.webp";
import scan from "../../assets/images/Home/image3.png";
import { motion, useInView } from "framer-motion";

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
      title: "Environmental Benefits",
      description1:
        "By eliminating the need for paper business cards, you're contributing to a more sustainable planet.",
      description2:
        "Buziness Connect is committed to environmental sustainability and responsible business practices",
    },
    {
      title: "Ease of Use",
      description1:
        "Our user-friendly interface makes it simple to create and manage your digital business cards.",
    },
  ];

  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={{ xs: 4, sm: 5, md: 6, lg: 8 }}
        sx={{
          py: { xs: 4, sm: 5, md: 6, lg: 8 },
          px: { xs: 2, sm: 3, md: 4, lg: 5 },
          mt: { xs: 2, sm: 3, md: 4 }
        }}
        justifyContent="center"
        alignItems="center"
      >
        {/* Left section - Features */}
        <Grid 
          item 
          xs={12} 
          md={6} 
          order={{ xs: 2, md: 1 }}
        >
          <Stack spacing={{ xs: 2, sm: 3, md: 4 }}>
            <Typography 
              fontSize={{ xs: "28px", sm: "32px", md: "38px", lg: "44px" }} 
              fontWeight={700}
              textAlign={{ xs: "center", md: "left" }}
            >
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
        </Grid>
        
        {/* Right section - Images */}
        <Grid 
          item 
          xs={12} 
          md={6} 
          order={{ xs: 1, md: 2 }}
          sx={{ 
            display: "flex", 
            justifyContent: "center",
            mb: { xs: 4, md: 0 }
          }}
        >
          <Box
            ref={ref}
            sx={{
              transform: { xs: "rotate(350deg)", sm: "rotate(350deg)" },
              transformOrigin: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              height: { xs: "300px", sm: "350px", md: "400px", lg: "450px" },
              width: { xs: "100%", sm: "80%", md: "100%" }
            }}
          >
            <motion.div
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
                  objectFit: "contain",
                  width: { xs: "140px", sm: "180px", md: "260px", lg: "300px" },
                  height: "auto",
                  position: "relative",
                  top: { xs: "50px", sm: "60px", md: "70px", lg: "80px" },
                  left: { xs: "30px", sm: "50px", md: "60px", lg: "100px" },
                }}
              />
            </motion.div>

            <motion.div
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
    </Container>
  );
};

export default WhyXcard;