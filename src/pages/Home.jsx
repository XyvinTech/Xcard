import React, { useEffect } from "react";
import Header from "../components/Home/Header";
import { Box } from "@mui/material";
import Header2 from "../components/Home/Header2";
import headerImage from "../assets/images/Header2.webp";
import headerImage2 from "../assets/images/Header3.webp";
import Header3 from "../components/Home/Header3";
import Header4 from "../components/Home/Header4";
import HelpComponent from "../components/Home/HelpComponent";
import GetInTouch from "../components/Home/GetInTouch";
import Testimonial from "../components/Home/Testimonial";
import ClientsPage from "../components/Home/ClientsPage";
import header from "../assets/images/image2.png";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import { useLocation } from "react-router-dom";
const Home = () => {
  const { pathname } = useLocation();
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
  const mainContent = {
    image: header,
    title: "Elevate Your Professional Presence.",
    subtitle: "Reimagine the way you network and connect.",
    button: "Shop Now",
  };
  const data = [
    {
      image: img1,
      title: "Tap, Share, Connect",
      subtitle:
        "Exchange contact information instantly with a simple tap of your NFC-enabled device.",
    },
    {
      image: img2,
      title: "Customizable Landing Page",
      subtitle:
        "Create a branded and professional online presence that reflects your brand identity.",
    },
    {
      image: img3,
      title: "Easy Lead Generation",
      subtitle:
        "Automatically capture visitor information and nurture leads for conversions.",
    },
    {
      image: img4,
      title: "Versatile Link Sharing",
      subtitle:
        "Add multiple links to your digital business card, from your website to your social media profiles.",
    },
  ];

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
        <Header content={mainContent} isHome />
        <Header2 content={headerContent} />
        <div id="features">
          {" "}
          <Header3
            data={data}
            title="Beyond the Ordinary Business Card"
            subtitle="Our NFC business cards offer more than just contact sharing. Experience the benefits of a digital business card that empowers your professional network."
          />
        </div>
      </Box>
      <Box
        sx={{
          backgroundColor: "#FFF",
        }}
      >
        {" "}
        <Header2 content={headerData} white />
        <ClientsPage />
        <Testimonial />
        <Header4 />{" "}
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
