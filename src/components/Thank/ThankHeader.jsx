import { Box, Grid, Stack, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StyledButton from "../../ui/StyledButton";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/thank.webp";
const ThankHeader = () => {
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
  const inView = useInView(ref, { triggerOnce: false, threshold: 0.1 });

  return (
    <Grid
      container
      spacing={2}
      padding={{ xs: 5, md: 10, sm: 5 }}
      paddingTop={{ xs: 0, md: 15, sm: 0 }}
      paddingLeft={{ xs: 0, md: 15, sm: 0 }}
      paddingRight={{ xs: 0, md: 15, sm: 0 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        md={12}
        sm={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Stack spacing={3} pb={4} alignItems="center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideIn}
          >
            <Box
              component="img"
              src={image}
              alt="rotating image"
              sx={{
                objectFit: "cover",
                width: {
                  xs: "100%",
                  lg: "128px",
                  md: "100%",
                  sm: "200px",
                },
                height: {
                  xs: "auto",
                  lg: "111px",
                  md: "100%",
                  sm: "100%",
                },
              }}
            />
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideIn}
          >
            <Typography
              fontSize={{ xs: "32px", md: "44px" }}
              lineHeight={{ xs: "40px", md: "60px" }}
              fontWeight={700}
              textAlign="center"
            >
              Thank You,
            </Typography>
        
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <Typography variant="h4" color="#f2f2f2" textAlign="center">
              We've received your request, and a member of our team will be in
              touch shortly. We aim to respond within 24 hours, <br />
              or by the next business day. We look forward to connecting with
              you soon.
            </Typography>
          </motion.div>
        </Stack>{" "}
        <StyledButton
          name={"Back To Home Page"}
          onClick={() => {
            navigate("/");
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ThankHeader;
