import { Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SubscribeCard from "./SubscribeCard";
import Logo from "../assets/images/Logo.png";

const companyItems = [
  "About Us",
  "Blog",
  "Support",
  "Privacy Policy",
  "Terms & Conditions",
];
const quickLinks = ["Features", "Team", "Mobile App", "Shop"];
const Footer = () => {
  return (
    <Grid container bgcolor={"#000000"}  spacing={2} padding={{xs: 5, md: 10,sm:5}} >
      <Grid item md={3} sm={3} display={"flex"} justifyContent={"center"}>
        <Stack spacing={2}>
          <img
            src={Logo}
            alt="logo"
            objectFit="fill"
            width={"99px"}
            height={"48px"}
          />
          <Typography variant="h5">
            The all-in-one business card for the modern professional. Network
            smarter, connect deeper, and grow your business faster.
          </Typography>
        </Stack>
      </Grid>
      <Grid item md={5} sm={5} display={"flex"} justifyContent={"center"}>
        <Stack direction={"row"} spacing={8}>
          <Stack spacing={2}>
            <Typography variant="h3">Company</Typography>
            {companyItems.map((item, index) => (
              <Typography key={index} variant="h6" color="text.secondary">
                {item}
              </Typography>
            ))}
          </Stack>
          <Stack spacing={2}>
            <Typography variant="h3">Quick Links</Typography>
            {quickLinks.map((item, index) => (
              <Typography key={index} variant="h6" color="text.secondary">
                {item}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Grid>
      <Grid item md={4} sm={4} display={"flex"} justifyContent={"center"}>
        <SubscribeCard />
      </Grid>
      <Grid item xs={12}>
        <Divider sx={{ borderColor: "#A7A7A7" ,mt:2}} />
      </Grid>
      <Stack padding={2} justifyContent={"space-between"}>
        <Typography>© 2023. All rights reserved.</Typography>
      </Stack>
    </Grid>
  );
};

export default Footer;
