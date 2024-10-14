import React from "react";
import { Stack, Typography, Skeleton, Box } from "@mui/material";

const PeopleCard = ({ content = {} }) => {
  const { image, title, subtitle } = content;

  return (
    <Stack spacing={1}>
      {image ? (
        <Box
          component="img"
          src={image}
          alt="profile"
          sx={{
            objectFit: "fill",
            width: {
              xs: "100%",
              sm: "100%",
              lg: "270px",
              md: "100%",
            },
            height: {
              xs: "auto",
              sm: "auto",
              lg: "326px",
              md: "100%",
            },
            borderRadius: "12px",
          }}
        />
      ) : (
        <Skeleton variant="rectangular" width={270} height={326} />
      )}

      {title ? (
        <Typography variant="h3">{title}</Typography>
      ) : (
        <Skeleton variant="text" width={200} height={40} />
      )}

      {subtitle ? (
        <Typography variant="h6">{subtitle}</Typography>
      ) : (
        <Skeleton variant="text" width={150} height={30} />
      )}
    </Stack>
  );
};

export default PeopleCard;
