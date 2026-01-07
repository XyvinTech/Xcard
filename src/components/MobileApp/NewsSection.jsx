import {
  Grid,
  Typography,
  Stack,
  Box,
  Button,
} from "@mui/material";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import newsImg from "../../assets/images/MobileApp/image10.webp";
import { useNavigate } from "react-router-dom";

const NewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const navigate = useNavigate();

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const newsData = {
    title: "Community Updates & Announcements",
    subtitle: "Empowering Every Community With a Smarter Way to Connect & Grow.",
    description:
      "Stay informed with official announcements, important updates, and key community news all in one trusted place.",
  };

  return (
    <Grid
      container
      spacing={2}
      padding={{ lg: 10, xs: 5, md: 10, sm: 5 }}
      paddingLeft={{ lg: 15, xs: 5, md: 10, sm: 5 }}
      paddingRight={{ lg: 15, xs: 5, md: 10, sm: 5 }}
      mt={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "#F5F5F5",
      }}
    >

      <Grid item md={6} sm={6} display={"flex"} justifyContent={"center"}>
        <Stack spacing={2} alignContent={"center"}>

          <motion.div
            ref={ref}
            variants={slideIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Typography
              fontSize={{ xs: "32px", md: "50px" }}
              lineHeight={{ xs: "40px", md: "60px" }}
              fontWeight={700}
              color="#000"
            >
              {newsData.title}
            </Typography>
          </motion.div>


          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Typography
              variant="h4"
              color="#5E5E5E"
              fontSize={{ xs: "24px", md: "24px" }}
              lineHeight={{ xs: "26px", md: "32px" }}
              fontWeight={500}
            >
              {newsData.subtitle}
            </Typography>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Typography
              variant="body1"
              color="#5E5E5E"
              fontSize={{ xs: "20px", md: "18px" }}
              lineHeight={{ xs: "22px", md: "24px" }}
            >
              {newsData.description}
            </Typography>
          </motion.div>

          {/* Button */}
          <Stack width={"fit-content"}>
            <Button
              sx={{
                mt: 2,
                borderRadius: "999px",
                px: 4,
                py: 1.5,
                textTransform: "none",
                backgroundColor: "#F5E39C",
                color: "#000",
                fontSize: "16px",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#f0d97b",
                },
              }}
              onClick={() =>
                navigate("/products/membership-management-system/news-details")
              }
            >
              See More
            </Button>
          </Stack>
        </Stack>
      </Grid>


      <Grid item md={6} sm={6} display={"flex"} justifyContent={"flex-end"}>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Box
            component="img"
            src={newsImg}
            alt="Community Updates"
            sx={{
              objectFit: "contain",
              width: {
                xs: "100%",
                lg: "539px",
                md: "100%",
                sm: "60%",
              },
              height: {
                xs: "auto",
                lg: "514px",
                md: "100%",
              },
            }}
          />
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default NewsSection;