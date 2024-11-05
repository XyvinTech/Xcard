import { Box, Grid, Typography, Skeleton } from "@mui/material";
import React from "react";
import img1 from "../../assets/images/Home/Bajaj.png";
import img2 from "../../assets/images/Home/Oracle.png";
import img3 from "../../assets/images/Home/Canon.png";
import img4 from "../../assets/images/Home/Microsoft.png";
import img5 from "../../assets/images/Home/Oracle.png";

const clientLogos = [
  { src: img1, alt: "Bajaj" },
  { src: img2, alt: "Oracle" },
  { src: img3, alt: "Canon" },
  { src: img4, alt: "Microsoft" },
  { src: img5, alt: "Oracle" },
];

const ClientsPage = ({ isLoading }) => {
  return (
    <Box padding={{ xs: 5, md: 10 ,sm:5}} mt={2} paddingTop={0}>
      {isLoading ? (
        <Skeleton variant="text" width={400} height={50} sx={{ mx: "auto" }} />
      ) : (
        <Typography
          fontSize={{xs: "32px", md: "44px"}} 
          fontWeight={700}
          textAlign={"center"}
          color="#000"
        >
          Chosen by Top Professionals
        </Typography>
      )}

      {isLoading ? (
        <Skeleton variant="text" width={600} height={30} sx={{ mx: "auto", mt: 2 }} />
      ) : (
        <Typography
          variant="h5"
          mx={"auto"}
          textAlign={"center"}
          color="#000"
          mt={2}
        >
          Our NFC business cards are the preferred choice for professionals seeking a modern and efficient solution.
        </Typography>
      )}

      <Grid container pt={10} paddingBottom={0} spacing={3}>
        {clientLogos?.map((logo, index) => (
        <Grid item xs={6} sm={4} md={4} lg={2.4} key={index}>
        {isLoading ? (
          <Skeleton
            variant="rectangular"
            width={180}
            height={64}
          />
        ) : (
          <Box
            component="img"
            src={logo.src}
            alt={logo.alt}
            sx={{
              width: {
                xs: "100%", 
                sm: "100%",  
                md: "180px",
              },
              height: {
                xs: "auto",  
                sm: "auto", 
                md: "64px", 
              },
              objectFit: "contain", 
            }}
          />
        )}
      </Grid>
      
        ))}
      </Grid>
    </Box>
  );
};

export default ClientsPage;
