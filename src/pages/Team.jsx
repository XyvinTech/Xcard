import { Box } from "@mui/material";
import React, { useEffect } from "react";
import HelpComponent from "../components/Home/HelpComponent";
import GetInTouch from "../components/Home/GetInTouch";
import Header4 from "../components/Home/Header4";
import Header from "../components/Home/Header";
import header from "../assets/images/Header5.webp";
import img1 from "../assets/images/team1.webp";
import img2 from "../assets/images/team2.webp";
import img3 from "../assets/images/team3.webp";
import img4 from "../assets/images/team4.webp";
import Header3 from "../components/Home/Header3";
import XcardTeams from "../components/XcardTeams";
import { useLocation } from "react-router-dom";
const Team = () => {
  const { pathname } = useLocation();
  const mainContent = {
    image: header,
    title: "Connect Your Team, Connect with Clients",
    subtitle: "Streamline team collaboration and communication.",
    button: "Try Now",
  };
  const data = [
    {
      image: img1,
      title: "Centralized Management",
      subtitle:
        "Manage your team's digital business cards from a single dashboard.",
    },
    {
      image: img2,
      title: "Enhanced Collaboration",
      subtitle:
        "Share contacts, leads, and collaborate seamlessly within your team.",
    },
    {
      image: img3,
      title: "Advanced Analytics",
      subtitle:
        "Track team performance, identify trends, and optimize your strategy.",
    },
    {
      image: img4,
      title: "Offline access",
      subtitle:
        "Access your digital business cards and network even without an internet connection.",
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
        <Header content={mainContent} />
        <Header3
          title={"Network Together, Achieve More"}
          data={data}
          subtitle={
            "Equip your team with the tools they need to connect with potential clients and partners more efficiently."
          }
        />{" "}
        <XcardTeams />
        <Header4 />
        <HelpComponent />
        <GetInTouch />{" "}
      </Box>
    </>
  );
};

export default Team;
