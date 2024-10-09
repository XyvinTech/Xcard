import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "../../assets/images/Bajaj.png";
import img2 from "../../assets/images/Oracle.png";
import img3 from "../../assets/images/Canon.png";
import img4 from "../../assets/images/Microsoft.png";
import img5 from "../../assets/images/Oracle.png";
const clientLogos = [
  { src: img1, alt: "Bajaj" },
  { src: img2, alt: "Oracle" },
  { src: img3, alt: "Canon" },
  { src: img4, alt: "Microsoft" },
  { src: img5, alt: "Oracle" },
];
const ClientsPage = () => {
  return (
    <Box padding={10} mt={10}>
      <Typography
        fontSize={"44px"}
        fontWeight={700}
        textAlign={"center"}
        color="#000"
      >
        Chosen by Top Professionals
      </Typography>
      <Typography
        variant="h5"
        mx={"auto"}
        textAlign={"center"}
        color="#000"
      >
        Our NFC business cards are the preferred choice for professionals seeking a modern and efficient solution.
      </Typography>
      <Grid container padding={10} paddingBottom={0} spacing={3}>
        {clientLogos?.map((logo, index) => (
          <Grid item md={2.4} key={index}>
            <img
              src={logo.src}
              alt={logo.alt}
              width={"180px"}
              height={"64px"}
              style={{ objectFit: "fill" }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ClientsPage;
