import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import image from "../../assets/images/Header4.webp";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import Custom from "../../ui/Custom";

const Header4 = () => {
  return (
    <Grid
      container
      padding={{ xs: 5, md: 10}}
       height={{ xs: "auto", md: "750px" }} 
      // bgcolor={"#000000"}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "fill",
      }}
    >
      <Grid item md={5} paddingTop={15} justifyContent={'flex-start'}>
        <Stack spacing={2}>
          <Typography fontSize={{xs:"40px", md:"50px"}} fontWeight={700}>
            Green Your Network. Plant a Tree with Every Order.
          </Typography>
          <Typography variant="h4">
            Discover the environmental and financial benefits of switching to
            our digital business cards.
          </Typography>
          <Typography variant="h4">
            Research shows that many companies spend hundreds of dollars per
            employee on traditional paper business cards annually. By switching
            to our digital solution, you can significantly reduce costs and
            minimize your environmental impact.
          </Typography>
        </Stack>
      </Grid>

      <Grid item md={7}>
        <Stack spacing={4} alignItems="center">
          <Custom />
          <Custom />
          <Stack
            spacing={{ xs: 2, md: 10}}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Stack alignItems="center">
              <img
                src={img1}
                alt="savings 1"
                style={{ objectFit: "fill", borderRadius: "50%" }}
                width={"140px"}
                height={"140px"}
              />
              <Typography variant="h3">Bottom Line</Typography>
              <Typography fontSize={"32px"} fontWeight={700}>
                Rs. 25000
              </Typography>
              <Typography variant="h6">Savings per year</Typography>
            </Stack>
            <Stack alignItems="center">
              <img
                src={img2}
                alt="savings 2"
                style={{ objectFit: "fill", borderRadius: "50%" }}
                width={"140px"}
                height={"140px"}
              />
              <Typography variant="h3">Bottom Line</Typography>
              <Typography fontSize={"32px"} fontWeight={700}>
                Rs. 25000
              </Typography>
              <Typography variant="h6">Savings per year</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header4;
