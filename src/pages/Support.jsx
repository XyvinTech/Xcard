import { Box } from "@mui/material";
import React from "react";
import GetInTouch from "../components/Home/GetInTouch";
import Header from "../components/Home/Header";
import header from "../assets/images/Header8.webp";
import People from "../components/People";
import Blog from "../components/Blog";
const Support = () => {
  const mainContent = {
    image: header,
    title: "Who We Are",
    subtitle: "Turn meetings into leads and share your contact details effortlessly. Our innovative technology and integrations revolutionize the way professionals connect.",
  
    button: "Try Now",
  };
  return (
    <>
      <Box
        sx={{
          mt: 15,
          backgroundImage: `linear-gradient(127deg, black 0%, #1E1E1E 100%), url(https://via.placeholder.com/330x330)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header content={mainContent}  shop/>
        <People/>
        <Blog/>
        <GetInTouch />
      </Box>
    </>
  );
};

export default Support;
