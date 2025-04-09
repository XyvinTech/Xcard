import { Grid, Stack, Typography, Skeleton, Box } from "@mui/material";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import headerImage from "../../assets/images/Home/image4.webp";
import amazon from "../../assets/images/Home/amazon.png";
import flipkart from "../../assets/images/Home/flipkart.png";
import StyledButton from "../../ui/StyledButton";
import { useNavigate } from "react-router-dom";

const HomeHeader = ({ white }) => {
  const navigate=useNavigate();
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const image = headerImage;
  const title = "Business Connect for Teams: Network Smarter, Together";
  const subtitle =
    "Empower your team to network smarter. Manage digital business cards effortlessly.";

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
    >
      <Grid
        item
        md={6}
        sm={6}
        display={"flex"}
        justifyContent={"flex-start"}
        position="relative"
      >
        {image ? (
          <>
            <motion.div
              ref={ref}
              variants={slideIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              style={{ zIndex: 1 }}
            >
              <Box
                component="img"
                src={image}
                alt="background"
                sx={{
                  objectFit: "fill",
                  width: {
                    xs: "90%",
                    lg: "585px",
                    md: "100%",
                    sm: "100%",
                  },
                  height: {
                    xs: "auto",
                    lg: "560px",
                    md: "100%",
                  },
                }}
              />
            </motion.div>
          </>
        ) : (
          <Skeleton variant="rectangular" width={539} height={514} />
        )}
      </Grid>

      <Grid item md={6} sm={6} display={"flex"} justifyContent={"center"}>
        <Stack spacing={2} alignContent={"center"}>
          {title ? (
            <motion.div
              variants={slideIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Typography
                fontSize={{ xs: "32px", md: "50px" }}
                lineHeight={{ xs: "40px", md: "60px" }}
                fontWeight={700}
                color={white && "#000"}
              >
                {title}
              </Typography>
            </motion.div>
          ) : (
            <Skeleton variant="text" width={300} height={60} />
          )}

          {subtitle ? (
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Typography variant="h4" color={white ? "#5E5E5E" : "#f2f2f2"}>
                {subtitle}
              </Typography>
            </motion.div>
          ) : (
            <Skeleton variant="text" width={250} height={40} />
          )}

          {white && (
            <Stack width={"fit-content"}>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap={1}
              >
                <StyledButton
                  name={"Read More"}
                  onClick={() => navigate("/products/digital-profile")}
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
                    (window.location.href =
                      "https://www.amazon.in/dp/B0CNKJMNNX")
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
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default HomeHeader;
