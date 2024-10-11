import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import StyledAccordion from "../../ui/StyledAccordion";
const accordionData = [
  {
    id: "panel1",
    title: "How do I create a digital business card?",
    content:
      "Simply follow the on-screen instructions to customize your digital business card and add your contact information.",
  },
  {
    id: "panel2",
    title: "Can I use my digital business card offline?",
    content:
      "Simply follow the on-screen instructions to customize your digital business card and add your contact information.",
  },
  {
    id: "panel3",
    title: "Can I customize the design of my digital business card?",
    content:
      "Simply follow the on-screen instructions to customize your digital business card and add your contact information.",
  },
  {
    id: "panel4",
    title: "What is the cost of using the platform?",
    content:
      "Simply follow the on-screen instructions to customize your digital business card and add your contact information.",
  },
];
const HelpComponent = () => {
  return (
    <Box  padding={{ xs: 5, md: 10 }} >
      <Typography fontSize={{xs: "32px", md: "44px"}} lineHeight={"44px"} fontWeight={700} textAlign={"center"}>
        Need Help? We've Got You Covered
      </Typography>
      <Typography variant="h5" width={{ xs: "100%", md: "50%" }} mt={2} mx={"auto"} textAlign={"center"}>
        We've compiled a list of frequently asked questions to help you get
        started.
      </Typography>{" "}
      <Box pt={10}>
        {" "}
        <StyledAccordion data={accordionData} />
      </Box>
    </Box>
  );
};

export default HelpComponent;
