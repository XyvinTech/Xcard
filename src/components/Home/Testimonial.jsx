import { Box, Grid, Typography, Skeleton } from "@mui/material";
import React from "react";
import HomeCard from "../../ui/HomeCard";
import img1 from "../../assets/images/img1.png";

const testimonials = [
  {
    title: "“The Future of Business Cards”",
    description:
      "The NFC technology and customizable landing pages are a game-changer. It's the future of business cards.",
    img: img1,
    name: "John Smith",
    role: "CEO, Farrell",
  },
  {
    title: "“A Quick Win for Networking”",
    description:
      "The ease of sharing contact information and generating leads has significantly boosted my business.",
    img: img1,
    name: "Amal Jackson",
    role: "CEO, Grady and Sons",
  },
  {
    title: "“A Must-Have for Modern Professionals”",
    description:
      "The customizable landing pages and lead generation features are top-notch.",
    img: img1,
    name: "Priya Sony",
    role: "CEO, Amber Glow",
  },
  {
    title: "“Simple, Effective, and Efficient”",
    description:
      "I love how easy it is to use this platform. The user interface is intuitive, and the features are powerful.",
    img: img1,
    name: "Reshma Gupta",
    role: "CEO, Crystal Clear",
  },
];

const Testimonial = ({ loading }) => {
  return (
    <Box padding={10} mt={10}>
      <Typography
        fontSize={"44px"}
        fontWeight={700}
        textAlign={"center"}
        color="#000"
      >
        Hear from Our Satisfied Customers
      </Typography>
      <Typography
        variant="h5"
        width={"50%"}
        mx={"auto"}
        textAlign={"center"}
        color="#000"
      >
        Discover the impact our NFC business cards can have on your business.
      </Typography>
      <Grid container padding={10} spacing={3}>
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <Grid item md={3} key={index}>
              <HomeCard loading={true} />
            </Grid>
          ))
        ) : (
          testimonials.map((testimonial, index) => (
            <Grid item md={3} key={index}>
              <HomeCard data={testimonial} loading={false} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Testimonial;
