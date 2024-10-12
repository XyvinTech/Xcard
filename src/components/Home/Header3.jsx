import { Box, Grid, Stack, Typography, Skeleton } from "@mui/material";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; 
const Header3 = ({ data, title, subtitle }) => {
  const ref = useRef(null); 
  const inView = useInView(ref, { once: false }); 

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <Box padding={{ xs: 5, md: 10, sm: 5 }} mt={10} ref={ref}>
      <>
        {title ? (
          <motion.div
            variants={slideIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Typography
              fontSize={{ xs: "32px", md: "44px" }}
              lineHeight={"44px"}
              fontWeight={700}
              textAlign={"center"}
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
            <Typography
              variant="h5"
              width={{ xs: "100%", md: "50%" }}
              mx={"auto"}
              mt={2}
              textAlign={"center"}
            >
              {subtitle}
            </Typography>
          </motion.div>
        ) : (
          <Skeleton variant="text" width={"50%"} height={40} mx={"auto"} />
        )}

        <Grid container justifyContent="center" spacing={3} pt={10}>
          {!data
            ? Array.from({ length: 4 }).map((_, index) => (
                <Grid item md={3} key={index}>
                  <Stack spacing={2} alignItems="center">
                    <Skeleton variant="rectangular" width={190} height={190} />
                    <Skeleton variant="text" width={190} height={40} />
                    <Skeleton variant="text" width={190} height={30} />
                  </Stack>
                </Grid>
              ))
            : data.map((item, index) => (
                <Grid item md={3} sm={6} key={index}>
                  <Stack spacing={2} alignItems="center">
                    <motion.div
                      variants={fadeIn}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    >
                      <img
                        src={item?.image}
                        alt={item?.title}
                        style={{
                          objectFit: "fill",
                          width: "190px",
                          height: "190px",
                        }}
                      />
                    </motion.div>

                    {item?.icon && (
                      <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                      >
                        <img
                          src={item?.icon}
                          alt={item?.title}
                          style={{
                            objectFit: "fill",
                            width: "34px",
                            height: "35px",
                          }}
                        />
                      </motion.div>
                    )}

                    <motion.div
                      variants={slideIn}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    >
                      <Typography variant="h3" textAlign="center">
                        {item.title}
                      </Typography>
                      <Typography variant="h5" textAlign="center">
                        {item.subtitle}
                      </Typography>
                    </motion.div>
                  </Stack>
                </Grid>
              ))}
        </Grid>
      </>
    </Box>
  );
};

export default Header3;
