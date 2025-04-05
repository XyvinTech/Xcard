import { Grid, Stack, Typography, Skeleton, Box } from "@mui/material";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import StyledButton from "../../ui/StyledButton";
import { useNavigate } from "react-router-dom";
import { button } from "framer-motion/client";
import bgimage from "../../assets/images/Frame.png";

const Header2 = ({ content = {}, white, app, showButton, bg }) => {
  const { image, title, subtitle, buttonPath } = content;
  const navigate = useNavigate();
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
  const handleButtonClick = () => {
    if (buttonPath) {
      navigate(buttonPath);
    }
    if (buttonPath === "knowMore") {
      navigate("/", { replace: true });
      setTimeout(() => {
        const featuresElement = document.getElementById("LearnMore");
        featuresElement?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    if (buttonPath === "app") {
      navigate(
        "/products/membershipmanagementsystem",
        {
          replace: true,
        }
      );
      setTimeout(() => {
        const featuresElement = document.getElementById("getInTouch");
        featuresElement?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };
  return (
    <Grid
      container
      spacing={2}
      padding={{ lg: 10, xs: 5, md: 10, sm: 5 }}
      paddingLeft={{ lg: 15, xs: 5, md: 10, sm: 5 }}
      paddingRight={{ lg: 15, xs: 5, md: 10, sm: 5 }}
      mt={!bg && 2}
      justifyContent="center"
      alignItems="center"
      style={{
        backgroundImage: bg ? `url(${bgimage})` : "none",
        backgroundPosition: bg ? "center" : "initial",
        backgroundSize: bg ? "100% 100%" : "initial",
      }}
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
                objectFit: "contain",
                width: {
                  xs: "100%",
                  lg: "539px",
                  md: "100%",
                  sm: "60%",
                },
                height: {
                  xs: "auto",
                  lg: "514px",
                  md: "100%",
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
              <Typography variant="h4" color={white ? "#5E5E5E" : "#f2f2f2"}>
                {subtitle}
              </Typography>
            </motion.div>
          ) : (
            <Skeleton variant="text" width={250} height={40} />
          )}

          {white && !app && (
            <Stack width={"fit-content"}>
              <StyledButton name={"Know More"} onClick={handleButtonClick} />
            </Stack>
          )}
          {showButton && (
            <Stack width={"fit-content"}>
              <StyledButton name={"Know More"} onClick={handleButtonClick} />
            </Stack>
          )}
          {app && (
            <Stack width={"fit-content"}>
              <StyledButton name={"Try Now"} onClick={handleButtonClick} />
            </Stack>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header2;
