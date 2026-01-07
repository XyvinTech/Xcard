import React, { useRef } from "react";
import { Grid, Stack, Typography, Box, Container } from "@mui/material";
import { motion, useInView } from "framer-motion";

const FeatureKit = ({ data }) => {
  const ref = useRef(null);
  const textRef = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });
  const textInView = useInView(textRef, { triggerOnce: true, threshold: 0.1 });

  const imageAnimation = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleAnimation = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const subtitleAnimation = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box sx={{ backgroundColor: "#FFFFFF", py: { xs: 6, md: 10 } }}>
      <Container maxWidth={false} disableGutters>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={imageAnimation}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  component="img"
                  src={data.image}
                  alt="Features"
                  sx={{
                    width: { xs: "100%", md: "90%" },
                    maxHeight: { xs: 300, md: 520 },
                    objectFit: "contain",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12}>
            <Stack
              ref={textRef}
              spacing={2}
              sx={{
                maxWidth: "1400px",
                mx: "auto",
                px: { xs: 2, md: 6 },
              }}
            >
              <motion.div
                initial="hidden"
                animate={textInView ? "visible" : "hidden"}
                variants={titleAnimation}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 22, md: 34 },
                    fontWeight: 800,
                    color: "#000",
                    textTransform: "uppercase",
                  }}
                >
                  {data.title}
                </Typography>
              </motion.div>

              <Typography
                sx={{
                  fontSize: { xs: 15, md: 17 },
                  color: "#444",
                  lineHeight: 1.7,
                  textAlign: "justify",
                }}
              >
                {data.intro}
              </Typography>

              <motion.div
                initial="hidden"
                animate={textInView ? "visible" : "hidden"}
                variants={subtitleAnimation}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 18, md: 22 },
                    fontWeight: 700,
                    color: "#000",
                  }}
                >
                  {data.subtitle}
                </Typography>
              </motion.div>

              <Typography
                sx={{
                  fontSize: { xs: 15, md: 17 },
                  color: "#444",
                  lineHeight: 1.7,
                  textAlign: "justify",
                }}
              >
                {data.description}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureKit;
