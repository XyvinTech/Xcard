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
import headerImage2 from "../../assets/images/MobileApp/Team.webp";
import icon from "../../assets/images/Team/Ellipse.png";

const XcardTeams = () => {
  const features = [
    {
      title: "Networking Simplified",
      description1:
        "Helps members connect with the right people and opportunities within their community.",
    },
    {
      title: "Enhanced Visibility",
      description1:
        "Profiles and product listings boost visibility and enable effective promotion.",
     
    },
    {
      title: "Efficient Communication",
      description1:
        "Seamless tools for messaging and notifications ensure timely updates and collaboration. ",
    
    },
    {
      title: "Event Engagement",
      description1: "Keeps members informed and actively participating in community events.",
    },
    {
      title: "Administrative Ease",
      description1: "Robust tools for managing members, events, and data make administration effortless.",
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      padding={{ xs: 5, md: 10, sm: 5 }}
      paddingLeft={{  xs: 5, md: 15, sm: 5 }}
      paddingRight={{ xs: 5, md: 15, sm: 5 }}
     
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
          <Typography
            fontSize={{ xs: "32px", md: "44px" }}
            color="#000"
            fontWeight={700}
          >
            Key Benifits
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
                    <Typography variant="h6" fontWeight={600} color="#000">
                      {feature?.title}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="h5" mt={1} color="text.secondary">
                        {feature?.description1}
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
