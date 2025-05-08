import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Box } from "@mui/material";
import qr from "../assets/images/QR/QRStand.webp";
import app from "../assets/images/MobileApp/Header6.webp";
import Header3 from "../components/Header3";
import Header4 from "../components/Header4";
import HelpComponent from "../components/HelpComponent";
import GetInTouch from "../components/GetInTouch";
import Testimonial from "../components/Home/Testimonial";
import card from "../assets/images/Shop/Header9.webp";
import header from "../assets/images/Home/image2.webp";
import img1 from "../assets/images/Home/img1.png";
import img2 from "../assets/images/Home/img2.png";
import img3 from "../assets/images/Home/img3.png";
import img4 from "../assets/images/Home/img4.png";
import rest from "../assets/images/Restaurant/Rest.webp";
import { useLocation } from "react-router-dom";
import HomeHeader from "../components/Home/HomeHeader";
import profile from "../assets/images/products/Profile.webp";
import XcardDigitalProfile from "../components/Home/XcardDigitalProfile";
import NFCCard from "../components/Home/NFCCard";
import ProductQR from "../components/Home/ProductQR";
import ProductRestaurant from "../components/Home/ProductRestaurant";
import ProductMember from "../components/Home/ProductMember";

const Home = () => {
  const { pathname } = useLocation();

  // Define all header configurations
  const headers = [
    {
      component: Header,
      props: {
        content: {
          image: header,
          title: "Elevate Your Professional Presence.",
          subtitle: "Reimagine the way you network and connect.",
          button: "Buy Now",
          buttonPath: "home",
        },
        isHome: true,
      },
    },
    {
      component: Header,
      props: {
        content: {
          image: profile,
          title: "Upgrade to Smart Business Cards",
          subtitle:
            "Say goodbye to manual contact entry. Tap, share, and connect seamlessly.",
          button: "Buy Now",
          buttonPath: "home",
        },
        isHome: true,
        head: true,
        bg: true,
      },
    },
    {
      component: Header,
      props: {
        content: {
          image: card,
          title: "Connect Your Team,Connect with Clients",
          subtitle: "Streamline team collaboration and communication.",
          button: "Buy Now",
          buttonPath: "home",
        },
        isHome: true,
        head: true,
        bg: true,
      },
    },
    {
      component: Header,
      props: {
        content: {
          image: qr,
          title: "Connect Effortlessly with Buziness Connect",
          subtitle:
            "Upgrade your networking game today. Order your QR Stand now.",
          buttonPath: "qr",
        },
        isMobile: true,
        bg: true,
      },
    },
    {
      component: Header,
      props: {
        content: {
          image: rest,
          title: "Your Restaurant,Reimagined",
          subtitle: "A New Era of Restaurant Technology.",
          button: "Know More",
          buttonPath: "restaurant",
        },
        bg: true,
      },
    },
    {
      component: Header,
      props: {
        content: {
          image: app,
          title: "Unlock the Power of Collaboration and Growth",
          subtitle:
            "The Community Business Development App bridges associations, organizations, and communities to foster meaningful connections and accelerate progress.",
        },
        isApp: true,
        bg: true,
      },
    },
  ];

  const [currentHeaderIndex, setCurrentHeaderIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start transition
      setIsTransitioning(true);
      
      // After a small delay, change the header
      setTimeout(() => {
        setCurrentHeaderIndex((prevIndex) => (prevIndex + 1) % headers.length);
        // End transition after the new header is set
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const CurrentHeader = headers[currentHeaderIndex].component;
  const currentProps = headers[currentHeaderIndex].props;

  return (
    <Box bgcolor="#fafafa">
      <Box
        sx={{
          mt: 10,
          backgroundImage: `linear-gradient(127deg, black 0%, #1E1E1E 100%)`,
          backgroundSize: "cover",
          backgroundPosition: "contain",
          pb: 10,
          position: "relative",
          overflow: "hidden"
        }}
      >
        <Box
          sx={{
            opacity: isTransitioning ? 0 : 1,
            transition: "opacity 300ms ease-in-out",
            height: { xs: "700px", lg: "650px" }  // Fixed height to prevent jumps
          }}
        >
          <CurrentHeader {...currentProps} />
        </Box>
      </Box>
      
      <Box bgcolor={"#fafafa"}>
        <XcardDigitalProfile />
      </Box>
      
      <Box
        sx={{
          backgroundImage: `linear-gradient(127deg, black 0%, #1E1E1E 100%)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <NFCCard />
      </Box>
      
      <Box bgcolor={"#fafafa"}>
        <HomeHeader white />
      </Box>
      
      <Box
        sx={{
          backgroundImage: `linear-gradient(127deg, black 0%, #1E1E1E 100%)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div id="features" style={{ paddingTop: "10px" }}>
          <Header3
            data={[
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
            ]}
            title="Beyond the Ordinary Business Card"
            subtitle="Our NFC business cards offer more than just contact sharing. Experience the benefits of a digital business card that empowers your professional network."
          />
        </div>
      </Box>
      
      <Box bgcolor={"#fafafa"}>
        <ProductQR />
      </Box>
      
      <Box
        sx={{
          backgroundImage: `linear-gradient(127deg, black 0%, #1E1E1E 100%)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <ProductRestaurant />
      </Box>
      
      <Box bgcolor={"#fafafa"}>
        <ProductMember />
      </Box>
      
      <Box sx={{ backgroundColor: "#FAFAFA" }}>
        <Testimonial />
        <Header4 />
      </Box>
      
      <Box
        sx={{
          backgroundImage: `linear-gradient(127deg, black 0%, #1E1E1E 100%)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <HelpComponent />
        <div id="LearnMore" style={{ paddingTop: "20px" }}>
          <GetInTouch />
        </div>
      </Box>
    </Box>
  );
};

export default Home;