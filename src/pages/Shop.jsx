import { Box } from "@mui/material";
import React, { useEffect } from "react";
import GetInTouch from "../components/GetInTouch";
import Header from "../components/Header";
import header from "../assets/images/Shop/Header9.webp";
import Header3 from "../components/Header3";
import img1 from "../assets/images/Shop/img11.webp";
import img2 from "../assets/images/Shop/img12.webp";
import img3 from "../assets/images/Shop/img13.webp";
import img4 from "../assets/images/Shop/img14.webp";
import icon1 from "../assets/images/Shop/icon1.webp";
import icon2 from "../assets/images/Shop/icon2.webp";
import icon3 from "../assets/images/Shop/icon3.webp";
import icon4 from "../assets/images/Shop/icon4.webp";
import { useLocation } from "react-router-dom";
import ChooseUs from "../components/Card/ChooseUs";
import Cards from "../components/Card/Cards";

const Shop = () => {
  const { pathname } = useLocation();
  const mainContent = {
    image: header,
    title: "Connect Your Team,Connect with Clients",
    subtitle:
      "Streamline team collaboration and communication.",

    button: "Buy Now",
  };
  const data = [
    {
      image: img1,
      icon: icon1,
      title: "Order",
      subtitle: "Select a card and add-ons.Complete the order and payment.",
    },
    {
      image: img2,
      icon: icon2,
      title: "Design",
      subtitle:
        "Provide design input and upload your logo through the design portal.",
    },
    {
      image: img3,
      icon: icon3,
      title: "Review",
      subtitle: "Review the digital design proof and provide feedback.",
    },
    {
      image: img4,
      icon: icon4,
      title: "Print & Ship",
      subtitle: "After approval we will program, produce and ship your card.",
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
          backgroundImage: `linear-gradient(127deg, black 0%, #1E1E1E 100%)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header content={mainContent} isHome head bg/> <ChooseUs />
        <Header3
          title={"How Buziness Connect Works"}
          data={data}
          subtitle={
            "Discover how easy it is to use Buziness Connect and start networking smarter."
          }
        />{" "}
        <Box
          sx={{
            backgroundColor: "#FAFAFA",
          }}
        >
          <Cards />
        </Box>
        <div id="getInTouch" style={{ paddingTop: "20px" }}>
          <GetInTouch />
        </div>
      </Box>
    </>
  );
};

export default Shop;
