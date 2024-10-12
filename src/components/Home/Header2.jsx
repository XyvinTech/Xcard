import { Grid, Stack, Typography, Skeleton, Box } from "@mui/material";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; 
import StyledButton from "../../ui/StyledButton";

const Header2 = ({ content = {}, white }) => {
  const { image, title, subtitle } = content;
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

  return (
    <Grid
      container
      spacing={2}
      padding={{ xs: 5, md: 10, sm: 5 }}
      mt={10}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item md={6} sm={6} display={"flex"} justifyContent={"flex-start"}>
        {image ? (
          <motion.div
            ref={ref} 
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Box
              component="img"
              src={image}
              alt="background"
              sx={{
                objectFit: "fill",
                width: {
                  xs: "100%",
                  md: "539px",
                  sm: "60%",
                },
                height: {
                  xs: "auto",
                  md: "514px",
                },
              }}
            />
          </motion.div>
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
              <Typography variant="h4" color={white && "#5E5E5E"}>
                {subtitle}
              </Typography>
            </motion.div>
          ) : (
            <Skeleton variant="text" width={250} height={40} />
          )}

          {white && (
            <Stack width={"fit-content"}>
              <StyledButton name={"Know More"} />
            </Stack>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header2;
