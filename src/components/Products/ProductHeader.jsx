import { Grid, Stack, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import image from "../../assets/images/bg.webp";
const ProductHeader = () => {
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
      alignItems="center"    style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize:"cover",
        objectFit: "contain",
      }}
    >
     
    </Grid>
  );
};

export default ProductHeader;
