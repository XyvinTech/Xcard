import { Grid, Stack, Typography, Skeleton, Box } from "@mui/material";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import StyledButton from "../../ui/StyledButton";
import App from "../../assets/images/AppStore.webp";
import buttonimage from "../../assets/images/Button.png";
import Play from "../../assets/images/PlayStore.webp";
import image1 from "../../assets/images/image1.webp";

const Header = ({ content = {}, isHome, isMobile, shop, support }) => {
  const { image, title, subtitle, des, button } = content;

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: false, threshold: 0.1 });

  return (
    <Grid
      container
      spacing={2}
      padding={{ xs: 5, md: 10, sm: 5 }}
      display={"flex"}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item md={6} sm={6} display={"flex"} justifyContent={"flex-start"}>
        <Stack spacing={2}>
          {title ? (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideIn}
            >
              <Typography
                fontSize={{ xs: "32px", md: isHome ? "84px" : "50px" }}
                lineHeight={{ xs: "40px", md: isHome ? "100px" : "60px" }}
                fontWeight={700}
              >
                {title}
              </Typography>
            </motion.div>
          ) : (
            <Skeleton variant="text" width={300} height={100} />
          )}

          {subtitle ? (
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <Typography variant="h4">{subtitle}</Typography>
            </motion.div>
          ) : (
            <Skeleton variant="text" width={250} height={40} />
          )}

          {des && (
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <Typography variant="h4">{des}</Typography>
            </motion.div>
          )}

          {isMobile ? (
            <Stack direction={"row"} spacing={2} pt={2}>
              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
              >
                <Box
                  component="img"
                  src={App}
                  alt="App Store"
                  sx={{
                    objectFit: "fill",
                    width: { xs: "150px", md: "180px" },
                    height: { xs: "44px", md: "52px" },
                  }}
                />
              </motion.div>

              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
              >
                <Box
                  component="img"
                  src={Play}
                  alt="Play Store"
                  sx={{
                    objectFit: "fill",
                    width: { xs: "150px", md: "180px" },
                    height: { xs: "44px", md: "52px" },
                  }}
                />
              </motion.div>
            </Stack>
          ) : (
            <Stack direction={"row"} spacing={2}>
              {shop ? (
                <Stack>
                  <Typography fontSize={"32px"} fontWeight={700}>
                    Our Mission
                  </Typography>
                  <motion.img
                    src={buttonimage}
                    style={{
                      width: 120,
                      height: 3,
                      background:
                        "linear-gradient(182deg, #575142 0%, #FBF19A 100%)",
                      borderRadius: 14,
                    }}
                  />
                  <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeIn}
                  >
                    <Typography variant="h4" mt={2} mb={{ xs: 2, md: 0 }}>
                      To empower professionals to connect, collaborate, and
                      succeed in today's digital world.
                    </Typography>
                  </motion.div>
                </Stack>
              ) : (
                <>
                  {button ? (
                    <StyledButton name={button} />
                  ) : (
                    <Skeleton variant="rectangular" width={120} height={40} />
                  )}

                  {isHome && (
                    <Typography variant="h6" padding={"10px"}>
                      Learn More
                    </Typography>
                  )}
                </>
              )}
            </Stack>
          )}
        </Stack>
      </Grid>
      <Grid
        item
        md={6}
        sm={6}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position="relative"
      >
        {support ? (
          <motion.div
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {" "}
            <Box
              component="img"
              src={image}
              alt="rotating image"
              sx={{
                objectFit: "cover",
                width: {
                  xs: shop ? "100%" : "100%",
                  lg: shop ? "337px" : "539px",
                  md: shop ? "100%" : "100%",
                  sm: shop ? "100%" : "100%",
                },
                height: {
                  xs: shop ? "auto" : "auto",
                  lg: shop ? "414px" : "514px",
                  md: shop ? "100%" : "100%",
                  sm: shop ? "100%" : "100%",
                },
              }}
            />
          </motion.div>
        ) : (
          <>
            <Box
              component="img"
              src={image1}
              display={shop ? "none" : "block"}
              alt="background"
              sx={{
                objectFit: "fill",
                width: {
                  xs: "100%",
                  lg: "539px",
                  md: "100%",
                  sm: "100%",
                },
                height: {
                  xs: "auto",
                  lg: "514px",
                  md: "100%",
                  sm: "100%",
                },
                zIndex: 1, 
              }}
            />

            <motion.div
              initial={{ opacity: 0, x: 100 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
              }}
              sx={{
                top: {
                  xs: "10%",
                  sm: "10%",
                  md: "8%",
                  lg: "6%",
                  xl: "5%",
                },
                left: {
                  xs: "15%",
                  sm: "10%",
                  md: "10%",
                  lg: "8%",
                  xl: "7%",
                },
              }}
            >
              <Box
                component="img"
                src={image}
                alt="rotating image"
                sx={{
                  objectFit: "cover",
                  width: {
                    xs: "100%",
                    lg: "100%",
                    md: "100%",
                    sm: "100%",
                  },
                  height: {
                    xs: "auto",
                    lg: "400px",
                    md: "100%",
                    sm: "100%",
                  },
                }}
              />
            </motion.div>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default Header;
