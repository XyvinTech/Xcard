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
import scan from "../../assets/images/Restaurant/Header.webp";
import icon from "../../assets/images/Team/Ellipse.png";

const Elevate = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: false, threshold: 0.1 });

  const slideAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };
  const firstCol = [
    {
      title: "Elevate Your Customer Experience",
      description1:
        "Captivate your customers with a visually appealing, interactive menu.",
      description2: "Engage your audience with captivating videos and photos.",
      description3:
        "Stay connected with your customers through real-time social media updates.",
    },
    {
      title: "Streamline Your Operations",
      description1:
        "Manage all aspects of your digital presence from a centralized platform.",
      description2:
        "Quickly update your menu, hours of operation, and other information.",
      description3:
        "Reduce printing and distribution costs by eliminating physical menus.",
    },
  ];
  const secondCol = [
    {
      title: "Increase Your Visibility",
      description1:
        "Enhance your restaurant's online visibility and attract new customers.",
      description2:
        "Optimize your website for search engines to improve your ranking.",
      description3:
        "Leverage the power of social media to reach a wider audience.",
    },
    {
      title: "Gain Valuable Insights",
      description1:
        "Analyze customer behavior and preferences to make data-driven decisions.",
      description2:
        "Track key performance metrics to measure the success of your digital strategy.",
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
      <Grid item md={12} sm={12} justifyContent={"center"}>
        <Typography
          fontSize={{ xs: "32px", md: "44px" }}
          color="#000"
          fontWeight={700}
          textAlign={"center"}
        >
          Elevate Your Restaurant
        </Typography>
        <Typography
          variant="h5"
          width={{ xs: "100%", md: "50%" }}
          mx={"auto"}
          mt={2}
          mb={2}
          color="#000"
          textAlign={"center"}
        >
          Empower your business with cutting-edge technology.
        </Typography>
      </Grid>
      <Grid item md={6} sm={6} display={"flex"} justifyContent={"center"}>
        <>
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
                objectFit: "cover",
                width: {
                  xs: "50%",
                  lg: "356px",
                  md: "100%",
                  sm: "auto",
                },
                height: {
                  xs: "auto",
                  lg: "510px",
                  md: "100%",
                  sm: "auto",
                },
              }}
            />
          </motion.div>
        </>
      </Grid>

      <Grid item md={3} sm={3} display={"flex"} justifyContent={"center"}>
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
                      <Typography variant="h5" mt={1} color="text.secondary">
                        {feature?.description2}
                      </Typography>
                      <Typography variant="h5" mt={1} color="text.secondary">
                        {feature?.description3}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Stack>
      </Grid>
      <Grid item md={3} sm={3} display={"flex"} justifyContent={"flex-start"}>
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
                      <Typography variant="h5" mt={1} color="text.secondary">
                        {feature?.description2}
                      </Typography>
                      <Typography variant="h5" mt={1} color="text.secondary">
                        {feature?.description3}
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

export default Elevate;
