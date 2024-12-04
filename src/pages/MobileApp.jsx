import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../components/Header";
import header from "../assets/images/MobileApp/Header6.webp";
import header1 from "../assets/images/Team/Header5.webp";
import img1 from "../assets/images/MobileApp/img7.webp";
import img2 from "../assets/images/MobileApp/img8.webp";
import img3 from "../assets/images/MobileApp/img9.webp";
import img4 from "../assets/images/MobileApp/img10.webp";
import Header3 from "../components/Header3";
import WhyXcard from "../components/MobileApp/WhyXcard";
import GetInTouch from "../components/GetInTouch";
import { useLocation } from "react-router-dom";
import Header2 from "../components/Home/Header2";
import XcardTeams from "../components/Team/XcardTeams";
import Header4 from "../components/Header4";
import HelpComponent from "../components/HelpComponent";
import UniteComponent from "../components/MobileApp/UniteComponent";
const MobileApp = () => {
  const { pathname } = useLocation();
  const mainContent = {
    image: header,
    title: "Unlock the Power of Collaboration and Growth",
    subtitle:
      "The Community Business Development App bridges associations, organizations, and communities to foster meaningful connections and accelerate progress.",
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

  const headerData = {
    image: header1,
    title: "Community Business Development App  ",
    subtitle:
      "The Community Business Development App is a versatile platform designed to empower associations, organizations, and communities by enhancing networking, streamlining communication, and fostering business growth. With a wide range of features, this app helps members connect, collaborate, and engage more effectively, while providing administrators with tools for efficient management.  ",
    button: "Try Now",
    buttonPath: "app",
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
        <Header content={mainContent} isApp />
        <Box
          sx={{
            backgroundColor: "#FAFAFA",
          }}
        >
          {" "}
          <Header2 content={headerData} white app />
          <Box
            sx={{
              mt: 10,
              backgroundImage: `linear-gradient(127deg, black 0%, #1E1E1E 100%)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
           <UniteComponent/>
          </Box>
          <XcardTeams />
        </Box>
        <Header4 />
        <HelpComponent />{" "}
        <div id="getInTouch" style={{ paddingTop: "20px" }}>
          <GetInTouch />
        </div>
      </Box>
    </>
  );
};

export default MobileApp;
