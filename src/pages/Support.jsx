import { Box } from "@mui/material";
import React, { useEffect } from "react";
import GetInTouch from "../components/GetInTouch";
import Header from "../components/Header";
import header from "../assets/images/Support/Header8.webp";
import People from "../components/Support/People";
import Blog from "../components/Support/Blog";
import { useLocation } from "react-router-dom";
const Support = () => {
  const { pathname } = useLocation();
  const mainContent = {
    image: header,
    title: "Who We Are",
    subtitle: "Turn meetings into leads and share your contact details effortlessly. Our innovative technology and integrations revolutionize the way professionals connect.",
  
    button: "Try Now",
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Box
        sx={{
          mt: 10,
          backgroundImage: `linear-gradient(127deg, black 0%, #1E1E1E 100%)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header content={mainContent} support  shop/>
        <People/>
        <Blog/>
        <GetInTouch />
      </Box>
    </>
  );
};

export default Support;
