import React  from "react";
import { Box, Typography, Slider } from "@mui/material";

const Custom = ({ value, onChange , data}) => {
  return (
    <Box
      sx={{
        height: 46,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: {
            xs: 150,
            md: 300,
            lg: 400,
          },
          position: "relative",
        }}
      ><Typography fontWeight={400}>{data}</Typography>
        <Slider
          value={value}
          onChange={onChange}
          aria-labelledby="custom-slider"
          sx={{
            color: "transparent",
            "& .MuiSlider-track": {
              height: 13,
              background: "linear-gradient(182deg, #575142 0%, #FBF19A 100%)",
              borderRadius: 47,
            },
            "& .MuiSlider-thumb": {
              height: "42px",
              width: "42px",
              backgroundColor: "#222",
              boxShadow: "0px 2px 2px rgba(255, 255, 255, 0.35) inset",
              borderRadius: 63,
              "&:hover": {
                boxShadow: "0px 4px 4px rgba(255, 255, 255, 0.5) inset",
              },
              "&.Mui-focusVisible": {
                boxShadow: "0 0 0 8px rgba(255, 255, 255, 0.4)",
              },
            },
            "& .MuiSlider-rail": {
              height: 13,
              background: "rgba(87.96, 87.96, 87.96, 0.40)",
              borderRadius: 47,
            },
          }}
        />
      </Box>
      <Box
        sx={{
          width: {
            xs: 60, 
            md: 100, 
          },
          height: 46,
          pt: 1.5,
          pb: 1.5,
          pl: 1.5,
          pr: 3.75,
          background: "#272626",
          borderRadius: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginLeft: 2,
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: 18,
            fontFamily: "Barlow",
            fontWeight: 500,
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default Custom;
