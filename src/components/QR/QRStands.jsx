import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import image1 from "../../assets/images/QR/stand1.webp";
import image2 from "../../assets/images/QR/stand2.webp";
import image3 from "../../assets/images/QR/stand3.webp";
import image4 from "../../assets/images/QR/stand4.webp";
import image5 from "../../assets/images/QR/stand5.webp";
import image6 from "../../assets/images/QR/stand6.webp";
import image7 from "../../assets/images/QR/stand7.webp";
import image8 from "../../assets/images/QR/stand8.webp";
import image9 from "../../assets/images/QR/stand9.webp";

const QRStands = () => {
  const stands = [
    { id: 1, image: image1, title: "Stand 1" },
    { id: 2, image: image2, title: "Stand 2" },
    { id: 3, image: image3, title: "Stand 3" },
    { id: 4, image: image4, title: "Stand 4" },
    { id: 5, image: image5, title: "Stand 5" },
    { id: 6, image: image6, title: "Stand 6" },
    { id: 7, image: image7, title: "Stand 7" },
    { id: 8, image: image8, title: "Stand 8" },
    { id: 9, image: image9, title: "Stand 9" },
  ];
  return (
    <Grid
      container
      spacing={2}
      padding={{ xs: 5, md: 10, sm: 5 }}
      paddingRight={{ xs: 5, md: 15, sm: 5 }}
      paddingLeft={{ xs: 5, md: 15, sm: 5 }}
      mt={2}
      justifyContent="flex-start"
    >
      <Grid item md={12} sm={12} justifyContent={"center"}>
        <Typography
          fontSize={{ xs: "32px", md: "44px" }}
          color="#000"
          fontWeight={700}
          textAlign={"center"}
        >
          Explore Our Range of QR Stands
        </Typography>
        <Typography
          variant="h5"
          width={{ xs: "100%", md: "50%" }}
          mx={"auto"}
          mt={2}
          color="#000"
          textAlign={"center"}
        >
          A QR Stand for Every Occasion
        </Typography>
      </Grid>
      {stands.map((stand) => (
        <Grid item md={3} sm={3} xs={3} lg={3} key={stand.id}>
          <Box
            component="img"
            src={stand.image}
            alt={stand.title}
            sx={{
              width: {
                xs: "100%",
                lg: "277px",
                md: "100%",
                sm: "100%",
              },
              height: {
                xs: "auto",
                lg: "433px",
                md: "100%",
                sm: "100%",
              },
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default QRStands;
