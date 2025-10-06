import { Box, Grid, Typography, Skeleton } from "@mui/material";
import React from "react";
import HomeCard from "../../ui/HomeCard";
import person1 from "../../assets/images/partners/Suresh.jpg";
import person2 from "../../assets/images/partners/Frame 13 1.png";
import person3 from "../../assets/images/partners/Frame 40 (2).png";
import person4 from "../../assets/images/partners/Frame 40 (1).png";
import person5 from "../../assets/images/partners/Frame 40.png";
const testimonials = [
  {
    img: person1,
    name: "Suresh",
    phone: "+971 56 788 3132",
    location: "UAE",
  },
  {
    img: person2,
    name: "Dr Asaad Eltoum",
    phone: "+971555277760",
    location: "Saudi Arabia",
  },
  {
    img: person4,
    name: "Mohammed Almortada",
    phone: "+966558040673",
    location: "Egypt",
  },
  {
    img: person3,
    name: "Afsal",
    phone: "+91 89434 36303",
    location: "India",
  },
  {
    img: person5,
    name: "Abied Abdelgawe",
    phone: "+249912200031",
    location: "Sudan",
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
        Our Marketing Partners
      </Typography>
      <Typography
        variant="h5"
        width={{ xs: "100%", md: "50%" }}
        mx={"auto"}
        textAlign={"center"}
        color="#000"
      >
        Discover the impact our solutions can have on your business.
      </Typography>
      <Grid container spacing={3} pt={5} mt={{ xs: 2, md: 0 }} justifyContent="center">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
            <Grid item lg={2.4} md={3} sm={6} xs={12} key={index} display="flex" justifyContent="center">
              <HomeCard loading={true} />
            </Grid>
          ))
          : testimonials.map((testimonial, index) => (
            <Grid item lg={2.4} md={3} sm={6} xs={12} key={index} display="flex" justifyContent="center">
              <HomeCard data={testimonial} loading={false} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Testimonial;
