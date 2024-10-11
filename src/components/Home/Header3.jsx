import { Box, Grid, Stack, Typography, Skeleton } from "@mui/material";
import React from "react";

const Header3 = ({ data, title, subtitle }) => {
  return (
    <Box padding={{xs: 5, md:10,sm:5}} mt={10}>
      <>
        {title ? (
          <Typography fontSize={{ xs: "32px", md: "44px" }} lineHeight={"44px"} fontWeight={700} textAlign={"center"}>
            {title}
          </Typography>
        ) : (
          <Skeleton variant="text" width={300} height={60} />
        )}

        {subtitle ? (
          <Typography
            variant="h5"
            width={{ xs: "100%", md: "50%" }} 
            mx={"auto"} mt={2}
            textAlign={"center"}
          >
            {subtitle}
          </Typography>
        ) : (
          <Skeleton variant="text" width={"50%"} height={40} mx={"auto"} />
        )}

        <Grid container justifyContent="center" spacing={3} pt={10}>
          {!data
            ? Array.from({ length: 4 }).map((_, index) => (
                <Grid item md={3} key={index}>
                  <Stack spacing={2} alignItems="center">
                    <Skeleton variant="rectangular" width={190} height={190} />
                    <Skeleton variant="text" width={190} height={40} />
                    <Skeleton variant="text" width={190} height={30} />
                  </Stack>
                </Grid>
              ))
            : data.map((item, index) => (
                <Grid item md={3} sm={6} key={index}>
                  <Stack spacing={2} alignItems="center">
                    <img
                      src={item?.image}
                      alt={item?.title}
                      style={{
                        objectFit: "fill",
                        width: "190px",
                        height: "190px",
                      }}
                    />
                    {item?.icon && (
                      <img
                        src={item?.icon}
                        alt={item?.title}
                        style={{
                          objectFit: "fill",
                          width: "34px",
                          height: "35px",
                        }}
                      />
                    )}

                    <Typography variant="h3" textAlign="center">
                      {item.title}
                    </Typography>
                    <Typography variant="h5" textAlign="center">
                      {item.subtitle}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
        </Grid>
      </>
    </Box>
  );
};

export default Header3;
