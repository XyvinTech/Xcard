import { Stack, Typography, Box, Skeleton } from "@mui/material";
import React from "react";
import StyledButton from "../ui/StyledButton";

const CardComponent = ({ content = {} }) => {
  const { image, title, subtitle, data } = content;

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Stack
        spacing={2}
        textAlign="center"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack height={{ md: "150px", xs: "auto" }}>
          {title ? (
            <Typography fontSize={{ md: "32px", xs: "24px" }} fontWeight={700}>
              {title}
            </Typography>
          ) : (
            <Skeleton variant="text" width={300} height={40} />
          )}

          {subtitle ? (
            <Typography fontSize={{ md: "18px", xs: "14px" }} fontWeight={300}>
              {subtitle}
            </Typography>
          ) : (
            <Skeleton variant="text" width={200} height={30} />
          )}
        </Stack>

        {image ? (
          <Box
            component={"img"}
            src={image}
            alt="Card image"
            sx={{
              objectFit: "fill",
              width: { xs: "100%", lg: "316px",md:"100%" },
              height: { xs: "auto", lg: "197px",md:"100%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        ) : (
          <Skeleton variant="rectangular" width={316} height={197} />
        )}

        {data ? (
          data?.map((item, index) => (
            <Stack padding={6} key={index} height={{ md: "200px", xs: "auto" }}>
              <Typography variant="h3">{item.title}</Typography>
              <Typography variant="h4" fontWeight={300} pt={2}>
                {item.subtitle}
              </Typography>
            </Stack>
          ))
        ) : (
          <Stack padding={6}>
            <Skeleton variant="text" width={200} height={40} />
            <Skeleton variant="text" width={150} height={30} />
          </Stack>
        )}

        <StyledButton name={"Buy Now"} />
      </Stack>
    </Box>
  );
};

export default CardComponent;
