import { Stack, Typography, Skeleton } from "@mui/material";
import React from "react";
import StyledButton from "./StyledButton";

const BlogCard = ({ content = {} }) => {
  const { image, title, subtitle } = content;

  return (
    <Stack
      borderRadius={"12px"}
      border={"1px solid #2D2D2D"}
      height={"100%"}
    >
      {image ? (
        <img
          src={image}
          alt={"profile"}
          style={{
            objectFit: "fill",
            height: "215px",
            width: "100%",
            borderRadius: "12px 12px 0 0",
          }}
        />
      ) : (
        <Skeleton variant="rectangular" width={"100%"} height={215} />
      )}

      <Stack
        bgcolor={"#1E1E1E"}
        padding={"16px"}
        borderRadius={"0 0 12px 12px"}
        spacing={2}
        height={"200px"} 
        justifyContent={"space-between"}
      >
       
        {title ? (
          <Typography
            variant="h1"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              height: "auto", 
              maxHeight: "60px", 
            }}
          >
            {title}
          </Typography>
        ) : (
          <Skeleton variant="text" width={"60%"} height={40} />
        )}

        {subtitle ? (
          <Typography
            variant="h6"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              height: "auto", 
              maxHeight: "30px", 
            }}
          >
            {subtitle}
          </Typography>
        ) : (
          <Skeleton variant="text" width={"80%"} height={30} />
        )}

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems="center"
        >
          <StyledButton name={"Read More"} />
          <Typography variant="h6">5 min read</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BlogCard;