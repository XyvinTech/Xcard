import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import image from "../assets/images/Header4.webp";
import img1 from "../assets/images/money.png";
import img2 from "../assets/images/tree.png";
import Custom from "../ui/Custom";

const Header4 = () => {
  const [slider1Value, setSlider1Value] = useState(100);
  const [slider2Value, setSlider2Value] = useState(100);

  const conversionRate = 2.5;
  const treeConversionFactor = 3125;

  const bottomLine = slider1Value * slider2Value * conversionRate;
  const treesSaved = Math.floor(bottomLine / treeConversionFactor);

  return (
    <Grid
      container
      padding={{ xs: 5, md: 10, sm: 5 }}
      paddingLeft={{ xs: 5, md: 15, sm: 5 }}
      paddingRight={{ xs: 5, md: 15, sm: 5 }}
      height={{ xs: "auto", md: "750px" }}
      // bgcolor={"#000000"}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "fill",
      }}
    >
      <Grid
        item
        md={5}
        sm={6}
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
      >
        <Stack spacing={2}>
          <Typography fontSize={{ xs: "40px", md: "50px" }} fontWeight={700}>
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

      <Grid item md={7} sm={6} display={"flex"} justifyContent={"center"}>
        <Stack
          spacing={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems="center"
        >
          <Stack spacing={{ xs: 6, md: 2}}  pt={{ xs: 4, md: 2}}>
            {" "}
            <Custom
              value={slider1Value}
              onChange={(e, val) => setSlider1Value(val)}
              data={"Amount of Employees"}
            />
            <Custom
              value={slider2Value}
              onChange={(e, val) => setSlider2Value(val)}
              data={"Printing Cost"}
            />
          </Stack>

          <Stack
            spacing={{ xs: 2, md: 12 }}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Stack alignItems="center">
              <Box
                component="img"
                src={img1}
                alt="background"
                sx={{
                  objectFit: "fill",
                  width: {
                    xs: "100%",
                    lg: "140px",
                    md: "100%",
                    sm: "100%",
                  },
                  height: {
                    xs: "auto",
                    lg: "140px",
                    md: "100%",
                  },
                }}
              />
              <Typography variant={{ xs: "10px", md: "h3" }}>
                Bottom Line
              </Typography>
              <Typography
                fontSize={{ xs: "18px", md: "32px" }}
                fontWeight={700}
              >
                Rs. {bottomLine.toLocaleString()}
              </Typography>
              <Typography variant={{ xs: "8px", md: "h6" }}>
                Savings per year
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <Box
                component="img"
                src={img2}
                alt="background"
                sx={{
                  objectFit: "fill",
                  width: {
                    xs: "100%",
                    lg: "140px",
                    md: "100%",
                    sm: "100%",
                  },
                  height: {
                    xs: "auto",
                    lg: "140px",
                    md: "100%",
                  },
                }}
              />
              <Typography variant={{ xs: "10px", md: "h3" }}>
                Tree Saved
              </Typography>
              <Typography
                fontSize={{ xs: "18px", md: "32px" }}
                fontWeight={700}
              >
                {treesSaved}
              </Typography>
              <Typography variant={{ xs: "8px", md: "h6" }}>
                Savings per year
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header4;
