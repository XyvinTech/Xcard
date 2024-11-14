import { Grid, Stack, Typography, Skeleton, Box } from "@mui/material";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import StyledButton from "../../ui/StyledButton";
import { useNavigate } from "react-router-dom";
import bgimage from "../../assets/images/bg.webp";

const ProductHeaders = ({ content = {}, isHome, shop, white }) => {
  const { image, title, subtitle, button, buttonPath } = content;

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

  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (buttonPath) {
      navigate(buttonPath);
    }
  };

  return (
    <Grid
      container
      spacing={2}
      padding={{ xs: 5, md: 10, sm: 5 }}
      paddingLeft={{ xs: 5, md: 15, sm: 5}}
      paddingRight={{ xs: 5, md: 15, sm: 5 }}
      display={"flex"}
      justifyContent="center"
      alignItems="center"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      {" "}
      <Grid
        item
        md={12}
        sm={12}
        display="flex"pb={10}
        justifyContent="center"
        alignItems="center"
      >
        <Stack spacing={2}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideIn}
          >
            <Typography
              fontSize={{ xs: "32px", md: "50px" }}
              lineHeight={{ xs: "40px", md: "60px" }}
              fontWeight={700}
              textAlign="center"
            >
              Transform Your Business <br></br>with Smart Solutions
            </Typography>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <Typography variant="h4" color="#f2f2f2" textAlign="center">
              Explore our mobile app, NFC card, QR stand, and restaurant
              solutions — designed to <br></br> enhance customer engagement,
              streamline processes, and elevate your brand
            </Typography>
          </motion.div>
        </Stack>
      </Grid>
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
                color={white && "#000"}
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
              <Typography variant="h4" color={white ? "#000" : "#f2f2f2"}>
                {subtitle}
              </Typography>
            </motion.div>
          ) : (
            <Skeleton variant="text" width={250} height={40} />
          )}

          <Stack direction={"row"} spacing={2}>
            <>
              {button ? (
                <StyledButton name={button} onClick={handleButtonClick} />
              ) : (
                <Skeleton variant="rectangular" width={120} height={40} />
              )}
            </>
          </Stack>
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
              objectFit: "contain",
              width: {
                xs: shop ? "100%" : "100%",
                lg: shop ? "337px" : "479px",
                md: shop ? "100%" : "100%",
                sm: shop ? "100%" : "100%",
              },
              height: {
                xs: shop ? "auto" : "auto",
                lg: shop ? "414px" : "479px",
                md: shop ? "100%" : "100%",
                sm: shop ? "100%" : "100%",
              },
            }}
          />
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default ProductHeaders;
