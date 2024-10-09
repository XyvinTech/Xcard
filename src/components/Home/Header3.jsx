import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
const data = [
  {
    image: img1,
    title: "Tap, Share, Connect",
    subtitle:
      "Exchange contact information instantly with a simple tap of your NFC-enabled device.",
  },
  {
    image: img2,
    title: "Customizable Landing Page",
    subtitle:
      "Create a branded and professional online presence that reflects your brand identity.",
  },
  {
    image: img3,
    title: "Easy Lead Generation",
    subtitle:
      "Automatically capture visitor information and nurture leads for conversions.",
  },
  {
    image: img4,
    title: "Versatile Link Sharing",
    subtitle:
      "Add multiple links to your digital business card, from your website to your social media profiles.",
  },
];
const Header3 = () => {
  return (
    <Box  padding={10}mt={10}>
      <Typography fontSize={"44px"} fontWeight={700} textAlign={"center"}>
        Beyond the Ordinary Business Card
      </Typography>
      <Typography variant="h5" width={"50%"} mx={"auto"} textAlign={"center"}>
        Our NFC business cards offer more than just contact sharing. Experience
        the benefits of a digital business card that empowers your professional
        network."
      </Typography>
      <Grid container justifyContent="center" spacing={3} pt={10}>
        {data.map((item, index) => (
          <Grid item md={3} key={index}>
            <Stack spacing={2} alignItems="center">
              <img
                src={item.image}
                alt={item.title}
                objectFit="fill"
                width={"190px"}
                height={"190px"}
              />
              <Typography variant="h3" textAlign="center">
                {item.title}
              </Typography>
              <Typography variant="h5" textAlign="center">
                {item.subtitle}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Header3;
