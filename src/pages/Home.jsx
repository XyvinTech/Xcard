import React from "react";
import Header from "../components/Home/Header";
import { Box } from "@mui/material";
import Header2 from "../components/Home/Header2";
import headerImage from "../assets/images/Header2.png";
import headerImage2 from "../assets/images/Header3.png";
import Header3 from "../components/Home/Header3";
import Header4 from "../components/Home/Header4";
import HelpComponent from "../components/Home/HelpComponent";
import GetInTouch from "../components/Home/GetInTouch";
import Testimonial from "../components/Home/Testimonial";
import ClientsPage from "../components/Home/ClientsPage";
const Home = () => {
  const headerContent = {
    image: headerImage,
    title: "Reimagine Networking. Connect with Confidence.",
    subtitle: "The way you network will never be the same.",
  };
  const headerData = {
    image: headerImage2,
    title: "Xcard for Teams: Network Smarter, Together",
    subtitle:
      "Empower your team to network smarter. Manage digital business cards effortlessly.",
  };
  return (
    <>
      {" "}
      <Box
        sx={{
          mt: 15,
          backgroundImage: `linear-gradient(127deg, black 0%, #1E1E1E 100%), url(https://via.placeholder.com/330x330)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />
        <Header2 content={headerContent} />
        <Header3 />
      </Box>
      <Box
        sx={{
          backgroundColor: "#FFF",
        }}
      >
        {" "}
        <Header2 content={headerData} white /><ClientsPage/><Testimonial/> <Header4 />{" "}
      </Box>
      <Box
        sx={{
          backgroundImage: `linear-gradient(127deg, black 0%, #1E1E1E 100%), url(https://via.placeholder.com/330x330)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <HelpComponent />
        <GetInTouch />
      </Box>
    </>
  );
};

export default Home;
