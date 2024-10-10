import React from "react";
import { Stack, Typography, Skeleton } from "@mui/material";

const PeopleCard = ({ content = {} }) => {
  const { image, title, subtitle } = content;

  return (
    <Stack spacing={1}>
      {image ? (
        <img
          src={image}
          alt={"profile"}
          style={{
            objectFit: "fill",
            width: "270px",
            height: "326px",
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
