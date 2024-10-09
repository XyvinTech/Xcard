import React from "react";
import TextField from "@mui/material/TextField";

const StyledTextField = ({label}) => {
  return (
    <TextField
      id="standard-basic"
      label={label}
      variant="standard"
      sx={{
        "& .MuiInput-underline:before": {
          borderBottomColor: "rgba(255, 255, 255, 1)", // Default color
        },
        "& .MuiInput-underline:hover:before": {
          borderBottomColor: "rgba(255, 255, 255, 1)", // Hover color
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "rgba(255, 255, 255, 1)", // Focused color
        },
        "& .MuiFormLabel-root": {
          color: "rgba(142, 142, 142, 1)", // Label color
        },
        "& .MuiFormLabel-root.Mui-focused": {
          color: "rgba(142, 142, 142, 1)", // Focused label color
        },
        input: {
          color: "rgba(255, 255, 255, 1)", // Input text color
        },
      }}
    />
  );
};

export default StyledTextField;
