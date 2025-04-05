import { Box } from "@mui/material";

import header from "../assets/images/products/Mobile.webp";
import ProductHeader from "../components/Products/ProductHeader";
import Header from "../components/Header";
import Header2 from "../components/Home/Header2";
import qr from "../assets/images/QR/stand.webp";

import headerImg from "../assets/images/Restaurant/Header.webp";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import HelpComponent from "../components/HelpComponent";
import GetInTouch from "../components/GetInTouch";
import ProductHeaders from "../components/Products/ProductHeaders";
const Products = () => {
  const { pathname } = useLocation();
  const mainContent = {
    image: header,
    title: "Your Digital Business Card in Your Pocket",
    subtitle: "Take your digital business card with you wherever you go",

    button: "Know More",
    buttonPath: "/products/card",
  };
  const mainContentData = {
    image: headerImg,
    title: "Your Restaurant, Reimagined",
    subtitle: "Upgrade your networking game today. Order your QR Stand now.",
    buttonPath: "/products/restaurant",
    button: "Know More",
  };
  const headerData = {
    image: header,
    title: "Upgrade to Smart Business Cards",
    buttonPath: "/products/membership",
    subtitle:
      "Say goodbye to manual contact entry. Tap, share, and connect seamlessly.",
  };
  const qRData = {
    image: qr,
    buttonPath: "/products/qrstand",
    title: "Connect Effortlessly with Buziness Connect",
    subtitle: "Upgrade your networking game today. Order your QR Stand now.",
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  
    const el = document.getElementById("get-in-touch");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
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
        <ProductHeaders content={mainContent} />
      </Box>
      <Box
        sx={{
          backgroundColor: "#FAFAFA",
        }}
      >
        {" "}
        <Header2 content={headerData} white />
        <Header content={mainContentData} support white />
      </Box>
      <Box
        sx={{
          backgroundImage: `linear-gradient(127deg, black 0%, #1E1E1E 100%)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header2 content={qRData} showButton bg />
        <HelpComponent />  <div id="get-in-touch"style={{ paddingTop: "20px" }}>
        <GetInTouch /></div>
      </Box>
    </>
  );
};

export default Products;
