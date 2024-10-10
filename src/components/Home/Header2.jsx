import { Grid, Stack, Typography, Skeleton } from "@mui/material";
import React from "react";
import StyledButton from "../../ui/StyledButton";

const Header2 = ({ content = {}, white }) => {
  const { image, title, subtitle } = content;

  return (
    <>
      <Grid
        container
        spacing={2}
        padding={10}
        mt={10}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={6} display={"flex"} justifyContent={"flex-start"}>
          {image ? (
            <img
              src={image}
              alt="background"
              objectFit="fill"
              width={"539px"}
              height={"514px"}
            />
          ) : (
            <Skeleton variant="rectangular" width={539} height={514} />
          )}
        </Grid>

        <Grid item md={6} display={"flex"} justifyContent={"center"}>
          <Stack spacing={2} alignContent={"center"}>
            {title ? (
              <Typography
                fontSize={"50px"}
                lineHeight={"60px"}
                fontWeight={700}
                color={white && "#000"}
              >
                {title}
              </Typography>
            ) : (
              <Skeleton variant="text" width={300} height={60} />
            )}

            {subtitle ? (
              <Typography variant="h4" color={white && "#5E5E5E"}>
                {subtitle}
              </Typography>
            ) : (
              <Skeleton variant="text" width={250} height={40} />
            )}

            {white && (
              <Stack width={"30%"}>
                <StyledButton name={"Know More"} />
              </Stack>
            )}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Header2;
