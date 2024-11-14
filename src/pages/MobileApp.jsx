import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../components/Header";
import header from "../assets/images/MobileApp/Header6.webp";
import header1 from "../assets/images/Team/Header5.webp";
import img1 from "../assets/images/MobileApp/img7.webp";
import img2 from "../assets/images/MobileApp/img8.webp";
import img3 from "../assets/images/MobileApp/img9.webp";
import img4 from "../assets/images/MobileApp/img10.webp";
import netImg1 from "../assets/images/Team/team1.webp";
import netImg2 from "../assets/images/Team/team2.webp";
import netImg3 from "../assets/images/Team/team3.webp";
import netImg4 from "../assets/images/Team/team4.webp";
import Header3 from "../components/Header3";
import WhyXcard from "../components/MobileApp/WhyXcard";
import GetInTouch from "../components/GetInTouch";
import { useLocation } from "react-router-dom";
import Header2 from "../components/Home/Header2";
import XcardTeams from "../components/Team/XcardTeams";
import Header4 from "../components/Header4";
import HelpComponent from "../components/HelpComponent";
import { button } from "framer-motion/client";
const MobileApp = () => {
  const { pathname } = useLocation();
  const mainContent = {
    image: header,
    title: "Your Digital Business Card in Your Pocket",
    subtitle: "Take your digital business card with you wherever you go.",
    des: "Download the Xcard mobile app for easy access and effortless networking.",
    button: "Know More",
    buttonPath:"app"
  };
  const Networkdata = [
    {
      image: netImg1,
      title: "Centralized Management",
      subtitle:
        "Manage your team's digital business cards from a single dashboard.",
    },
    {
      image: netImg2,
      title: "Enhanced Collaboration",
      subtitle:
        "Share contacts, leads, and collaborate seamlessly within your team.",
    },
    {
      image: netImg3,
      title: "Advanced Analytics",
      subtitle:
        "Track team performance, identify trends, and optimize your strategy.",
    },
    {
      image: netImg4,
      title: "Offline access",
      subtitle:
        "Access your digital business cards and network even without an internet connection.",
    },
  ];
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
    title: "Connect Your Team, Connect with Clients",
    subtitle: "Streamline team collaboration and communication.",
    button: "Try Now",
    buttonPath:"app"
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
        <Header content={mainContent} />
        <Header3
          title={"Network Anytime, Anywhere"}
          data={data}
          subtitle={
            "Stay connected and network efficiently, no matter where you are."
          }
        />
        <WhyXcard />
        <Box
          sx={{
            backgroundColor: "#FAFAFA",
          }}
        >
          {" "}
          <Header2 content={headerData} white app />
          <Header3
            white
            title={"Network Together, Achieve More"}
            data={Networkdata}
            subtitle={
              "Equip your team with the tools they need to connect with potential clients and partners more efficiently."
            }
          />
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
