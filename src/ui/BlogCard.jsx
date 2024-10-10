import { Stack, Typography, Skeleton } from "@mui/material";
import React from "react";
import StyledButton from "./StyledButton";

const BlogCard = ({ content = {} }) => {
  const { image, title, subtitle } = content;

  return (
    <Stack borderRadius={"12px"} border={"1px solid #2D2D2D"}>
      {image ? (
        <img
          src={image}
          alt={"profile"}
          style={{
            objectFit: "fill",
            height: "215px",
            borderRadius: "12px",
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
      >
        {title ? (
          <Typography variant="h1" style={{ minHeight: "40px" }}>
            {title}
          </Typography>
        ) : (
          <Skeleton variant="text" width={"60%"} height={40} />
        )}

        {subtitle ? (
          <Typography variant="h6" style={{ minHeight: "30px" }}>
            {subtitle}
          </Typography>
        ) : (
          <Skeleton variant="text" width={"80%"} height={30} />
        )}

        <Stack direction={"row"} justifyContent={"space-between"} alignItems="center">
          <StyledButton name={"Read More"} />
          <Typography variant="h6">5 min read</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BlogCard;
