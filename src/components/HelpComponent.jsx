import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import StyledAccordion from "../ui/StyledAccordion";
const accordionData = [
  {
    id: "panel1",
    title: "How do NFC cards and QR stands work?",
    content:
      "NFC cards use tap-to-connect technology, while QR stands allow users to scan a code to access digital profiles instantly.",
  },
  {
    id: "panel2",
    title: "Can I update my digital profile after purchasing an NFC card or QR stand?",
    content:
      "Yes! You can edit your details in real-time without needing to replace your card or stand.",
  },
  {
    id: "panel3",
    title: "Do I need an app to use these products?",
    content:
      "No, users can access your digital profile via a web link—no app required.",
  },
  {
    id: "panel4",
    title: "Are these solutions eco-friendly?",
    content:
      "Absolutely! NFC cards and QR stands reduce the need for printed materials, making them a sustainable choice.",
  },
  {
    id: "panel5",
    title: "Can I customize my NFC card or QR stand?",
    content:
      "Yes, we offer full branding customization, including logos, colors, and designs.",
  },  {
    id: "panel6",
    title: "Is there a setup or subscription fee?",
    content:
      "We provide flexible pricing options, with one-time purchases and optional subscription-based premium features.",
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
