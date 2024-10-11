import { Box, Typography } from "@mui/material";
import React from "react";
import BlogCard from "../ui/BlogCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../assets/images/blog1.webp";
import image2 from "../assets/images/blog2.webp";
import image3 from "../assets/images/blog3.webp";
const blogData = [
  {
    id: 1,
    image: image1,
    title: "The Benefits of Using a Digital Business Card",
    subtitle:
      "This simply dummy text of the printing and typesetting industry and typesetting industry....",
  },
  {
    id: 2,
    image: image2,
    title: "How to Use Digital Business Cards",
    subtitle:
      "This simply dummy text of the printing and typesetting industry and typesetting industry....",
  },
  {
    id: 3,
    image: image3,
    title: "The Role of Networking in Industry",
    subtitle:
      "This simply dummy text of the printing and typesetting industry and typesetting industry....",
  },
];

const Blog = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1200, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <Box padding={{ xs: 5, md: 10 }} mt={10}>
      <>
        <Typography
          fontSize={{ xs: "32px", md: "44px" }}
          fontWeight={700}
          textAlign={"center"}
        >
          Blog
        </Typography>

        <Typography
          variant="h5"
          width={{ xs: "100%", md: "50%" }}
          mb={10}
          mx={"auto"}
          textAlign={"center"}
        >
          Please feel free to send us any questions, feedback or suggestions you
          might have.
        </Typography>
      </>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        itemClass="carousel-item-padding-20-px"
      >
        {blogData?.map((content) => (
           <Box
           key={content.id}
           sx={{
             padding: {
               xs: "0 10px", 
               sm: "0 30px", 
               md: "0 45px", 
             },
           }}
         >
            <BlogCard content={content} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Blog;
