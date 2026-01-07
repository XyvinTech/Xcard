import React, { useRef } from "react";
import { Grid, Stack, Typography, Box, Container } from "@mui/material";
import { motion, useInView } from "framer-motion";

const CommunityOverview = ({ data }) => {
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { threshold: 0.1 });

  const imageAnimation = {
    hidden: { x: 60, opacity: 0 }, // reduced for better balance
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: "#2B5FA8",
        py: { xs: 6, md: 10 },
        overflowX: "hidden",
      }}
    >
      <Container maxWidth="xl">
        {/* CENTERED CONTENT WRAPPER */}
        <Box
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 2, md: 6 },
          }}
        >
          <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
            {/* TEXT */}
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Typography
                  sx={{
                    fontSize: { xs: 15, md: 18 },
                    lineHeight: 1.8,
                    color: "#FFFFFF",
                  }}
                >
                  {data.description}
                </Typography>
              </Stack>
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
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Box
                    component="img"
                    src={data.image}
                    alt="Community Overview"
                    sx={{
                      width: "100%",
                      maxWidth: { xs: "100%", md: 500 },
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>

        </Box>
      </Container>
    </Box>
  );
};

export default CommunityOverview;
