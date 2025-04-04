import { Box, Grid, Typography, Skeleton } from "@mui/material";
import React from "react";
import HomeCard from "../../ui/HomeCard";
import person1 from "../../assets/images/Home/Testimonial/people1.webp";
import person2 from "../../assets/images/Home/Testimonial/people2.webp";
import person3 from "../../assets/images/Home/Testimonial/people3.webp";
import person4 from "../../assets/images/Home/Testimonial/people4.webp";
const testimonials = [
  {
    title: "“The Future of Business Cards”",
    description:
      "The NFC technology and customizable landing pages are a game-changer. It's the future of business cards.",
    img: person1,
    name: "John Smith",
    role: "CEO, Farrell",
  },
  {
    title: "“A Quick Win for Networking”",
    description:
      "The ease of sharing contact information and generating leads has significantly boosted my business.",
    img: person4,
    name: "Amal Jackson",
    role: "CEO, Grady and Sons",
  },
  {
    title: "“A Must-Have for Modern Professionals”",
    description:
      "The customizable landing pages and lead generation features are top-notch.",
    img: person2,
    name: "Priya Sony",
    role: "CEO, Amber Glow",
  },
  {
    title: "“Simple, Effective, and Efficient”",
    description:
      "I love how easy it is to use this platform. The user interface is intuitive, and the features are powerful.",
    img: person3,
    name: "Raj Gupta",
    role: "CEO, Crystal Clear",
  },
];

const Testimonial = ({ loading }) => {
  return (
    <Box
      padding={{ xs: 5, md: 10, sm: 5 }}
      // paddingLeft={{ xs: 5, md: 15, sm: 5 }}
      // paddingRight={{ xs: 5, md: 15, sm: 5 }}
      // mt={10}
    >
      <Typography
        fontSize={{ xs: "32px", md: "44px" }}
        fontWeight={700}
        textAlign={"center"}
        color="#000"
      >
        Hear from Our Satisfied Customers
      </Typography>
      <Typography
        variant="h5"
        width={{ xs: "100%", md: "50%" }}
        mx={"auto"}
        textAlign={"center"}
        color="#000"
      >
        Discover the impact our NFC business cards can have on your business.
      </Typography>
      <Grid container spacing={3} pt={5} mt={{ xs: 2, md: 0 }}>
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <Grid item md={3} key={index}>
                <HomeCard loading={true} />
              </Grid>
            ))
          : testimonials.map((testimonial, index) => (
              <Grid item md={3} sm={6} key={index}>
                <HomeCard data={testimonial} loading={false} />
              </Grid>
            ))}
      </Grid>
    </Box>
  );
};

export default Testimonial;
