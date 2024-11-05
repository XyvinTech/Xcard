import React, { useEffect } from "react";
import Header from "../components/Header";
import { Box } from "@mui/material";
import GetInTouch from "../components/GetInTouch";
import header from "../assets/images/Restaurant/Header.webp";
import { useLocation } from "react-router-dom";
import Elevate from "../components/Restaurant/Elevate";
const Restaurant = () => {
  const { pathname } = useLocation();

  const mainContent = {
    image: header,
    title: "Your Restaurant,Reimagined",
    subtitle: "A New Era of Restaurant Technology.",
    button: "Know More",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {" "}
      <Box
        sx={{
          mt: 10,
          backgroundImage: `linear-gradient(127deg, black 0%, #1E1E1E 100%), url(https://via.placeholder.com/330x330)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header content={mainContent} />
        <Box
          sx={{
            backgroundColor: "#FAFAFA",
          }}
        >
          <Elevate />
        </Box>
        <GetInTouch />{" "}
      </Box>
    </>
  );
};

export default Restaurant;
