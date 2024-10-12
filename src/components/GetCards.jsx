import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import CardComponent from "./CardComponent";
import card1 from "../assets/images/card1.webp";
import card2 from "../assets/images/card2.webp"; 
import card3 from "../assets/images/card3.webp";
const sampleData = [
  {
    image: card1,
    title: "Classic",
    subtitle:
      "The basics done right. Small. Simple. Satisfying. A durable, cost-effective card that lasts.",
    data: [
      { title: "Finishes", subtitle: "Glossy.Plastic type: PET" },
      { title: "Weight & Thickness", subtitle: "0.8mm thick" },
      {
        title: "Dimensions",
        subtitle: "85.60 x 53.98 mm (same size as a credit card)",
      },
      {
        title: "Printing",
        subtitle:
          "Printed in 600 DPI resolution CMYK color printing capabilities We use dye-sublimation printers Printable area: 100%(over the edge)",
      },
    ],
  },
  {
    image: card2,
    title: "Wood",
    subtitle:
      "The conscious choice. Smooth. Light. Eco-friendly. We plant a tree for every wood card we sell.",
    data: [
      {
        title: "Finishes",
        subtitle: "Polished finish Available in Birch and Sapele",
      },
      { title: "Weight & Thickness", subtitle: "0.8mm thick" },
      {
        title: "Dimensions",
        subtitle: "85.60 x 53.98 mm same size as a credit card)",
      },
      {
        title: "Printing",
        subtitle:
          "Lasered in 600 DPI resolution Printable area: 100% (over the edge)",
      },
    ],
  },
  {
    image: card3,
    title: "Metal",
    subtitle:
      "Cool. Elegant. Luxurious. Stand out from the crowd with stainless steel, a brushed finish, and laser-cut inscriptions.",
    data: [
      {
        title: "Finishes",
        subtitle:
          "Brushed finish Available in Black, Silver, & Gold Made from 100% stainless steel",
      },
      {
        title: "Weight & Thickness",
        subtitle: "0.8mm thick Weighted 3oz Premium feel",
      },
      {
        title: "Dimensions",
        subtitle: "85.60 x 53.98 mm (same size as a credit card)",
      },
      {
        title: "Printing",
        subtitle:
          "Lasered in 600 DPI resolution Printable area: 100%(over the edge)",
      },
    ],
  },
];

const GetCards = () => {
  return (
    <Box padding={{ xs: 5, md: 10, sm: 5 }} mt={10}>
      <>
        <Typography
          fontSize={{ xs: "32px", md: "44px" }}
          lineHeight={"44px"}
          fontWeight={700}
          textAlign={"center"}
        >
          Get in touch
        </Typography>

        <Typography
          variant="h5"
          width={{ xs: "100%", md: "50%" }}
          mx={"auto"}
          mt={2}
          textAlign={"center"}
        >
          Please feel free to send us any questions, feedback or suggestions you
          might have.
        </Typography>
      </>
      <Grid container spacing={2} mt={5} justifyContent="center">
        {sampleData?.map((data, index) => (
          <Grid item md={4} xs={12} key={index} sx={{ position: "relative" }} marginTop={{sm:2,xs:2}}>
            <CardComponent content={data} />

            {index !== sampleData?.length - 1 && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  position: "absolute",
                  right: "-10px",
                  top: 0,
                  bottom: 0,
                  height: "100%",
                  display: { md: "block", xs: "none" },
                  borderColor: "#2D2D2D",
                  borderRightWidth: "1px",
                }}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GetCards;
