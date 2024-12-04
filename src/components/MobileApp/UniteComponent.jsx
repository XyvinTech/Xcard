import {
  Box,
  Divider,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import icon from "../../assets/images/Team/Ellipse.png";
const UniteComponent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const [selectedId, setSelectedId] = useState("01");

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };
  const data = [
    {
      id: "01",
      title: "Member Profile Management",
    },
    {
      id: "02",
      title: "Search and Requirement Posting",
    },
    {
      id: "03",
      title: "Event Management",
    },
    {
      id: "04",
      title: "Administrative Control",
    },
    {
      id: "05",
      title: "Communication and Notification",
    },
    {
      id: "06",
      title: "Modern Digital Tools",
    },
  ];
  const details = {
    "01": [
      {
        title: "Profile Creation",
        description1:
          "Members can create detailed profiles with their personal, professional, or business information, including contact details, services/products offered, and more",
      },
      {
        title: "Profile Customization",
        description1:
          "A variety of themes are available for members to personalize their profiles, ensuring optimal representation. ",
      },
      {
        title: "Service/Product Listings",
        description1:
          "Members can showcase their offerings with detailed descriptions, images, and pricing for enhanced visibility and accessibility.",
      },
      {
        title: "Use Cases",
        description1:
          "Enable members to present their expertise or business in a structured, searchable format, making it easier for others to connect and collaborate. ",
      },
    ],
    "02": [
      {
        title: "Search Filters",
        description1:
          "Members can easily find relevant connections, products, or services using advanced filter-based search tools.",
      },
      {
        title: "Requirement Posting",
        description1:
          "Members can post job opportunities, collaboration needs, or product inquiries, fostering a culture of support and cooperation.  ",
      },
      {
        title: "Analytics",
        description1:
          " Reports on inquiries, quotes, and responses help members and administrators track engagement and optimize strategies. ",
      },
      {
        title: "Use Cases",
        description1:
          "Streamline the discovery of services, products, or collaborations within the community. ",
      },
    ],
    "03": [
      {
        title: "Event Creation and Listings",
        description1:
          "Administrators and members can post events such as webinars, workshops, reunions, or networking meets.",
      },
      {
        title: "RSVP and Notifications",
        description1:
          "Members receive timely updates about events and can easily register or express interest.  ",
      },
      {
        title: "Event Reports",
        description1:
          "Detailed reports on event participation and feedback are available to organizers.  ",
      },
      {
        title: "Use Cases",
        description1:
          "Facilitate event planning and maximize participation by keeping the community informed and involved.  ",
      },
    ],
    "04": [
      {
        title: "User and Content Management",
        description1:
          "Administrators can oversee profiles, event listings, and content submissions, ensuring the app remains organized and secure.  ",
      },
      {
        title: "Membership Renewals",
        description1:
          "Tools to track and manage annual memberships, payments, and reminders for renewal.   ",
      },
      {
        title: "Data Analytics and Reporting",
        description1:
          " Exportable, searchable reports provide insights into user engagement, event success, and overall app performance.  ",
      },
      {
        title: "Use Cases",
        description1:
          "Simplify administrative tasks while maintaining a transparent and efficient system for members.  ",
      },
    ],
    "05": [
      {
        title: "In-App Messaging",
        description1:
          " Members can connect and communicate directly, enabling seamless networking.  ",
      },
      {
        title: "Community Notifications",
        description1:
          "Timely alerts about updates, new posts, and events ensure members stay informed.  ",
      },
      {
        title: "File Attachments",
        description1:
          "Members can share documents, images, or payment confirmations with administrators or other members.  ",
      },
      {
        title: "Use Cases",
        description1:
          "Foster communication and collaboration within the community. ",
      },
    ],
    "06": [
      {
        title: "QR Code Integration",
        description1:
          "Members receive a unique QR code linked to their profile or business preview page, allowing easy sharing and networking. ",
      },
      {
        title: "NFC Features",
        description1:
          "Members can use NFC-enabled devices to share or update their profile information quickly and efficiently.",
      },
      {
        title: "Use Cases",
        description1:
          "Provide members with digital tools to enhance their networking capabilities in a modern, eco-friendly way. ",
      },
    ],
  };
  const handleSelect = (id) => {
    setSelectedId(id);
  };
  return (
    <Box
      padding={{ xs: 5, md: 10, sm: 5 }}
      paddingLeft={{ xs: 5, md: 15, sm: 5 }}
      paddingRight={{ xs: 5, md: 15, sm: 5 }}
      mt={2}
      ref={ref}
    >
      <>
        <motion.div
          variants={slideIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Typography
            fontSize={{ xs: "32px", md: "44px" }}
            lineHeight={"44px"}
            fontWeight={700}
            textAlign={"center"}
          >
            Unite and Achieve More
          </Typography>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Typography
            variant="h5"
            mb={2}
            mt={2}
            color={"#f2f2f2"}
            textAlign={"center"}
          >
            Transform connections into opportunities with smart, versatile
            features.
          </Typography>
        </motion.div>
        <Grid
          container
          padding={{ lg: 10, xs: 0 }}
          spacing={2}
          direction={{ lg: "row", xs: "column", md: "row", sm: "row" }}
          wrap="nowrap"
          alignItems="center"
        >
          <Grid item md={12} xs={12} lg={5} sm={5} alignContent={"center"}>
            {data?.map((data, index) => (
              <Typography
                key={index}
                variant="h6"
                mb={2}
                onClick={() => handleSelect(data.id)}
                sx={{
                  cursor: "pointer",
                  color: selectedId === data.id ? "#D4B55B" : "inherit",
                  fontWeight: selectedId === data.id ? 700 : 400,
                  "&:hover": { color: "#D4B55B" },
                }}
              >
                {data?.id}&nbsp;&nbsp;{data?.title}
              </Typography>
            ))}
          </Grid>{" "}
          {/* <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderColor: "#4F5154",
              borderWidth: 1,
            }}
          /> */}
          <Grid item xs={12} lg={7} md={12} sm={7}>
            <List>
              {(details[selectedId] || []).map((mem, index) => (
                <ListItem alignItems="flex-start" key={index}>
                  {mem?.title !== "Use Cases" && (
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
                  )}
                  <ListItemText
                    primary={
                      <Typography
                        variant={mem?.title === "Use Cases" ? "h5" : "h6"}
                        fontWeight={mem?.title === "Use Cases" ? 700 : 600}
                        color={
                          mem?.title === "Use Cases" ? "#D4B55B" : "inherit"
                        }
                      >
                        {mem?.title}
                      </Typography>
                    }
                    secondary={
                      <Typography variant={"h5"} mt={1}>
                        {mem?.description1}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </>
    </Box>
  );
};

export default UniteComponent;
