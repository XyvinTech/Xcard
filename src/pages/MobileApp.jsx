import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../components/Home/Header";
import header from "../assets/images/Header6.webp";
import img1 from "../assets/images/img7.webp";
import img2 from "../assets/images/img8.webp";
import img3 from "../assets/images/img9.webp";
import img4 from "../assets/images/img10.webp";
import Header3 from "../components/Home/Header3";
import WhyXcard from "../components/WhyXcard";
import GetInTouch from "../components/Home/GetInTouch";
import { useLocation } from "react-router-dom";
const MobileApp = () => {
  const { pathname } = useLocation();
  const mainContent = {
    image: header,
    title: "Your Digital Business Card in Your Pocket",
    subtitle: "Take your digital business card with you wherever you go.",
    des: "Download the Xcard mobile app for easy access and effortless networking.",
    button: "Try Now",
  };
  const data = [
    {
      image: img1,
      title: "Easy to Use",
      subtitle: "Enjoy a user-friendly interface and intuitive navigation.",
    },
    {
      image: img2,
      title: "Always Accessible",
      subtitle:
        "Access your digital business card and network anytime, anywhere.",
    },
    {
      image: img3,
      title: "Instant Sharing",
      subtitle: " Share your contact information with a simple tap.",
    },
    {
      image: img4,
      title: "Lead Generation",
      subtitle: "Capture leads and nurture them for conversions.",
    },
  ];


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Box
        sx={{
          mt: 10,
          backgroundImage: `linear-gradient(127deg, black 0%, #1E1E1E 100%), url(https://via.placeholder.com/330x330)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header content={mainContent}isMobile />
        <Header3
          title={"Network Anytime, Anywhere"}
          data={data}
          subtitle={
            "Stay connected and network efficiently, no matter where you are."
          }
        />
        <WhyXcard /> <GetInTouch />
      </Box>
    </>
  );
};

export default MobileApp;
