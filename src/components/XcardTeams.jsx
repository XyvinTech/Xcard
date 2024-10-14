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
import headerImage2 from "../assets/images/Header3.webp";
import icon from "../assets/images/Button.png";

const XcardTeams = () => {
  const features = [
    {
      title: "Enhanced Collaboration",
      description1:
        "Manage all team members' digital business cards from a single dashboard.",
      description2: "Easily share and collaborate on contacts and leads.",
    },
    {
      title: "Consistent Branding",
      description1:
        "Ensure all team members use consistent branding guidelines.",
      description2:
        "Allow teams to customize their digital business cards with their unique branding.",
    },
    {
      title: "Improved Efficiency",
      description1:
        "Save time and effort by automating the process of sharing contact information.",
      description2: "Monitor team activity and identify areas for improvement.",
    },
    {
      title: "Cost-Effective",
      description1: "Save money on printing and distribution costs.",
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      padding={{ xs: 5, md: 10 ,sm:5}}
      mt={10}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item md={6} sm={6} display={"flex"} justifyContent={"flex-start"}>
        <Box
          component="img"
          src={headerImage2}
          alt="background"
          sx={{
            objectFit: "fill",
            width: {
              xs: "100%",
              lg: "539px",
              md: "100%",
            },
            height: {
              xs: "auto",
              lg: "514px",
              md: "100%",
            },
          }}
        />
      </Grid>

      <Grid item md={6} sm={6} display={"flex"} justifyContent={"center"}>
        <Stack spacing={2}>
          <Typography fontSize={{xs:"32px", md:"44px"}} fontWeight={700}>
            Why Choose Xcard for Teams?
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
      </Grid>
    </Grid>
  );
};

export default XcardTeams;
