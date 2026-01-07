import React, { useRef } from "react";
import { Grid, Stack, Typography, Box, Container } from "@mui/material";
import { motion, useInView } from "framer-motion";

const AdvertisingPromotion = ({ data }) => {
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { threshold: 0.1 });

  const imageAnimation = {
    hidden: { x: 60, opacity: 0 },
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
       
        <Box
          sx={{
            maxWidth: "1500px",
            mx: "auto",
          }}
        >
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            alignItems="center"
          >
            {/* TEXT */}
            <Grid item xs={12} md={6}>
              <Stack
                spacing={3}
                sx={{
                  maxWidth: 560, 
                  mx: "auto",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 20, md: 24 },
                    fontWeight: 800,
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                  }}
                >
                  {data.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 15, md: 18 },
                    lineHeight: 1.7,
                    color: "#FFF",
                  }}
                >
                  {data.description}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 20, md: 24 },
                    fontWeight: 700,
                    color: "#FFF",
                    mt: 2,
                  }}
                >
                  {data.subtitle}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 15, md: 18 },
                    lineHeight: 1.7,
                    color: "#FFF",
                  }}
                >
                  {data.subdescription}
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
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={data.image}
                    alt="Advertising Promotion"
                    sx={{
                      width: "100%",
                      maxWidth: 560,
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

export default AdvertisingPromotion;
