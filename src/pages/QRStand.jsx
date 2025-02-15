import { Box } from "@mui/material";
import React, { useEffect } from "react";
import GetInTouch from "../components/GetInTouch";
import Header from "../components/Header";
import header from "../assets/images/QR/QRStand.webp";
import { useLocation } from "react-router-dom";
import DigitalPortfolio from "../components/QR/DigitalPortfolio";
import QRStands from "../components/QR/QRStands";
const QRStand = () => {
  const { pathname } = useLocation();
  const mainContent = {
    image: header,
    title: "Connect Effortlessly with Buziness Connect",
    subtitle: "Upgrade your networking game today. Order your QR Stand now.",
    buttonPath: "qr",
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
        <Header content={mainContent} isMobile bg />
        <Box
          sx={{
            backgroundColor: "#FAFAFA",
          }}
        >
          <DigitalPortfolio /> <QRStands />
        </Box>{" "}
        <div id="getInTouch" style={{ paddingTop: "20px" }}>
          <GetInTouch />{" "}
        </div>
      </Box>
    </>
  );
};

export default QRStand;
