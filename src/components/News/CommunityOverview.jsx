import React, { useRef } from "react";
import { Grid, Stack, Typography, Box, Container } from "@mui/material";
import { motion, useInView } from "framer-motion";

const CommunityOverview = ({ data }) => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const textInView = useInView(textRef, { threshold: 0.1 });
  const imageInView = useInView(imageRef, { threshold: 0.1 });

  const textAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const imageAnimation = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
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

          {/* TEXT */}
          <Grid item xs={12} md={6}>
            <motion.div
              ref={textRef}
              initial="hidden"
              animate={textInView ? "visible" : "hidden"}
              variants={textAnimation}
            >
              <Stack spacing={3}>
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
              </Stack>
            </motion.div>
          </Grid>

          {/* IMAGE */}
          <Grid item xs={12} md={6}>
            <motion.div
              ref={imageRef}
              initial="hidden"
              animate={imageInView ? "visible" : "hidden"}
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
                  alt="Community Overview"
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

export default CommunityOverview;
