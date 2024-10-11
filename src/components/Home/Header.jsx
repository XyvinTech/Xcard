import { Grid, Stack, Typography, Skeleton, Box } from "@mui/material";
import React from "react";
import StyledButton from "../../ui/StyledButton";
import App from "../../assets/images/AppStore.webp";
import buttonimage from "../../assets/images/Button.png";
import Play from "../../assets/images/PlayStore.webp";
const Header = ({ content = {}, isHome, isMobile, shop }) => {
  const { image, title, subtitle, des, button } = content;

  return (
    <Grid
      container
      spacing={2}
      padding={{ xs: 5, md: 10 }}
      display={"flex"}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item md={6} display={"flex"} justifyContent={"flex-start"}>
        <Stack spacing={2}>
          {title ? (
            <Typography
              fontSize={{ xs: "32px", md: isHome ? "84px" : "50px" }}
              lineHeight={{ xs: "40px", md: isHome ? "100px" : "60px" }}
              fontWeight={700}
            >
              {title}
            </Typography>
          ) : (
            <Skeleton variant="text" width={300} height={100} />
          )}

          {subtitle ? (
            <Typography variant="h4">{subtitle}</Typography>
          ) : (
            <Skeleton variant="text" width={250} height={40} />
          )}
          {des && <Typography variant="h4">{des}</Typography>}
          {isMobile ? (
            <Stack direction={"row"} spacing={2} pt={2}>
              <Box
                component="img"
                src={App}
                alt="logo"
                sx={{
                  objectFit: "fill",
                  width: {
                    xs: "150px",
                    md: "180px",
                  },
                  height: {
                    xs: "44px",
                    md: "52px",
                  },
                }}
              />
              <Box
                component="img"
                src={Play}
                alt="logo"
                sx={{
                  objectFit: "fill",
                  width: {
                    xs: "150px",
                    md: "180px",
                  },
                  height: {
                    xs: "44px",
                    md: "52px",
                  },
                }}
              />
            </Stack>
          ) : (
            <Stack direction={"row"} spacing={2}>
              {shop ? (
                <Stack>
                  <Typography fontSize={"32px"} fontWeight={700}>
                    Our Mission
                  </Typography>
                  <img
                    style={{
                      width: 120,
                      height: 3,
                      background:
                        "linear-gradient(182deg, #575142 0%, #FBF19A 100%)",
                      borderRadius: 14,
                    }}
                    src={buttonimage}
                  />
                  <Typography variant="h4" mt={2}mb={{xs:2,md:0}}>
                    To empower professionals to connect, collaborate, and
                    succeed in today's digital world.
                  </Typography>
                </Stack>
              ) : (
                <>
                  {button ? (
                    <StyledButton name={button} />
                  ) : (
                    <Skeleton variant="rectangular" width={120} height={40} />
                  )}

                  {isHome && (
                    <Typography variant="h6" padding={"10px"}>
                      Learn More
                    </Typography>
                  )}
                </>
              )}
            </Stack>
          )}
        </Stack>
      </Grid>

      <Grid item md={6} display={"flex"} justifyContent={"center"}>
        {image ? (
          <Box
            component="img"
            src={image}
            alt="background"
            sx={{
              objectFit: "fill",
              width: {
                xs: shop ? "100%" : "100%",
                md: shop ? "337px" : "539px",
              },
              height: {
                xs: shop ? "auto" : "auto",
                md: shop ? "414px" : "514px",
              },
            }}
          />
        ) : (
          <Skeleton variant="rectangular" width={539} height={514} />
        )}
      </Grid>
    </Grid>
  );
};

export default Header;
