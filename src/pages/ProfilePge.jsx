import React from "react";
import Header3 from "../components/Header3";
import img1 from "../assets/images/MobileApp/img7.webp";
import img2 from "../assets/images/MobileApp/img8.webp";
import img3 from "../assets/images/MobileApp/img9.webp";
import img4 from "../assets/images/MobileApp/img10.webp";
import { Box } from "@mui/material";
import header from "../assets/images/products/Profile.webp";

import WhyXcard from "../components/MobileApp/WhyXcard";
import Header from "../components/Header";
const ProfilePge = () => {
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
  const mainContent = {
    image: header,
    title: "Upgrade to Smart Business Cards",
    subtitle:
      "Say goodbye to manual contact entry. Tap, share, and connect seamlessly.",
    button: "Buy Now",
  };
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
        {" "}
        <Header content={mainContent} isHome head bg />
        <Header3
          title={"Network Anytime, Anywhere"}
          data={data}
          subtitle={
            "Stay connected and network efficiently, no matter where you are."
          }
        />
        <WhyXcard />
      </Box>
    </>
  );
};

export default ProfilePge;
