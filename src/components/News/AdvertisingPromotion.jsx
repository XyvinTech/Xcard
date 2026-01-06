import React, { useRef } from "react";
import { Grid, Stack, Typography, Box, Container } from "@mui/material";
import { motion, useInView } from "framer-motion";

const AdvertisingPromotion = ({ data }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: false, threshold: 0.1 });

  const textAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const imageAnimation = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <Box
      sx={{
        backgroundColor: "#2B5FA8",
        padding: { xs: 4, md: 8, lg: 10 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={textAnimation}
            >
              <Stack spacing={3}>
                <Typography
                  sx={{
                    fontSize: { xs: "24px", md: "32px" },
                    fontWeight: 800,
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                  }}
                >
                  {data.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: 1.7,
                    color: "#FFFFFF",
                    fontWeight: 400,
                  }}
                >
                  {data.description}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "22px" },
                    fontWeight: 700,
                    color: "#FFFFFF",
                    mt: 3,
                  }}
                >
                  {data.subtitle}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: 1.7,
                    color: "#FFFFFF",
                    fontWeight: 400,
                  }}
                >
                  {data.subdescription}
                </Typography>
              </Stack>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={imageAnimation}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={data.image}
                  alt="Advertising Promotion"
                  sx={{
                    width: { xs: "100%", md: "90%" },
                    height: "auto",
                    maxHeight: { md: "600px" },
                    objectFit: "contain",
                    filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.5))",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdvertisingPromotion;