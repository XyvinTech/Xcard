import React, { useRef } from "react";
import { Stack, Typography, Box, Container } from "@mui/material";
import { motion, useInView } from "framer-motion";

const CommunityDetails = ({ data }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

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

  return (
    <Box
      sx={{
        backgroundColor: "#2B5FA8",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        <Stack
          ref={ref}
          spacing={2}
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 3, md: 6 },
            pb: { xs: 4, md: 8},
          }}
        >
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={titleAnimation}
          >
            <Typography
              sx={{
                fontSize: { xs: 24, md: 32 },
                fontWeight: 800,
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
            >
              {data.title}
            </Typography>
          </motion.div>

          <Typography
            sx={{
              fontSize: { xs: 14, md: 16 },
              color: "#FFFFFF",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            {data.description}
          </Typography>

          {/* CONTACT SECTION */}
          <Stack spacing={0.5}>
            <Typography
              sx={{
                fontSize: { xs: 16, md: 18 },
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              For more details, contact:
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 16, md: 18 },
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              {data.phone}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 16, md: 18 },
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              {data.email}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>

  );
};

export default CommunityDetails;