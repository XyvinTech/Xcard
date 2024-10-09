import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import header from "../../assets/images/Header.png";
import StyledButton from "../../ui/StyledButton";

const Header = () => {
  return (
    <>
      <Grid container spacing={2} padding={10} display={"flex"} justifyContent="center" alignItems="center">
        <Grid item md={6} display={"flex"} justifyContent={"flex-start"}>
          <Stack spacing={2}>
            <Typography fontSize={"84px"} lineHeight={"100px"} fontWeight={700}>
              Elevate Your Professional Presence.
            </Typography>
            <Typography variant="h4">
              Reimagine the way you network and connect.
            </Typography>
            <Stack direction={"row"} spacing={2}>
              <StyledButton name={"Shop Now"} />
              <Typography variant="h6" padding={"10px"}>Learn More</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={6} display={"flex"} justifyContent={"center"}>
          <img
            src={header}
            alt="background"
            objectFit="fill"
            width={"539px"}
            height={"514px"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
