import { Stack, Typography, Skeleton } from "@mui/material";
import React from "react";

const HomeCard = ({ data, loading }) => {
  const { title, description, img, name, role } = data || {}; 

  return (
    <Stack
      spacing={2}
      boxShadow={"0px 8px 16px rgba(0, 0, 0, 0.08)"}
      padding={"24px"}
      borderRadius={"8px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      border={"1px #E3E3E3 solid"}
      textAlign={"center"}
      height={{ lg :"395px",md:"410px", xs: "auto" }} 
    >
      {loading ? (
        <Skeleton variant="text" width={"80%"} height={40} animation="wave" />
      ) : (
        <Typography variant="h3" color="text.tertiary">
          {title}
        </Typography>
      )}
      {loading ? (
        <Skeleton variant="text" width={"90%"} height={30} animation="wave" />
      ) : (
        <Typography variant="h5" color="text.tertiary">
          {description}
        </Typography>
      )}
      {loading ? (
        <Skeleton
          variant="circular"
          width={80}
          height={80}
          animation="wave"
        />
      ) : (
        <img
          src={img}
          alt="img1"
          width={"80px"}
          height={"80px"}
          style={{ borderRadius: "50%", objectFit: "fill" }}
        />
      )}
      <Stack
        spacing={1}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {loading ? (
          <Skeleton variant="text" width={"60%"} height={25} animation="wave" />
        ) : (
          <Typography variant="h3" color="text.tertiary">
            {name}
          </Typography>
        )}
        {loading ? (
          <Skeleton variant="text" width={"50%"} height={20} animation="wave" />
        ) : (
          <Typography variant="h7" color="text.secondary">
            {role}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};

export default HomeCard;
