import React, { useRef } from "react";
import { Grid, Stack, Typography, Box, Container } from "@mui/material";
import { motion, useInView } from "framer-motion";

const CommunityOverview = ({ data }) => {
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { threshold: 0.1 });

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
        py: { xs: 6, md: 10 },
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">

          {/* TEXT */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3} sx={{ px: { xs: 2, md: 0 } }} >
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
          </Grid>

          {/* IMAGE */}
          <Grid item xs={12} md={6} sx={{ overflow: "hidden" }}>
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
                    maxWidth: "100%",
                    width: { xs: "100%", md: "90%" },
                    height: "auto",
                    maxHeight: { md: "600px" },
                    objectFit: "contain",
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