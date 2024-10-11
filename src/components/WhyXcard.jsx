import {
  Grid,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import React from "react";
import headerImage2 from "../assets/images/Header7.webp";
import icon from "../assets/images/Button.png";

const WhyXcard = () => {
  const features = [
    {
      title: "Save Money and Time",
      description1: "Eliminate the costs of traditional paper business cards.",
      description2:
        "Streamline your networking processes and reduce administrative overhead.",
    },
    {
      title: "Stay Connected and Grow Your Business",
      description1:
        "Automatically capture leads and nurture them for conversions.",
      description2:
        "Maximize your networking efforts and drive business growth.",
    },
    {
      title: "Environmental Benefits:",
      description1:
        "By eliminating the need for paper business cards, you're contributing to a more sustainable planet.",
      description2:
        "Xcard is committed to environmental sustainability and responsible business practices",
    },
    {
      title: "Easy of Use",
      description1:
        "Our user-friendly interface makes it simple to create and manage your digital business cards.",
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      padding={{ xs: 5, md: 10}} mt={10}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item md={6} display={"flex"} justifyContent={"center"}>
        <Stack spacing={2}>
          <Typography fontSize={{xs: "32px", md: "44px"}}  fontWeight={700}>
            Why Choose Xcard?
          </Typography>

          <List>
            {features?.map((feature, index) => (
              <ListItem alignItems="flex-start" key={index}>
                <ListItemIcon sx={{ minWidth: 24, marginTop: 1.5 }}>
                  <img
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                    }}
                    src={icon}
                    alt="icon"
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="h6" fontWeight={600}>
                      {feature?.title}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="h5" mt={1} color="text.secondary">
                        {feature?.description1}
                      </Typography>
                      <Typography variant="h5" mt={1} color="text.secondary">
                        {feature?.description2}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Stack>
      </Grid>{" "}
      <Grid item md={6} display={"flex"} justifyContent={"flex-start"}>
      <Box
          component="img"
          src={headerImage2}
          alt="background"
          sx={{
            objectFit: "fill",
            width: {
              xs: "100%",
              md: "539px",
            },
            height: {
              xs: "auto",
              md: "514px",
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default WhyXcard;
