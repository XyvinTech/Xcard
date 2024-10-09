import { InputAdornment } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import React from "react";

const StyledInput = ({
  placeholder,
  startIcon,
  rows,
  endIcon,
  disabled,
  type,
  onChange,
  value,
}) => {
  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <OutlinedInput
        type={type}
        value={value}
        multiline={true}
        rows={rows}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        startAdornment={
          startIcon ? (
            <InputAdornment position="start" sx={{ marginLeft: "12px" }}>
              {startIcon}
            </InputAdornment>
          ) : null
        }
        endAdornment={
          endIcon ? (
            <InputAdornment
              position="end"
              sx={{ marginRight: "12px", cursor: "pointer" }}
              onClick={() => endIcon.props.onClick && endIcon.props.onClick()}
            >
              {endIcon}
            </InputAdornment>
          ) : null
        }
        sx={{
          width: "100%",
          padding: "4px 16px",
          backgroundColor: "#292929",
          borderRadius: "8px",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none", 
          },
          border: "1px solid #A7A7A7", // Custom border
          "& .MuiInputBase-input": {
            color: "#fff", 
            padding: "8px",
          },
          "& input::placeholder": {
            color: "#BFBFBF",
            fontWeight: "400",
          },
        }}
      />
    </FormControl>
  );
};

export default StyledInput;
