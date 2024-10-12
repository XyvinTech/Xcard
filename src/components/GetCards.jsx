import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";

const GetCards = () => {
  return (
    <Box padding={{ xs: 5, md: 10, sm: 5 }} mt={10}>
      <>
        <Typography
          fontSize={{ xs: "32px", md: "44px" }}
          lineHeight={"44px"}
          fontWeight={700}
          textAlign={"center"}
        >
          Get in touch
        </Typography>

        <Typography
          variant="h5"
          width={{ xs: "100%", md: "50%" }}
          mx={"auto"}
          mt={2}
          textAlign={"center"}
        >
         
        </Typography>
      </>
    </Box>
  );
};

export default GetCards;
