import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import StyledInput from "../../ui/StyledInput";
import StyledButton from "../../ui/StyledButton";

const GetInTouch = () => {
  return (
    <Box  padding={{ xs: 5, md: 10 }} pb={20}>
      <Typography fontSize={{xs: "32px", md: "44px"}}  fontWeight={700} textAlign={"center"}>
        Get in touch
      </Typography>
      <Typography variant="h5" textAlign={"center"}>
        Please feel free to send us any questions, feedback or suggestions you
        might have.
      </Typography>
      <Grid
        container
        spacing={2}
        display={"flex"}
        justifyContent={"center"}
        padding={{ xs: 0, md: 40 }}
        paddingTop={{ xs: 5, md: 10 }}
        paddingBottom={{ xs: 5, md: 0}}
      >
        <Grid item md={12} xs={12}>
          <Typography mb={1}>Subject</Typography>
          <StyledInput placeholder="Enter Subject" />
        </Grid>
        <Grid item md={6}xs={12}>
          {" "}
          <Typography mb={1}>First Name</Typography>
          <StyledInput placeholder="Enter Your Name" />
        </Grid>
        <Grid item md={6}xs={12}>
          {" "}
          <Typography mb={1}>Last Name</Typography>
          <StyledInput placeholder="Enter Your Name" />
        </Grid>
        <Grid item md={12}xs={12}>
          {" "}
          <Typography mb={1}>Email Address</Typography>
          <StyledInput placeholder="Enter Email" />
        </Grid>
        <Grid item md={12}xs={12}>
          {" "}
          <Typography mb={1}>Message</Typography>
          <StyledInput placeholder="Enter Message" rows={5} />
        </Grid>
        <Grid item md={12}xs={12}>
        <Stack width={"100%"}> <StyledButton name={"Send Message"} /></Stack>
         
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetInTouch;
