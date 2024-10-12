import { Box } from "@mui/material";
import React, { useEffect } from "react";
import GetInTouch from "../components/Home/GetInTouch";
import Header from "../components/Home/Header";
import header from "../assets/images/Header9.webp";
import Header3 from "../components/Home/Header3";
import img1 from "../assets/images/img11.webp";
import img2 from "../assets/images/img12.webp";
import img3 from "../assets/images/img13.webp";
import img4 from "../assets/images/img14.webp";
import icon1 from "../assets/images/icon1.webp";
import icon2 from "../assets/images/icon2.webp";
import icon3 from "../assets/images/icon3.webp";
import icon4 from "../assets/images/icon4.webp";
import { useLocation } from "react-router-dom";

const Shop = () => {
  const { pathname } = useLocation();
  const mainContent = {
    image: header,
    title: "Upgrade to Smart Business Cards",
    subtitle:
      "Say goodbye to manual contact entry. Tap, share, and connect seamlessly.",

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
          backgroundImage: `linear-gradient(127deg, black 0%, #1E1E1E 100%), url(https://via.placeholder.com/330x330)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header content={mainContent} />
        <Header3
          title={"How Xcard Works"}
          data={data}
          subtitle={
            "Discover how easy it is to use Xcard and start networking smarter."
          }
        />
        <GetInTouch />
      </Box>
    </>
  );
};

export default Shop;
